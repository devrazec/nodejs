import express from 'express';

const app = express();
const PORT = 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello, Express with ES Modules!');
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
