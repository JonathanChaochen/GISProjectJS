const express = require('express');
const bodyParser = require('body-parser');
const locationRouter = require('./routes/locations')

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api/locations', locationRouter);

app.listen(port, () => console.log(`Listening on port ${port}`));