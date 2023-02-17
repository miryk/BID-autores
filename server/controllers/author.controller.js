const { Author } = require("../models/author.model");

module.exports.test = (req, res) => {
  res.json({ message: "Backend is functioning" });
};

module.exports.getAllAuthors = async (req, res) => {
  try {
    const allAuthors = await Author.find({}).sort({name: 1});
    res.json(allAuthors);
  } catch (err) {
    res.status(400);
    res.json(err.message);
  }
}

module.exports.createAuthor = async (req, res) => {
  try {
    const newAuthor = await Author.create(req.body);
    res.json(newAuthor);
  } catch (err) {
    res.status(400);
    res.json(err.message);
  }
};

module.exports.updateAuthor = async (req, res) => {
  try {
    const update = await Author.findOneAndUpdate({_id: req.params._id}, req.body, { new: true, runValidators: true })
    res.json(update);
  } catch (err) {
    res.status(400);
    res.json(err.message);
  }
}

// Delete with query.params
// module.exports.deleteQuery = async (req, res) => {
//   try {
//     const deleteAuthor = await Author.findOneAndDelete(req.query);
//     res.json({deleted: deleteAuthor})
//   } catch (err) {
//     res.status(400);
//     res.json(err.message);
//   }
// }

// Update with query.params
// module.exports.updateQuery = async (req, res) => {
//   try {
//     const update = await Author.findOneAndUpdate(req.query, req.body, {new: true, runValidators: true});
//     res.json(update);
//   } catch (err) {
//     res.status(400);
//     res.json(err.message);
//   }
// }

module.exports.deleteAuthor = async (req, res) => {
  try {
    const deleteAuthor = await Author.findOneAndDelete({_id: req.params._id});
    res.json({deleted: deleteAuthor})
  } catch (err) {
    res.status(400);
    res.json(err.message);
  }
}


module.exports.getAuthorBy = async (req, res) => {
  try {
    const authors = await Author.find(req.query);
    res.json(authors)
  } catch (err) {
    res.status(400);
    res.json(err.message);
  }
}