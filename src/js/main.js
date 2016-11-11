import $ from 'jquery';
import _ from 'lodash';
import {productInfo, companyLogo, userProfile, testmonInfo} from './dartsinfoAPI.js';
import {getMap} from './googleAPI.js';
import {getdesc, getLogos, profile, testmInfo, infoName} from './template.js';



function getproductInfo () {

}

productInfo().then(getdesc);

$('#googleMaps').append(getMap);

companyLogo().then(getLogos);
userProfile().then(profile);
userProfile().then(profile);
userProfile().then(profile);
testmonInfo().then(testmInfo);
testmonInfo().then(infoName);


