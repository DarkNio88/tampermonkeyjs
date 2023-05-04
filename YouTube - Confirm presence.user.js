// ==UserScript==
// @name         YouTube - Confirm presence
// @version      1.0
// @description  Confirm presence on YouTube automatically
// @author       DarkNio
// @match        https://www.youtube.com/watch*
// @grant        none
// @namespace    DarkNio.youTubePresence
// @license      MIT
// ==/UserScript==

(function() {
    'use strict';
    setInterval(function (){
        //yt-spec-touch-feedback-shape__fill
        if(document.querySelector('#confirm-button')) {
            document.querySelector('#confirm-button').click();
        }
    }, 2500);
})();
