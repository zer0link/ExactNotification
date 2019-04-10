const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./src/routes/routes');
const app = express();

const port = process.env.PORT || 8000;
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(port, () => {
    routes(app);
    console.log('We are live on ' + port);
});