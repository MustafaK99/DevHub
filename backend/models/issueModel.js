const mongoose = require("mongoose");

const issueSchema = mongoose.Schema(
  {
    assignee: {
      type: mongoose.SchemaType.ObjectId,
      required: false,
      ref: "User",
    },
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
      required: false,
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
    linkedIssues: [
      {
        id: {
          type: mongoose.Schema.Types.ObjectId,
          required: false,
          ref: "Ticket",
        },
        status: {
          type: String,
          required: false,
        },
        title: {
          type: String,
          required: false,
        },
      },
    ],
    required: false,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Issue", issueSchema);
