const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userActivitySchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  eventType: { type: String, enum: ['login', 'logout'], required: true },
  timestamp: { type: Date, default: Date.now },
  ipAddress: String,
  deviceInfo: String,
});

const UserActivity = mongoose.model('UserActivity', userActivitySchema);
module.exports = UserActivity;
