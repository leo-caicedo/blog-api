const { Schema, model } = require("mongoose");

const postSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
      max: 300,
    },
    username: {
      type: String,
      required: true,
    },
    categories: Array,
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = model("Post", postSchema);
