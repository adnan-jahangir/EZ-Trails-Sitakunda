const nodemailer = require('nodemailer');

class EmailQueueService {
  constructor() {
    this.queue = [];
    this.isProcessing = false;
    this.transporter = null;
    this.initTransporter();
  }

  initTransporter() {
    const user = process.env.SMTP_USER;
    const pass = (process.env.SMTP_PASS || '').replace(/\s+/g, '');

    if (user && pass) {
      if (process.env.SMTP_HOST && process.env.SMTP_HOST !== 'smtp.gmail.com') {
        this.transporter = nodemailer.createTransport({
          host: process.env.SMTP_HOST,
          port: Number(process.env.SMTP_PORT) || 587,
          secure: process.env.SMTP_PORT === '465',
          auth: { user, pass },
        });
      } else {
        this.transporter = nodemailer.createTransport({
          service: 'gmail',
          auth: { user, pass },
        });
      }
      console.log(`[Email Queue] 📧 Live SMTP Transporter initialized successfully for: ${user}`);
    } else {
      console.log('[Email Queue] ℹ️ SMTP not configured in .env. Background dispatcher will simulate & log email vouchers.');
    }
  }

  /**
   * Push an email job to the queue
   */
  async push(job) {
    this.queue.push(job);
    if (process.env.VERCEL) {
      return await this.processNext();
    }
    // Non-blocking queue trigger
    setImmediate(() => this.processNext());
  }

  /**
   * Process next job in FIFO queue
   */
  async processNext() {
    if (this.isProcessing || this.queue.length === 0) return;

    this.isProcessing = true;
    const job = this.queue.shift();

    try {
      if (this.transporter && job.to) {
        await this.transporter.sendMail({
          from: process.env.EMAIL_FROM || '"EZ Trails Sitakunda" <bookings@tourstk.com>',
          to: job.to,
          subject: job.subject,
          html: job.html,
        });
        console.log(`[Email Queue] ✅ Sent email to ${job.to}: "${job.subject}"`);
      } else {
        console.log(`[Email Queue] 📬 [Simulated Async Email] To: ${job.to || 'Customer'} | Subject: "${job.subject}"`);
      }
    } catch (err) {
      console.error(`[Email Queue Error] Failed sending email: ${err.message}`);
    } finally {
      this.isProcessing = false;
      if (this.queue.length > 0) {
        setImmediate(() => this.processNext());
      }
    }
  }

  /**
   * Queue a Booking Confirmation Email
   */
  sendBookingConfirmation(booking) {
    const html = `
      <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 16px; overflow: hidden;">
        <div style="background: #0e4d34; padding: 24px; text-align: center; color: #ffffff;">
          <h1 style="margin: 0; font-size: 22px; font-weight: bold;">EZ Trails Sitakunda (Tourstk)</h1>
          <p style="margin: 4px 0 0; font-size: 13px; color: #a7f3d0;">Booking Confirmation Voucher</p>
        </div>
        <div style="padding: 24px;">
          <p style="font-size: 14px; color: #334155;">Hello <strong>${booking.customerName}</strong>,</p>
          <p style="font-size: 13px; color: #64748b; line-height: 1.6;">
            Thank you for booking with EZ Trails Sitakunda! Your reservation has been placed successfully in our system.
          </p>
          
          <div style="background: #ecfdf5; border: 1px solid #a7f3d0; border-radius: 12px; padding: 16px; margin: 20px 0;">
            <div style="font-size: 11px; font-weight: bold; color: #065f46; text-transform: uppercase;">Tracking Number</div>
            <div style="font-size: 20px; font-weight: 800; color: #0e4d34; letter-spacing: 0.5px;">${booking.bookingId}</div>
          </div>

          <table style="width: 100%; font-size: 13px; color: #334155; border-collapse: collapse;">
            <tr style="border-bottom: 1px solid #f1f5f9;">
              <td style="padding: 8px 0; color: #64748b;">Package:</td>
              <td style="padding: 8px 0; font-weight: bold; text-align: right;">${booking.packageName}</td>
            </tr>
            <tr style="border-bottom: 1px solid #f1f5f9;">
              <td style="padding: 8px 0; color: #64748b;">Travel Date:</td>
              <td style="padding: 8px 0; font-weight: bold; text-align: right;">${booking.travelDate}</td>
            </tr>
            <tr style="border-bottom: 1px solid #f1f5f9;">
              <td style="padding: 8px 0; color: #64748b;">Guests:</td>
              <td style="padding: 8px 0; font-weight: bold; text-align: right;">${booking.guests?.total || 1} Person(s)</td>
            </tr>
            <tr style="border-bottom: 1px solid #f1f5f9;">
              <td style="padding: 8px 0; color: #64748b;">Total Amount:</td>
              <td style="padding: 8px 0; font-weight: 800; color: #0e4d34; font-size: 15px; text-align: right;">৳${(booking.pricing?.grandTotal || 0).toLocaleString()}</td>
            </tr>
          </table>

          <div style="margin-top: 24px; text-align: center;">
            <a href="https://wa.me/8801812345678" style="background: #25d366; color: #ffffff; text-decoration: none; padding: 10px 20px; border-radius: 99px; font-weight: bold; font-size: 12px; display: inline-block;">
              Chat with Trek Coordinator on WhatsApp
            </a>
          </div>
        </div>
        <div style="background: #f8fafc; border-top: 1px solid #e2e8f0; padding: 14px; text-align: center; font-size: 11px; color: #94a3b8;">
          Sitakunda, Chattogram, Bangladesh • Helpline: +880 1812-345678
        </div>
      </div>
    `;

    return this.push({
      to: booking.email || null,
      subject: `Booking Confirmed: ${booking.bookingId} - EZ Trails Sitakunda`,
      html,
    });
  }

