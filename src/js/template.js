import $ from 'jquery';
import _ from 'lodash';
import {productInfo, companyLogo, userProfile, testmonInfo} from './dartsinfoAPI.js';

function getdesc (data) {

	var dataHTML = `
	 <div class="title"> ${data.data.product.title} </div>
	 <div class="script"> ${data.data.product.description} </div>`;
	 $('#infoAPI').append(dataHTML);
};

function getLogos (data) {

		data.results.forEach(function (data) {
		// console.log(data);
		var companyImg = data.image_url;
		// console.log(companyImg);
		var companyHTML = `<img src="${companyImg}"/>`;
		$('.companyLt').append(companyHTML);
	});
};

function profile (data) {

		data.results.map(function (data) {
		var userPic = data.picture.large;
		var userHTML = `<img src="${userPic}"/>`;
		$('.testimony').append(userHTML);
	});
};

function testmInfo (data) {
	data.results.map(function (data) {
		var infoTesti = data.review;
		var infoName = data.name;

		var testiHTML = `<div> ${infoTesti} </div>
						 <div>  ${infoName} </div>`
		$('.testimony').append(testiHTML);
	})
}


export {getdesc, getLogos, profile, testmInfo,};






