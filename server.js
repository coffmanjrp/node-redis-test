const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
app.use(cors());

app.get('/photos', async (req, res) => {
  const albumId = req.query.albumId;
  const { data } = await axios.get(
    'https://jsonplaceholder.typicode.com/photos',
    { params: { albumId } }
  );
  res.json(data);
});

app.get('/photos/:id', async (req, res) => {
  const { data } = await axios.get(
    `https://jsonplaceholder.typicode.com/photos/${req.params.id}`
  );
  res.json(data);
});

const PORT = 3000;

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
