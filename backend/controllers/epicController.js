const asyncHandler = require("express-async-handler");
const Epic = require("../models/epicModel");

const getEpics = asyncHandler(async (req, res) => {
  const Epics = await Epic.find({ project: req.params.projectId });

  res.status(200).json(Epics);
});

const getEpic = asyncHandler(async (req, res) => {
  const Epic = await Epic.findById(req.params.id);

  if (Epic) {
    res.status(200).json(Epic);
  } else {
    res.status(404).end();
  }
});

const createEpic = asyncHandler(async (req, res) => {
  const { project, status, title, content, features } = req.body;

  const epic = new Epic({
    project,
    status,
    title,
    content,
    features,
  });

  const savedEpic = await epic.save();
  res.status(201).json(savedEpic);
});

const updateEpic = asyncHandler(async (req, res) => {
  const givenEpic = Epic.findById(req.params.id);

  if (!givenEpic) {
    res.status(400);
    Next(error);
  }

  const { project, status, title, content, features } = req.body;

  const epic = {
    project,
    status,
    title,
    content,
    features,
  };

  if (!req.user) {
    res.status(401).json({ message: "Not Authorized" });
  }

  const newEpic = await Epic.findByIdAndUpdate(req.params.id, epic);
  res.status(201).json(newEpic);
});

const deleteEpic = asyncHandler(async (req, res) => {
  const epic = await Epic.findByIdAndRemove(req.params.id);
  if (!Epic) {
    res.status(400);
  }

  if (!req.user) {
    res.status(401);
  }

  const userFound = await Epic.find({ collaborators: "req.user.id" });
  if (!userFound) {
    res.status(401);
  }

  await epic.remove();
  res.status(200).json({ id: req.params.id });
});

module.exports = {
  getEpics,
  getEpic,
  updateEpic,
  createEpic,
  deleteEpic,
};
