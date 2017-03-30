'use strict';
var Array = require('node-array');
var crypto = require('crypto');
const secret = 'keytoencrypt';
var selectedItems = [];
function addElement (req, res) {
	console.log("in server");
	selectedItems.push(req.query.selectedItem);
	return res.status(200).send(selectedItems);
}
function displayCart(req,res)
{	
	return res.status(200).send(selectedItems);
}
function encrypt(req, res)
{
var hash = crypto.createHmac('sha256', secret)
                   .update('req.query.pass')
                   .digest('hex');
console.log(hash);
return res.status(200).send(hash);
}
module.exports = {
  addElement,
  displayCart,
  encrypt
};
