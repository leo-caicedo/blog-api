const { Schema, model } = require("mongoose");

const categorySchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
  },
  { versionKey: false }
);

module.exports = model("Category", categorySchema);
