import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const { Schema, model } = mongoose;

const userSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, },
    password: { type: String, required: true },
    googleId: { type: String, unique: true, sparse: true }, 
    role: { type: String, enum: ['donor', 'NGO', 'volunteer', 'admin'], required: true },

    // Additional donor details (if applicable)
    organizationName: { type: String },
    contactNumber: { type: String },
    address: { type: String },
    website: { type: String },

    // Donation history tracking
    averageMonthlyDonations: { type: Number, default: 0 },
    totalDonations: { type: Number, default: 0 },
    lastDonationDate: { type: Date }
  },
  { timestamps: true } // Automatically manages createdAt & updatedAt
);

// Hash password before saving
userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

const User = model('User', userSchema);
export default User;
