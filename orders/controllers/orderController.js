const orders = [];

const getAllOrders = (req, res) => {
  res.json({ success: true, data: orders });
};

const createOrder = (req, res) => {
  const { bookId, userId, quantity } = req.body;
  const newOrder = { id: orders.length + 1, bookId, userId, quantity, date: new Date() };
  orders.push(newOrder);
  res.status(201).json({ success: true, message: 'Order created successfully', order: newOrder });
};

module.exports = { getAllOrders, createOrder };
