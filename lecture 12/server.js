const express = require('express');
const app = express();

const employeeRoutes = require('./routes/employeeRoute');

app.use(express.json()); // Middleware to parse JSON request bodies
app.use('/employees', employeeRoutes); // Use the employee routes under the '/api' path

const port = 3000;

app.listen(3000, () => {
  console.log(`Server is running on port 3000`);
});