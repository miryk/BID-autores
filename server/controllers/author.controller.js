const { Author } = require('../models/author.model');

module.exports.test = (req, res) => {
  res.json({message: 'Backend is functioning'});
}