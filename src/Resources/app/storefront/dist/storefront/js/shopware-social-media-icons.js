(window.webpackJsonp=window.webpackJsonp||[]).push([["shopware-social-media-icons"],{H5pl:function(n,o){window.shopwareSocialMediaIcons=function(){"use strict";var n=function(n,c){var i="",a=[];if(c.forEach((function(n){n.active&&a.push(o(n))})),a.length>0){var e,t,l;for(e=0;e<a.length;e++)t="",l="",0===e&&(t='\n        <div class="row">\n            <div class="mx-auto my-3 col-md-8 col-lg-6 col-xl-4">\n                <div class="d-flex justify-content-around">'),e+1===a.length?l="\n                </div>\n            </div>\n        </div>":(e+1)%n==0&&(l='\n                </div>\n            </div>\n        </div>\n        <div class="row">\n            <div class="mx-auto my-3 col-md-8 col-lg-6 col-xl-4">\n                <div class="d-flex justify-content-around">'),i+=t+a[e]+l}return i},o=function(n){return'\n    <a href="'.concat(n.href,'" target="_blank">\n        <img src="').concat(n.imgSrc,'" alt="').concat(n.name,' Logo" style="height:3em;"/>\n    </a>\n    ')};return{createSocialMediaIcons:function(o,c){document.querySelector(".footer-social-media-logos").innerHTML=n(o,c)}}}()}},[["H5pl","runtime"]]]);