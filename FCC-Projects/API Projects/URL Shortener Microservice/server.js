const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3000;
const app = express();


app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
