const { response } = require("express");
const asyncHandler = require("express-async-handler");
const { trusted } = require("mongoose");

const Issue = require("../models/issueModel");
const User = require("../models/userModel");

const getIssues = asyncHandler(async (req, res) => {
  const issues = await Issue.find({ user: req.user.id });

  res.status(200).json(issues);
});

const getIssue = asyncHandler(async (req, res) => {
  const issue = await Issue.findById(req.params.id);

  if (issue) {
    res.json(issue);
  } else {
    res.status(404).end();
  }
});

const setIssue = asyncHandler(async (req, res) => {
  const { status, title, content, issueType, priority, estimate } = req.body;
  const issue = new Issue({
    status,
    title,
    content,
    issueType,
    priority,
    estimate,
    user: req.user.id,
  });

  const savedIssue = await issue.save();

  res.status(201).json(savedIssue);
});

const updateIssue = asyncHandler(async (req, res) => {
  const givenIssue = Issue.findById(req.params.id);

  if (!givenIssue) {
    res.status(400);
    next(error);
  }

  const { status, title, content, issueType, priority, estimate } = req.body;
  const ticket = {
    status,
    title,
    content,
    issueType,
    priority,
    estimate,
  };

  if (!req.user) {
    res.status(401).json({ message: "Not Authorized" });
  }

  if (ticket.user.toString() !== req.user.id) {
    res.status(401).json({ message: "Not Authorized" });
  }

  newIssue = await Issue.findByIdAndUpdate(req.params.id, ticket, {
    new: true,
  });
  res.status(400).json(newIssue);
});

const deleteIssue = asyncHandler(async (req, res) => {
  const issue = await Issue.findByIdAndRemove(req.params.id);
  if (!issue) {
    res.status(400);
  }

  if (!req.user) {
    res.status(401);
  }

  if (issue.user.toString() !== req.user.id) {
    res.status(401);
  }

  await issue.remove();
  res.status(200).json({ id: req.params.id });
});

module.exports = {
  getIssues,
  setIssue,
  updateIssue,
  deleteIssue,
  getIssue,
};
