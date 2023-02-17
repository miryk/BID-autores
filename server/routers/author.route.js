const AuthorController = require('../controllers/author.controller');

module.exports = (app) => {
  app.get('/test', AuthorController.test);
  app.post('/', AuthorController.createAuthor);
  app.get('/', AuthorController.getAllAuthors);
  app.put('/:_id', AuthorController.updateAuthor);
  app.delete('/:_id', AuthorController.deleteAuthor);
  // app.put('/', AuthorController.updateQuery);
  // app.delete('/', AuthorController.deleteQuery);
}