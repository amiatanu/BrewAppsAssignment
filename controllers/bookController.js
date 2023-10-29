const Joi = require("joi");
const Book = require("../models/bookModel");

// Controller functions for CRUD operations

// Add a new book
const createBook = async (req, res) => {
  const createBookSchema = Joi.object({
    title: Joi.string().required(),
    author: Joi.string().required(),
    summary: Joi.string().required(),
  });

  try {
    const { error } = createBookSchema.validate(req.body);

    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }

    const { title, author, summary } = req.body;

    // Check if a book with the same title already exists
    const existingBook = await Book.findOne({ title });

    if (existingBook) {
      return res
        .status(409)
        .json({ error: `A book with the title '${title}' already exists` });
    }

    const book = new Book({ title, author, summary });
    const savedBook = await book.save();
    res.status(201).json(savedBook);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Could not add book" });
  }
};

// Get a list of all books
const getBooks = (req, res) => {
  Book.find()
    .then((books) => res.status(200).json(books))
    .catch((err) => {
      console.error(err);
      res.status(500).json({ error: "Could not fetch books" });
    });
};

// Get a single book by its ID
const getBookById = (req, res) => {
  const bookId = req.params.id;
  Book.findById(bookId)
    .then((book) => {
      if (!book) {
        return res.status(404).json({ error: "Book not found" });
      }
      res.status(200).json(book);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({ error: "Could not fetch the book" });
    });
};

// Update a book by ID
const updateBook = (req, res) => {
  const bookId = req.params.id;
  const { title, author, summary } = req.body;
  Book.findByIdAndUpdate(bookId, { title, author, summary }, { new: true })
    .then((updatedBook) => {
      if (!updatedBook) {
        return res.status(404).json({ error: "Book not found" });
      }
      res.status(200).json(updatedBook);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({ error: "Could not update the book" });
    });
};

// Delete a book by ID
const deleteBook = (req, res) => {
  const bookId = req.params.id;
  Book.findByIdAndRemove(bookId)
    .then((deletedBook) => {
      if (!deletedBook) {
        return res.status(404).json({ error: "Book not found" });
      }
      res.status(204).end();
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({ error: "Could not delete the book" });
    });
};

module.exports = {
  createBook,
  getBooks,
  getBookById,
  updateBook,
  deleteBook,
};
