const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
const bookRoutes = require('./routes/bookRoutes');

const app = express();
app.use(express.json());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use('/books', bookRoutes);

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Books service running on http://localhost:${PORT}`);
});
