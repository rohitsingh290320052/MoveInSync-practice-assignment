const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
const orderRoutes = require('./routes/orderRoutes');

const app = express();
app.use(express.json());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use('/orders', orderRoutes);

const PORT = 3002;
app.listen(PORT, () => {
  console.log(`Orders service running on http://localhost:${PORT}`);
});
