'use strict'
var express = require('express');
var session = require('express-session');
var app = express();
var CartDetails = require('./js/cartDetails');
app.use(express.static(__dirname + '/templates/'));
app.get('/', function (req, res) { 
	res.sendfile('view/CanPro.html');
});
app.get('/veg_display', function (req, res) { 
   res.sendfile('view/fooddisplay.html');
});
app.get('/cart_items', function (req, res) { 
   res.sendfile('view/CartItemsDetails.html');
});
app.get('/products_display', function (req, res) { 
   res.sendfile('view/products_display.html');
});

app.get('/encryptPassword', CartDetails.encrypt);

app.get('/dashboard', function (req, res) {   
   res.sendfile('view/dashboard.html');
});
app.get('/display', function (req, res) {
	res.sendfile('view/homepage.html');
});
app.get('/food_display', function (req, res) {
	res.sendfile('view/fooddisplay.html');
});
app.get('/cosmeticsDisplay', function (req, res){
	res.sendfile('view/cosmeticsDisplay.html');
});
app.get('/gadgets_display', function(req, res)
{
	res.sendfile('view/gadgetsDisplay.html');
})
app.listen(4000);
console.log('Login/Signup example');
