const AuthorController = require('../controllers/author.controller');

module.exports = (app) => {
  app.get('/test', AuthorController.test);
}