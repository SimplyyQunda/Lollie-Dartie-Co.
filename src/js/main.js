import $ from 'jquery';
import _ from 'lodash';
import {productInfo, companyLogo, userProfile, testmonInfo} from './dartsinfoAPI.js';
import {getMap} from './googleAPI.js';
import {getdesc, getLogos, profile, testmInfo, infoName} from './template.js';



function getproductInfo () {

}

productInfo().then(getdesc);

$('#googleMaps').append(getMap);
// $('#dartsImg').append(rotateImg);

companyLogo().then(getLogos);
testmonInfo().then(testmInfo);
testmonInfo().then(infoName);
userProfile().then(profile);
userProfile().then(profile);
userProfile().then(profile);



//Functions activates my images to rotate automatly

function rotateImg () {
	var current = $('#dartsImg .active');
	var next = ($('#dartsImg .active').next().length > 0)
				? $('#dartsImg .active').next() : 
				$('#dartsImg img:first');
			$acive.removeClass('active');
			$next.fadeIn().addClass('active');		
};

	$(document).ready(function(){
		setInterval('rotateImg()', 5000);
	});
