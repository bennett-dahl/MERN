const express = require('express');
const connectDB = require('./config/db');

const app = express();

// Connect database using connectDB (exported from db.js in the config directory)
connectDB();

//init middleware
app.use(express.json({ extended: false })); //initiallizes built in bodyparser to get data from things like res.body in routes

app.get('/', (req, res) => res.send('API Running'));

//define routes

app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/posts', require('./routes/api/posts'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
