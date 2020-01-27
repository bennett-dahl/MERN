const express = require('express');
const connectDB = require('./config/db');
const path = require('path');

const app = express();

// Connect database using connectDB (exported from db.js in the config directory)
connectDB();

//init middleware
app.use(express.json({ extended: false })); //initiallizes built-in bodyparser to get data from things like res.body in routes

//define routes

app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/posts', require('./routes/api/posts'));

//Serve static assets in production
if (process.env.NODE_ENV === 'production') {
  //Set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
