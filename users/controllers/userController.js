const users = [];

const getAllUsers = (req, res) => {
  res.json({ success: true, data: users });
};

const createUser = (req, res) => {
  const { name, email } = req.body;
  const newUser = { id: users.length + 1, name, email, joinedAt: new Date() };
  users.push(newUser);
  res.status(201).json({ success: true, message: 'User created successfully', user: newUser });
};

module.exports = { getAllUsers, createUser };
