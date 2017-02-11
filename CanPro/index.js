'use strict'
var express = require('express'), app = express();

var CartDetails = require('./js/cartDetails');

app.use(express.static(__dirname + '/templates/'));
app.get('/', function (req, res) {
	res.sendfile('view/CanPro.html');
});
app.get('/authentication', function auth (req, res) {
  var username = req.query.username, password = req.query.password;
  if (username === '' || password === '') {
    return res.status(500).send('Enter username and password');
  }
  if (username === 'pathologist' && password === 'pathologist') {
    return res.status(200).send(req.query.username + 'Authenticated');
  } else {
    return res.status(500).send('Invalid Credentials');
  }
});
app.get('/dashboard', function (req, res) { 
   res.sendfile('view/dashboard.html');
});
app.get('/display', function (req, res) {
	res.sendfile('view/homepage.html');
});
app.get('/addElement', CartDetails.addElement);
app.get('/displayCart', CartDetails.displayCart);
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
app.listen(5000);
console.log('Login/Signup example');