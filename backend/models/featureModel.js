const mongoose = require("mongoose");

const featureSchema = mongoose.Schema(
  {
    created_by_user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },

    epic: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Epic",
    },

    status: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    tickets: [
      {
        id: {
          type: mongoose.Schema.Types.ObjectId,
          required: false,
          ref: "Ticket",
        },
        status: {
          type: String,
          required: true,
        },
        title: {
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
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Feature", featureSchema);
