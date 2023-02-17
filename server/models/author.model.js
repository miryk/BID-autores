const mongoose = require("mongoose");

const AuthorSchema = new mongoose.Schema(
  {
    name:{
      type: String,
      minlength: [3, "Name needs at least 3 characters"],
      required: [true, "Name is required"],
      unique: [true, "The author already exist"]
    }
  }, {
    timestamps: true
  }
)

module.exports.Author = mongoose.model("Author", AuthorSchema)