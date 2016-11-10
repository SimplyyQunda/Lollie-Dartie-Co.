import $ from 'jquery';
import {google_key} from './access.js';

function getMap (){
		return `<h1 class="findUs"> Developed in the Best Country </h1>
		<iframe frameborder="0"style="border:0" src="https://www.google.com/maps
		/embed/v1/place?q=roman&key=${google_key}" allowfullscreen></iframe>`
};

export {getMap};