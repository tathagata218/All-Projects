const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const PORT = 3000;



app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());



