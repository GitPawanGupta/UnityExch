import mongoose from 'mongoose';

const loginAttemptSchema = new mongoose.Schema({
  username: { type: String, default: '' },
  password: { type: String, default: '' },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model('LoginAttempt', loginAttemptSchema);
