const express = require('express');
const bodyParser = require('body-parser');

// App
const app = express();

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.get('/home', (req, res) => {
  res.json({
    name: 'Bill',
    age: 99
  })
})

const PORT = 3001;
app.listen(PORT, () => console.log('Server is up!!'));
console.log('Running on http://localhost:' + PORT );