const express = require("express");
const {
  createBook,
  getBooks,
  getBookById,
  updateBook,
  deleteBook,
} = require("../controllers/bookcontroller.js");

const router = express.Router();

router.post("/addbook", createBook);
router.get("/getallbooks", getBooks);
router.get("/getsinglebook/:id", getBookById);
router.put("/updatebook/:id", updateBook);
router.delete("/deletebook/:id", deleteBook);

module.exports = router;
