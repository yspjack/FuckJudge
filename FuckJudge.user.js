// ==UserScript==
// @name         FuckJudge
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       btapple
// @match        http://judge.buaa.edu.cn/assignment/programList.jsp*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    var a=document.querySelector("iframe[name='showmessage']");
    var b=a.getAttribute("src");
    var c=b.split("?")[1];
    var d=document.querySelector(".tableline2").querySelectorAll("tr");
    var input=document.createElement("input");
    var e="http://judge.buaa.edu.cn/assignment/judgeDetailsRedirect.jsp?"+c;
    input.setAttribute("onclick","window.location.href='"+e+"'");
    input.setAttribute("value","烦死了");
    input.setAttribute("type","submit");
    d[1].querySelector("td").appendChild(input);
})();
