import $ from 'jquery';
import _ from 'lodash';
import {productInfo, companyLogo, userProfile, testmonInfo} from './dartsinfoAPI.js'
import {getMap} from './googleAPI.js';

getMap();

function getproductInfo () {

}

$('#googleMaps').append(getMap);