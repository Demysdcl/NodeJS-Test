var express = require('express');
var consign = require('consign');
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');
var morgan = require('morgan');
var logger = require('../service/logger.js');
var session = require('express-session');
var passport = require('passport');
var {Strategy: LocalStrategy} = require('passport-local');

module.exports = function(){
  var app = express();

  app.use(morgan("common",{
      stream: {
          write: function (message){
              logger.info(message);
          }
      }
  }));
  app.use(bodyParser.urlencoded({extended: true}));
  app.use(bodyParser.json());
  app.use(expressValidator());
  app.use(express.static('./public'));
 
  consign()
   .include('controller')
   .then('routes')
   .then('persistence')
   .then('service')
   .into(app);

  return app;
};