import $ from 'jquery';

//ajax request for product info

function productInfo (){ 
	return $.ajax ({
		url:'https://json-data.herokuapp.com/darts/info'
	});
};



//ajax request for partner companies logo

function companyLogo (){
	return $.ajax ({
		url: 'https://json-data.herokuapp.com/darts/companies'
	});	
}; 

// ajax request for user profile pictures

function userProfile () {
	return $.ajax({
		url: 'https://randomuser.me/api/'
	});
}; 

//ajax request for testimonial

function  testmonInfo () {
	return $.ajax({
		url: 'https://json-data.herokuapp.com/darts/testimonials'
	});
};

export {productInfo, companyLogo, userProfile, testmonInfo};






