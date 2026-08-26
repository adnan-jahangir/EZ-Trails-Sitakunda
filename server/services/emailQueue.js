const nodemailer = require('nodemailer');

class EmailQueueService {
  constructor() {
    this.queue = [];
    this.isProcessing = false;
    this.transporter = null;
    this.initTransporter();
  }

  initTransporter() {
    if (process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS) {
      this.transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT) || 587,
        secure: process.env.SMTP_PORT === '465',
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      });
      console.log('[Email Queue] 📧 Live SMTP Transporter initialized.');
    } else {
      console.log('[Email Queue] ℹ️ SMTP not configured in .env. Background dispatcher will simulate & log email vouchers.');
    }
  }

  /**
   * Push an email job to the queue
   */
  push(job) {
    this.queue.push(job);
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

    this.push({
      to: booking.email || null,
      subject: `Booking Confirmed: ${booking.bookingId} - EZ Trails Sitakunda`,
      html,
    });
  }
}

module.exports = new EmailQueueService();
