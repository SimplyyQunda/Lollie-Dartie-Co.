import $ from 'jquery';

//ajax request for prouct info

var productInfo = $.ajax ({
	url:'https://json-data.herokuapp.com/darts/info'

}).then(function(data){ console.log(data.data.product) })
// console.log(productInfo)
export {productInfo};