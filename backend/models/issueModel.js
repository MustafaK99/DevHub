const mongoose = require("mongoose");

const issueSchema = mongoose.Schema(
  {
    created_by_user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    status: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    summary: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    issueType: {
      type: String,
      required: true,
    },
    priority: {
      type: String,
      required: true,
    },
    estimate: {
      type: Number,
      required: true,
    },
    linkedIssues: [{}],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Issue", issueSchema);
