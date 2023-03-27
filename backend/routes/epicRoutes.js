const express = require("express");
const router = express.Router();
const {
  createEpic,
  updateEpic,
  deleteEpic,
  getEpic,
  getEpics,
} = require("../controllers/epicController");

const { protect } = require("../middleware/authMiddleware");

router.get("/:projectId", protect, getEpics);
router.post("/", protect, createEpic);
router.get("/:id", protect, getEpic);
router.put("/:id", protect, updateEpic);
router.delete("/:id", protect, deleteEpic);

module.exports = router;
