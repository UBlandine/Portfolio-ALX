const UserActivity = require('../models/userActivity.model');

const trackLogin = async (req, res, next) => {
  try {
    const newUserActivity = new UserActivity({
      userId: req.user._id,
      eventType: 'login',
      ipAddress: req.ip,
      deviceInfo: req.headers['user-agent'],
    });
    await newUserActivity.save();
    next();
  } catch (err) {
    console.error('Error tracking login:', err);
    next(err);
  }
};

const trackLogout = async (req, res, next) => {
  try {
    const newUserActivity = new UserActivity({
      userId: req.user._id,
      eventType: 'logout',
      ipAddress: req.ip,
      deviceInfo: req.headers['user-agent'],
    });
    await newUserActivity.save();
    next();
  } catch (err) {
    console.error('Error tracking logout:', err);
    next(err);
  }
};

module.exports = { trackLogin, trackLogout };