  /**
   * Queue an Admin Alert Email for a New Booking
   */
  sendAdminNewBookingAlert(booking) {
    const adminEmail = process.env.ADMIN_ALERT_EMAIL || 'eztrailsbd@gmail.com';
    const cleanPhone = (booking.phone || '').replace(/[^0-9]/g, '');
    const waPhone = cleanPhone.startsWith('88') ? cleanPhone : `88${cleanPhone.startsWith('0') ? cleanPhone.slice(1) : cleanPhone}`;
    const waLink = cleanPhone ? `https://wa.me/${waPhone}?text=${encodeURIComponent(`Hello ${booking.customerName}, this is EZ Trails Sitakunda coordinator regarding your booking ${booking.bookingId}.`)}` : '#';

    const html = `
      <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #ffffff; border: 1px solid #cbd5e1; border-radius: 14px; overflow: hidden;">
        <div style="background: #0f172a; padding: 20px; text-align: center; color: #ffffff;">
          <h2 style="margin: 0; font-size: 20px; font-weight: bold; color: #38bdf8;">🔔 New Tour Booking Received!</h2>
          <p style="margin: 4px 0 0; font-size: 13px; color: #94a3b8;">Code: <strong>${booking.bookingId}</strong></p>
        </div>
        <div style="padding: 24px;">
          <p style="font-size: 14px; color: #334155; margin-bottom: 16px;">
            A customer just completed a booking on <strong>EZ Trails Sitakunda</strong>:
          </p>

          <table style="width: 100%; font-size: 13px; border-collapse: collapse; margin-bottom: 20px;">
            <tr style="border-bottom: 1px solid #e2e8f0;"><td style="padding: 8px 0; color: #64748b;">Customer:</td><td style="padding: 8px 0; font-weight: bold;">${booking.customerName}</td></tr>
            <tr style="border-bottom: 1px solid #e2e8f0;"><td style="padding: 8px 0; color: #64748b;">Phone:</td><td style="padding: 8px 0; font-weight: bold;">${booking.phone}</td></tr>
            <tr style="border-bottom: 1px solid #e2e8f0;"><td style="padding: 8px 0; color: #64748b;">Package:</td><td style="padding: 8px 0; font-weight: bold;">${booking.packageName}</td></tr>
            <tr style="border-bottom: 1px solid #e2e8f0;"><td style="padding: 8px 0; color: #64748b;">Travel Date:</td><td style="padding: 8px 0; font-weight: bold;">${booking.travelDate}</td></tr>
            <tr style="border-bottom: 1px solid #e2e8f0;"><td style="padding: 8px 0; color: #64748b;">Guests:</td><td style="padding: 8px 0; font-weight: bold;">${booking.guests?.total || 1} Person(s)</td></tr>
            <tr style="border-bottom: 1px solid #e2e8f0;"><td style="padding: 8px 0; color: #64748b;">Total Amount:</td><td style="padding: 8px 0; font-weight: 800; color: #0e4d34; font-size: 15px;">৳${(booking.pricing?.grandTotal || 0).toLocaleString()}</td></tr>
            <tr style="border-bottom: 1px solid #e2e8f0;"><td style="padding: 8px 0; color: #64748b;">Payment Method:</td><td style="padding: 8px 0; font-weight: bold;">${booking.payment?.method || 'bKash'} (${booking.payment?.paymentStatus || 'Pending Verification'})</td></tr>
            ${booking.payment?.trxId ? `<tr style="border-bottom: 1px solid #e2e8f0;"><td style="padding: 8px 0; color: #64748b;">TrxID:</td><td style="padding: 8px 0; font-weight: bold; color: #2563eb;">${booking.payment.trxId}</td></tr>` : ''}
            ${booking.payment?.senderNumber ? `<tr style="border-bottom: 1px solid #e2e8f0;"><td style="padding: 8px 0; color: #64748b;">Sender Mobile:</td><td style="padding: 8px 0; font-weight: bold;">${booking.payment.senderNumber}</td></tr>` : ''}
            ${booking.specialRequests ? `<tr style="border-bottom: 1px solid #e2e8f0;"><td style="padding: 8px 0; color: #64748b;">Notes:</td><td style="padding: 8px 0; font-style: italic;">${booking.specialRequests}</td></tr>` : ''}
          </table>

          <div style="text-align: center; margin-top: 24px;">
            <a href="${waLink}" target="_blank" style="background: #25d366; color: #ffffff; text-decoration: none; padding: 12px 24px; border-radius: 99px; font-weight: bold; font-size: 13px; display: inline-block;">
              💬 Click to WhatsApp Traveler (${booking.phone})
            </a>
          </div>
        </div>
      </div>
    `;

    return this.push({
      to: adminEmail,
      subject: `🚨 [New Booking] ${booking.bookingId} - ${booking.customerName} (৳${(booking.pricing?.grandTotal || 0).toLocaleString()})`,
      html,
    });
  }

