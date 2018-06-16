// ==UserScript==
// @name         FuckJudge
// @namespace    https://github.com/wfcrs/FuckJudge
// @version      0.11
// @description  try to take over the world!
// @author       btapple
// @match        *://judge.buaa.edu.cn/assignment/programList.jsp*
// @match        *://judge.e.buaa.edu.cn/assignment/programList.jsp*
// @match        *://judge.buaa.edu.cn/assignment/index.jsp*
// @match        *://judge.e.buaa.edu.cn/assignment/index.jsp*
// @grant        none
// @supportURL   https://github.com/yspjack/FuckJudge/issues
// @updateURL    https://github.com/yspjack/FuckJudge/raw/ver_href/FuckJudge.user.js
// ==/UserScript==

(function () {
    function init_checker() {
        let option_list = document.getElementsByClassName("option");
        var i = 0;
        for (i = 0; i < option_list.length; i++) {
            if (option_list[i].value === "") {
                option_list[i].setAttribute("style", "background-color:red;")
            } else {
                option_list[i].removeAttribute("style");
            }
        }
        let cloze_list = document.getElementsByClassName("cloze");
        for (i = 0; i < cloze_list.length; i++) {
            if (cloze_list[i].value === "") {
                cloze_list[i].removeAttribute("style");
            } else {
                cloze_list[i].removeAttribute("style");
            }
        }
    }
    'use strict';
    if (window.location.href.match("index\\.jsp")) {
        init_checker();
        return;
    }
    var a = document.querySelector("iframe[name='showmessage']");
    var b = a.getAttribute("src");
    var c = b.split("?")[1];
    // Append hyper link on the right
    a.onload = function () {
        var d = a.contentDocument.querySelector("table a");
        var detail = document.createElement("a");
        let websitePrefix = window.location.href.match(/\/\/j.*\.buaa\.edu\.cn/i)[0];
        let e = websitePrefix + "/assignment/judgeDetailsRedirect.jsp?" + c;
        detail.setAttribute("href", e);
        detail.innerHTML = "<span style=\"margin-left:10%\">More detail</span>";
        detail.setAttribute("target", "_blank");
        d.appendChild(detail);

        var perfRank = document.createElement("a");
        let perfUrl = websitePrefix + "/assignment/programPerf/judgeReport.jsp?" + c;
        perfRank = document.createElement("a");
        perfRank.setAttribute("href", perfUrl);
        perfRank.innerHTML = "<span style=\"margin-left:10%\">Performance</span>";
        perfRank.setAttribute("target", "_blank");
        d.appendChild(perfRank);
    };
})();