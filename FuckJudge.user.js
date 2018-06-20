// ==UserScript==
// @name         FuckJudge
// @namespace    https://github.com/wfcrs/FuckJudge
// @version      0.14
// @description  try to take over the world!
// @author       btapple & yspjack
// @match        *://judge.buaa.edu.cn/assignment/programList.jsp*
// @match        *://judge.e.buaa.edu.cn/assignment/programList.jsp*
// @match        *://judge.buaa.edu.cn/assignment/index.jsp*
// @match        *://judge.e.buaa.edu.cn/assignment/index.jsp*
// @grant        none
// @supportURL   https://github.com/yspjack/FuckJudge/issues
// @updateURL    https://github.com/yspjack/FuckJudge/raw/ver_href/FuckJudge.user.js
// ==/UserScript==

function empty_checker() {
    console.log("empty_checker works");
    var option_list = document.getElementsByClassName("option");
    var i = 0;
    for (i = 0; i < option_list.length; i++) {
        if (option_list[i].value.trim() === "") {
            option_list[i].setAttribute("style", "background-color:red;")
        } else {
            option_list[i].removeAttribute("style");
        }
    }
    var cloze_list = document.getElementsByClassName("cloze");
    for (i = 0; i < cloze_list.length; i++) {
        if (cloze_list[i].value.trim() === "") {
            cloze_list[i].setAttribute("style", "background-color:red;")
        } else {
            cloze_list[i].removeAttribute("style");
        }
    }
}

function AC_checker_index() {
    console.log("AC_checker works");
    var result_list = document.querySelectorAll(".tableline .tableline2 .formtext table td");
    console.log(result_list.length);
    for (i = 0; i < result_list.length; i++) {
        if (result_list[i].innerText.indexOf("运行时错误") != -1) {
            result_list[i].setAttribute("style", "background-color:#8e44ad;color:#ffffff;");
        } else if (result_list[i].innerText === "完全正确") {
            result_list[i].setAttribute("style", "background-color:#5eb95e;color:#ffffff;");
        } else if (result_list[i].innerText === "答案错误") {
            result_list[i].setAttribute("style", "background-color:#e74c3c;color:#ffffff;");
        }
    }
}

function AC_checker_program() {
    console.log("AC_checker works");
    var parent = document.querySelector("iframe[name='showmessage']");
    var result_list = parent.contentDocument.querySelectorAll("table table td");
    console.log(result_list.length);
    for (i = 0; i < result_list.length; i++) {
        if (result_list[i].innerText.indexOf("运行时错误") != -1) {
            result_list[i].setAttribute("style", "background-color:#8e44ad;color:#ffffff;");
        } else if (result_list[i].innerText === "完全正确") {
            result_list[i].setAttribute("style", "background-color:#5eb95e;color:#ffffff;");
        } else if (result_list[i].innerText === "答案错误") {
            result_list[i].setAttribute("style", "background-color:#e74c3c;color:#ffffff;");
        }
    }
}

(function () {
    'use strict';
    if (window.location.href.match("index\\.jsp")) {
        empty_checker();
        AC_checker_index();
        return;
    }
    var a = document.querySelector("iframe[name='showmessage']");
    var b = a.getAttribute("src");
    var c = b.split("?")[1];
    // Append hyper link on the right
    a.onload = function () {
        AC_checker_program();
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