  /**
   * Queue an Email to Customer when Booking is Confirmed by Admin
   */
  sendCustomerBookingConfirmed(booking) {
    if (!booking.email) return;

    const guideHtml = (booking.assignedGuide && booking.assignedGuide.name) ? `
      <div style="background: #022c1e; color: #ffffff; border-radius: 12px; padding: 18px; margin: 20px 0; border: 1px solid #059669;">
        <div style="font-size: 11px; font-weight: bold; color: #6ee7b7; text-transform: uppercase; letter-spacing: 0.05em;">Your Assigned Tour Guide</div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 4px; color: #ffffff;">${booking.assignedGuide.name}</div>
        <div style="font-size: 13px; color: #a7f3d0; margin-top: 2px;">📞 Phone: <a href="tel:${booking.assignedGuide.phone}" style="color: #ffffff; font-weight: bold;">${booking.assignedGuide.phone || 'Available on Arrival'}</a></div>
        ${booking.assignedGuide.role ? `<div style="font-size: 12px; color: #cbd5e1; margin-top: 2px;">${booking.assignedGuide.role}</div>` : ''}
        ${booking.assignedVehicle ? `<div style="font-size: 12px; color: #fde047; margin-top: 6px;">🚐 Assigned Transport: <strong>${booking.assignedVehicle}</strong></div>` : ''}
      </div>
    ` : '';

    const html = `
      <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #ffffff; border: 1px solid #cbd5e1; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.08);">
        <div style="background: linear-gradient(135deg, #0e4d34 0%, #073824 100%); padding: 28px 24px; text-align: center; color: #ffffff;">
          <div style="display: inline-block; background: #10b981; color: #ffffff; padding: 4px 14px; border-radius: 99px; font-size: 11px; font-weight: 800; text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 8px;">
            Booking Confirmed & Scheduled
          </div>
          <h1 style="margin: 0; font-size: 24px; font-weight: 900; letter-spacing: -0.5px;">Sitakunda Journey Confirmed!</h1>
          <p style="margin: 6px 0 0; font-size: 13px; color: #a7f3d0;">EZ Trails Sitakunda • Official Travel Voucher</p>
        </div>

        <div style="padding: 24px;">
          <p style="font-size: 15px; color: #1e293b; margin-top: 0;">
            Dear <strong>${booking.customerName}</strong>,
          </p>
          <p style="font-size: 13px; color: #475569; line-height: 1.6;">
            Great news! Your tour package reservation for <strong>${booking.packageName}</strong> has been officially approved and confirmed by our expedition coordinator. We have reserved your slots and prepared your briefing schedule.
          </p>

          <div style="background: #f0fdf4; border: 1px solid #bbf7d0; border-radius: 12px; padding: 14px 18px; margin: 16px 0;">
            <div style="font-size: 10px; font-weight: bold; color: #166534; text-transform: uppercase;">Your Booking ID</div>
            <div style="font-size: 20px; font-weight: 900; color: #0e4d34; font-family: monospace;">${booking.bookingId}</div>
            <div style="margin-top: 4px;">
              <span style="background: #dcfce7; color: #15803d; font-weight: 800; font-size: 11px; padding: 3px 8px; border-radius: 99px; border: 1px solid #86efac;">
                ✅ CONFIRMED
              </span>
            </div>
          </div>

          ${guideHtml}

          <table style="width: 100%; font-size: 13px; color: #334155; border-collapse: collapse; margin: 20px 0;">
            <tr style="border-bottom: 1px solid #f1f5f9;">
              <td style="padding: 10px 0; color: #64748b;">Travel Date:</td>
              <td style="padding: 10px 0; font-weight: bold; text-align: right; color: #0f172a;">${booking.travelDate}</td>
            </tr>
            <tr style="border-bottom: 1px solid #f1f5f9;">
              <td style="padding: 10px 0; color: #64748b;">Pickup Point:</td>
              <td style="padding: 10px 0; font-weight: bold; text-align: right; color: #0f172a;">${booking.pickupLocation || 'Sitakunda Bus Station'}</td>
            </tr>
            <tr style="border-bottom: 1px solid #f1f5f9;">
              <td style="padding: 10px 0; color: #64748b;">Travelers:</td>
              <td style="padding: 10px 0; font-weight: bold; text-align: right; color: #0f172a;">${booking.guests?.total || 1} Guest(s)</td>
            </tr>
            <tr style="border-bottom: 1px solid #f1f5f9;">
              <td style="padding: 10px 0; color: #64748b;">Room & Stay:</td>
              <td style="padding: 10px 0; font-weight: bold; text-align: right; color: #0f172a;">${booking.roomPreference?.roomType || 'Standard Eco Cottage'}</td>
            </tr>
            <tr style="border-bottom: 1px solid #f1f5f9;">
              <td style="padding: 10px 0; color: #64748b;">Total Package Price:</td>
              <td style="padding: 10px 0; font-weight: 800; text-align: right; color: #0e4d34; font-size: 15px;">৳${(booking.pricing?.grandTotal || 0).toLocaleString()}</td>
            </tr>
            <tr style="border-bottom: 1px solid #f1f5f9;">
              <td style="padding: 10px 0; color: #64748b;">Advance Paid:</td>
              <td style="padding: 10px 0; font-weight: bold; text-align: right; color: #16a34a;">৳${(booking.payment?.paidAmount || 0).toLocaleString()} (${booking.payment?.paymentStatus || 'Verified'})</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #64748b;">Due on Arrival:</td>
              <td style="padding: 10px 0; font-weight: 800; text-align: right; color: #0f172a;">৳${Math.max(0, (booking.pricing?.grandTotal || 0) - (booking.payment?.paidAmount || 0)).toLocaleString()}</td>
            </tr>
          </table>

          ${booking.adminNotes ? `
            <div style="background: #f8fafc; border-left: 4px solid #0e4d34; padding: 12px 16px; margin: 16px 0; border-radius: 4px;">
              <div style="font-size: 11px; font-weight: bold; color: #0e4d34; text-transform: uppercase;">Coordinator Notes</div>
              <div style="font-size: 12px; color: #475569; margin-top: 4px;">${booking.adminNotes}</div>
            </div>
          ` : ''}

          <div style="text-align: center; margin: 28px 0 10px 0;">
            <a href="https://wa.me/8801939627110?text=${encodeURIComponent(`Hello EZ Trails, my confirmed booking ID is ${booking.bookingId}. I want to connect with my coordinator.`)}" target="_blank" style="background: #25d366; color: #ffffff; text-decoration: none; padding: 12px 24px; border-radius: 99px; font-weight: 800; font-size: 13px; display: inline-block;">
              💬 Chat with Coordinator on WhatsApp
            </a>
          </div>
        </div>

        <div style="background: #f8fafc; border-top: 1px solid #e2e8f0; padding: 16px; text-align: center; font-size: 11px; color: #94a3b8;">
          EZ Trails Sitakunda (Tourstk) • Official Hotline: 01939627110 / 01876418411<br>
          Sitakunda Highway Bus Station, Chattogram, Bangladesh
        </div>
      </div>
    `;

    return this.push({
      to: booking.email,
      subject: `🎉 Booking Confirmed! (${booking.bookingId}) - EZ Trails Sitakunda`,
      html,
    });
  }

