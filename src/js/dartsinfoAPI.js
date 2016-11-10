import $ from 'jquery';

//ajax request for product info

var productInfo = $.ajax ({
	url:'https://json-data.herokuapp.com/darts/info'
}).then(function(data){ console.log(data.data.product) });

//ajax request for partner companies logo

var companyLogo = $.ajax({
	url: 'https://json-data.herokuapp.com/darts/companies'
}).then(function(data){ console.log(data)});

// ajax request for user profile pictures

var userProfile = $.ajax({
	url: 'https://randomuser.me/api/'
}).then(function(data){ console.log(data.results)});

//ajax request for testimonial

var testmonInfo = $.ajax({
	url: 'https://json-data.herokuapp.com/darts/testimonials'
}).then(function(data){ console.log(data.results)});

export {productInfo, companyLogo, userProfile, testmonInfo};