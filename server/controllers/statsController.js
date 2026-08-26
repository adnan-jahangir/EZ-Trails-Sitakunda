const Booking = require('../models/Booking');
const CustomRequest = require('../models/CustomRequest');
const Package = require('../models/Package');

// @desc    Get dashboard analytics & KPI stats (Admin)
// @route   GET /api/admin/stats
// @access  Private (Admin)
const getAdminStats = async (req, res, next) => {
  try {
    const [
      totalBookings,
      pendingBookings,
      confirmedBookings,
      completedBookings,
      customRequestsCount,
      packagesCount,
      allBookings,
    ] = await Promise.all([
      Booking.countDocuments(),
      Booking.countDocuments({ status: 'Pending' }),
      Booking.countDocuments({ status: 'Confirmed' }),
      Booking.countDocuments({ status: 'Completed' }),
      CustomRequest.countDocuments(),
      Package.countDocuments({ isActive: true }),
      Booking.find().select('pricing payment status createdAt'),
    ]);

    // Calculate revenue metrics
    let totalRevenue = 0;
    let receivedPayments = 0;
    let pendingPayments = 0;

    allBookings.forEach((b) => {
      if (b.status !== 'Cancelled') {
        totalRevenue += b.pricing?.grandTotal || 0;
        receivedPayments += b.payment?.paidAmount || (b.payment?.paymentStatus === 'Paid' ? (b.pricing?.grandTotal || 0) : 0);
      }
    });
    pendingPayments = totalRevenue - receivedPayments;

    // Recent 5 Bookings
    const recentBookings = await Booking.find().sort({ createdAt: -1 }).limit(6);

    // Recent 5 Custom Requests
    const recentRequests = await CustomRequest.find().sort({ createdAt: -1 }).limit(5);

    res.json({
      success: true,
      data: {
        totalBookings,
        pendingBookings,
        confirmedBookings,
        completedBookings,
        customRequestsCount,
        packagesCount,
        financials: {
          totalRevenue,
          receivedPayments,
          pendingPayments,
          currency: 'BDT',
        },
        recentBookings,
        recentRequests,
      },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = { getAdminStats };
