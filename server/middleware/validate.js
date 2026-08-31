const { z } = require('zod');

// =================== BOOKING VALIDATION ===================
const bookingSchema = z.object({
  customerName: z
    .string({ required_error: 'Customer name is required' })
    .min(2, 'Name must be at least 2 characters')
    .max(100, 'Name must be under 100 characters')
    .trim(),

  phone: z
    .string({ required_error: 'Phone number is required' })
    .min(8, 'Phone number must be at least 8 digits')
    .max(20, 'Phone number is too long'),

  email: z
    .string()
    .optional()
    .nullable()
    .or(z.literal('')),

  packageId: z.string().optional().default('sitakunda-adventure-tour'),
  packageName: z.string().optional().default('Sitakunda Tour'),

  travelDate: z
    .string({ required_error: 'Travel date is required' })
    .min(1, 'Travel date is required'),

  guests: z.object({
    adults: z.number().int().min(1).default(1),
    children: z.number().int().min(0).default(0),
    total: z.number().int().min(1).default(1),
  }).passthrough().optional(),

  pickupLocation: z.string().max(300).optional().nullable(),
  specialRequests: z.string().max(2000).optional().nullable(),
  addOns: z.array(z.any()).optional(),

  roomPreference: z.object({
    roomType: z.string().default('Standard Eco Cottage'),
    bedType: z.string().default('1 Queen Double Bed'),
    roomCount: z.number().int().min(1).default(1),
    upgradeFee: z.number().min(0).default(0),
  }).passthrough().optional(),

  pricing: z.object({
    basePrice: z.number().min(0).default(0),
    addOnsTotal: z.number().min(0).default(0),
    discount: z.number().min(0).default(0),
    grandTotal: z.number().min(0).default(0),
  }).passthrough().optional(),

  payment: z.object({
    method: z.string().default('bkash'),
    trxId: z.string().max(100).optional().nullable(),
    senderNumber: z.string().max(30).optional().nullable(),
    paidAmount: z.number().optional().default(0),
    paymentStatus: z.string().optional().default('Pending Verification'),
  }).passthrough().optional(),
}).passthrough();

// =================== CONTACT VALIDATION ===================
const contactSchema = z.object({
  name: z
    .string({ required_error: 'Name is required' })
    .min(2, 'Name must be at least 2 characters')
    .max(100)
    .trim(),

  phone: z
    .string()
    .min(10, 'Phone number must be at least 10 digits')
    .max(15)
    .regex(/^[0-9+\-\s()]+$/, 'Invalid phone number')
    .optional()
    .or(z.literal('')),

  email: z
    .string()
    .email('Invalid email')
    .optional()
    .or(z.literal('')),

  message: z
    .string({ required_error: 'Message is required' })
    .min(5, 'Message must be at least 5 characters')
    .max(2000, 'Message is too long'),
});

// =================== CUSTOM REQUEST VALIDATION ===================
const customRequestSchema = z.object({
  customerName: z
    .string({ required_error: 'Name is required' })
    .min(2)
    .max(100)
    .trim(),

  phone: z
    .string({ required_error: 'Phone is required' })
    .min(10)
    .max(15)
    .regex(/^[0-9+\-\s()]+$/, 'Invalid phone number'),

  groupSize: z.number().int().min(1).max(100).optional(),
  travelDate: z.string().optional(),
  duration: z.string().max(100).optional(),
  budget: z.string().max(100).optional(),
  selectedSpots: z.array(z.string()).optional(),
  specialRequests: z.string().max(2000).optional(),
});

// =================== PACKAGE VALIDATION ===================
const packageSchema = z.object({
  packageId: z.string().min(1, 'Package ID is required'),
  title: z.string().min(2, 'Title is required').max(200),
  duration: z.string().min(1, 'Duration is required'),
  price: z.number().min(0, 'Price must be positive'),
  category: z.string().optional(),
  badge: z.string().optional(),
  groupSize: z.string().optional(),
  image: z.string().optional(),
  tagline: z.string().max(500).optional(),
  inclusions: z.array(z.string()).optional(),
});

// =================== DESTINATION VALIDATION ===================
const destinationSchema = z.object({
  name: z.string().min(2, 'Spot name is required').max(200),
  bnName: z.string().max(200).optional(),
  category: z.string().optional(),
  difficulty: z.string().optional(),
  bestTime: z.string().optional(),
  shortDesc: z.string().max(1000).optional(),
  description: z.string().max(5000).optional(),
  image: z.string().optional(),
});

// =================== GUIDE VALIDATION ===================
const guideSchema = z.object({
  name: z.string().min(2, 'Guide name is required').max(100),
  phone: z
    .string({ required_error: 'Phone is required' })
    .min(10)
    .max(15)
    .regex(/^[0-9+\-\s()]+$/, 'Invalid phone number'),
  specialty: z.string().max(200).optional(),
  perDayRate: z.number().min(0).optional(),
  rating: z.number().min(0).max(5).optional(),
});

// =================== REVIEW VALIDATION ===================
const reviewSchema = z.object({
  customerName: z.string().min(2, 'Name is required').max(100),
  tourPackage: z.string().max(200).optional(),
  rating: z.number().int().min(1).max(5),
  reviewText: z.string().min(5, 'Review must be at least 5 characters').max(2000),
});

// =================== LOGIN VALIDATION ===================
const loginSchema = z.object({
  email: z
    .string({ required_error: 'Email is required' })
    .email('Invalid email address'),
  password: z
    .string({ required_error: 'Password is required' })
    .min(6, 'Password must be at least 6 characters'),
});

// =================== ZOD MIDDLEWARE FACTORY ===================
function validate(schema) {
  return (req, res, next) => {
    const result = schema.safeParse(req.body);
    if (!result.success) {
      const errors = result.error.issues.map(issue => ({
        field: issue.path.join('.'),
        message: issue.message,
      }));
      return res.status(400).json({
        success: false,
        message: 'Validation failed',
        errors,
      });
    }
    req.validatedBody = result.data;
    next();
  };
}

module.exports = {
  validate,
  bookingSchema,
  contactSchema,
  customRequestSchema,
  packageSchema,
  destinationSchema,
  guideSchema,
  reviewSchema,
  loginSchema,
};
