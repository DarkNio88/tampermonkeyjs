// ==UserScript==
// @name unblur
// @namespace darknio
// @description unblur
// @match https://www.yoomee.love/*
// @version 1
// @grant unsafeWindow
// @grant GM_xmlhttpRequest
// @grant GM_addStyle
// @grant GM_getResourceText
// @grant GM_getResourceURL
// @grant GM_getValue
// @grant GM_openInTab
// @grant GM_registerMenuCommand
// @grant GM_setValue
// @connect *
// @require http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js
// ==/UserScript==

GM_addStyle ("\
#contteinerall {\
    position:fixed;\
    top:10px;\
    left:5px;\
    z-index:99999;\
    width:auto;\
    height:auto;\
}\
#unblur {\
    position:relative;\
	left:5px;\
    z-index:999;\
    color: #000;\
    font-size: 10pt;\
	}\
");

unsafeWindow.unblur = unblur;
function unblur() {
    for (let id = 0; id < document.getElementsByTagName("img").length; id++) {
        document.getElementsByTagName("img")[id].src=document.getElementsByTagName("img")[id].src.replaceAll("https://thumbor.yoomee.love/unsafe/180x180/filters:blur(54,13):brightness(-5):contrast(-5):saturation(0.8):quality(65):format(jpeg):no_upscale():max_bytes(100000)/","")
    }
}
$("body").append('<div id="contteinerall"></div>');
$("#contteinerall").append('<button id="unblur" onClick="unblur()">unblur</button>');
