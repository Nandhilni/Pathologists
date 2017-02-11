'use strict';
var Array = require('node-array');

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
module.exports = {
  addElement,
  displayCart
};
