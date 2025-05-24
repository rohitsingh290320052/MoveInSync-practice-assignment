const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
const userRoutes = require('./routes/userRoutes');

const app = express();
app.use(express.json());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use('/users', userRoutes);


const PORT = 3003;
app.listen(PORT, () => {
  console.log(`Users service running on http://localhost:${PORT}`);
});