  /**
   * Queue an Email to Customer when Booking is Cancelled / Rejected by Admin
   */
  sendCustomerBookingCancelled(booking, reason) {
    if (!booking.email) return;

    const html = `
      <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #ffffff; border: 1px solid #cbd5e1; border-radius: 16px; overflow: hidden;">
        <div style="background: #334155; padding: 24px; text-align: center; color: #ffffff;">
          <h1 style="margin: 0; font-size: 22px; font-weight: bold;">Booking Update Notification</h1>
          <p style="margin: 4px 0 0; font-size: 13px; color: #cbd5e1;">EZ Trails Sitakunda • Reservation Status</p>
        </div>
        <div style="padding: 24px;">
          <p style="font-size: 14px; color: #1e293b;">Dear <strong>${booking.customerName}</strong>,</p>
          <p style="font-size: 13px; color: #475569; line-height: 1.6;">
            We are writing to update you regarding your tour booking request (ID: <strong>${booking.bookingId}</strong>) for <strong>${booking.packageName}</strong> on <strong>${booking.travelDate}</strong>.
          </p>
          <p style="font-size: 13px; color: #475569; line-height: 1.6;">
            Unfortunately, this booking has been marked as <strong>Cancelled</strong> by our management desk.
          </p>

          ${reason ? `
            <div style="background: #fff1f2; border: 1px solid #fecdd3; border-radius: 10px; padding: 14px; margin: 16px 0;">
              <div style="font-size: 11px; font-weight: bold; color: #be123c; text-transform: uppercase;">Reason / Notes</div>
              <div style="font-size: 13px; color: #881337; margin-top: 4px;">${reason}</div>
            </div>
          ` : ''}

          <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 10px; padding: 14px; margin: 16px 0;">
            <div style="font-size: 11px; font-weight: bold; color: #475569; text-transform: uppercase;">Advance Payment & Refunds</div>
            <p style="font-size: 12px; color: #64748b; margin: 6px 0 0; line-height: 1.5;">
              If you have already sent an advance payment (via bKash / Nagad), our accounts desk will process a 100% refund or assist you in rescheduling for another date. Please reach out directly to our helpline.
            </p>
          </div>

          <div style="text-align: center; margin-top: 24px;">
            <a href="https://wa.me/8801939627110?text=${encodeURIComponent(`Hello EZ Trails, regarding my cancelled booking ${booking.bookingId}, I would like to inquire about refund or rescheduling.`)}" target="_blank" style="background: #25d366; color: #ffffff; text-decoration: none; padding: 10px 22px; border-radius: 99px; font-weight: bold; font-size: 12px; display: inline-block;">
              💬 Contact Support Desk on WhatsApp (01939627110)
            </a>
          </div>
        </div>

        <div style="background: #f8fafc; border-top: 1px solid #e2e8f0; padding: 14px; text-align: center; font-size: 11px; color: #94a3b8;">
          EZ Trails Sitakunda • Hotline: 01939627110
        </div>
      </div>
    `;

    return this.push({
      to: booking.email,
      subject: `Booking Status Update: ${booking.bookingId} - EZ Trails Sitakunda`,
      html,
    });
  }
}

module.exports = new EmailQueueService();
