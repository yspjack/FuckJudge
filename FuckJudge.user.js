// ==UserScript==
// @name         FuckJudge
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       btapple
// @match        http://judge.buaa.edu.cn/assignment/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    var a=document.querySelector("iframe[name='showmessage']");
    var b=a.getAttribute("src");
    var c=b.split("?")[1];
    // Append hyper link on the right
    a.onload=function(){
        var d=a.contentDocument.querySelector("table a");
        var detail=document.createElement("a");
        var e="http://judge.buaa.edu.cn/assignment/judgeDetailsRedirect.jsp?"+c;
        detail.setAttribute("href",e);
        detail.innerHTML="<span style=\"margin-left:10%\">More detail</span>";
        detail.setAttribute("target","_blank")
        d.appendChild(detail);
    };
})();