require('dotenv').config();
const express = require('express');
const authRoutes = require('./routes/auth');
const todoRoutes = require('./routes/todos');
const adminRoutes = require('./routes/admin');
const secretRoutes = require('./routes/secret');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use('/', authRoutes);
app.use('/api/todos', todoRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api', secretRoutes);
 

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
