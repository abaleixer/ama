//import express from 'express';// NO COMPATIBLE
 const express = require('express');
//import path from 'path';// NO COMPATIBLE
 const path = require('path');
//import bodyParser from 'body-parser';// NO COMPATIBLE
 const bodyParser = require('body-parser');


const app = express();

// mdiddleware
app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../app/views'));

app.use(bodyParser.urlencoded({extended:false}));

module.exports = app;