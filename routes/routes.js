var express = require('express');
var router = express.Router();


var controller = require('../controllers/index.js');
module.exports = function(app){
	app.route('/check').get(controller.home)
}