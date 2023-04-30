const express = require("express");
const router = express.Router();
const {
  getIssues,
  setIssue,
  getIssue,
  updateIssue,
  deleteIssue,
} = require("../controllers/issueController");

const { protect } = require("../middleware/authMiddleware");

router.get("/", protect, getIssues);
router.post("/", protect, setIssue);
router.get("/:id", protect, getIssue);
router.put("/:id", protect, updateIssue);
router.delete("/:id", protect, deleteIssue);

module.exports = router;
