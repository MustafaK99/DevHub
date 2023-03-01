const asyncHandler = require("express-async-handler");
const Epic = require("../models/epicModel");

const getEpics = asyncHandler(async (req, res) => {
  const Epics = await Epic.find({ project: req.params.projectId });

  res.status(200).json(Epics);
});

const getEpic = asyncHandler(async (req, res) => {
  const Epic = await Epic.findById(req.params.id);

  res.status(200).json(Epic);
});
