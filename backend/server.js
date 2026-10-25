require('dotenv').config();

const express = require('express');
const cors = require('cors');

const urlRoutes = require('./routes/urlRoutes');
const errorHandler = require('./middleware/errorHandler');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('URL Shortener Backend Running!');
});

app.use('/', urlRoutes);

app.use(errorHandler);

// Start the server locally
if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
  });
}

// Export the Express app for Vercel
module.exports = app;