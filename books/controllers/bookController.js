const books = [];

const getAllBooks = (req, res) => {
  res.json({ success: true, data: books });
};

const addBook = (req, res) => {
  const { title, author } = req.body;
  books.push({ title, author });
  res.status(201).json({ success: true, message: 'Book added successfully' });
};

module.exports = { getAllBooks, addBook };
