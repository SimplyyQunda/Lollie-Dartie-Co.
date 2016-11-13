import $ from 'jquery';
import _ from 'lodash';
import {productInfo, companyLogo, userProfile, testmonInfo} from './dartsinfoAPI.js';

function getdesc (data) {

	var dataHTML = `
	 <div class="title"> ${data.data.product.title} </div>
	 <div class="script"> ${data.data.product.description} </div>
	 <div id="media">
	  <button class="cart">Add to Cart</button>
      <a href="http://twitter.com/"><i class="fa fa-twitter-square" aria-hidden="true"></i></a>
      <a href="http://facebook.com/"><i class="fa fa-facebook-official" aria-hidden="true"></i></a>
      <a href="http://pinterest.com/"><i class="fa fa-pinterest" aria-hidden="true"></i></a>
      <a href="http://instagram.com/"><i class="fa fa-instagram" aria-hidden="true"></i></a>
    </div>
	 `;
	 $('#infoAPI').append(dataHTML);
};

function getLogos (data) {

		data.results.forEach(function (data) {
		// console.log(data);
		var companyImg = data.image_url;
		// console.log(companyImg);
		var companyHTML = `<img class="Comlogo" src="${companyImg}"/>`;
		$('.companyLt').append(companyHTML);
	});
};

function profile (data) {

		data.results.map(function (data) {
		var userPic = data.picture.large;
		var userHTML = `<img class="profileUser" src="${userPic}"/>`;
		$('.testimony').append(userHTML);
	});
};

function testmInfo (data) {
	data.results.map(function (data) {
		var infoTesti = data.review;
		var infoName = data.name;

		var testiHTML = `<div>
						 <div> ${infoName}  </div>
						 <div> ${infoTesti} </div>
						 </div>`
		$('.testimonyInfo').append(testiHTML);
	})
}


export {getdesc, getLogos, profile, testmInfo,};






