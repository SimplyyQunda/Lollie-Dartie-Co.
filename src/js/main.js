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
	var current = $('#slideTime .active');
	var next = ($('#slideTime .active').next().length > 0)
				? $('#slideTime .active').next() : 
				$('#slideTime li:first');
			current.fadeOut(function(){
				current.removeClass('active');
				next.fadeIn().addClass('active');
			});	
		}

	$(document).ready(function(){
		setInterval(rotateImg, 3000);
	});


//Function activate modal powers

var modal = document.getElementById('modalDarts');
var cartBtn = document.getElementById("cart");
var exit = document.getElementsByClassName("close")[0];

cartBtn.onclick = function() {
	console.log(hello)
    modal.style.display = "block";

};

exit.onclick = function() {
    modal.style.display = "none";
};



// var modals = $(".modal");
// modals.click(shoppingCart);

// function shoppingCart (event) {
// 	var target = event.target;

// 	if (target.id === "cart") {
// 		$(".infoBox").addClass("open");
// 		$("#close").removeClass("close");
// };

// $(document).ready(function(){
//     $("button").click(function(){
//         alert("The paragraph was clicked.");
//     });
// });








