"use strict";
function showHeader(headerNumber) {
    let Head = document.querySelector(`body .Parent .Header--${headerNumber} `);
    if (Head) {
        Head.style.display = "block";
    }
}
function hideHeader(headerNumber) {
    let Head = document.querySelector(`body .Parent .Header--${headerNumber} `);
    if (Head) {
        Head.style.display = "none";
    }
}
function AllHeaders(Secondes, Show) {
    // || Show Header 1 ||
    new Promise((resolve, reject) => {
        setTimeout(() => {
            Show ? showHeader(1) : hideHeader(1);
            resolve();
        }, Secondes * 1000);
    })
        // || Show Header 2 ||
        .then(() => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                Show ? showHeader(2) : hideHeader(2);
                resolve();
            }, Secondes * 1000);
        });
    })
        // || Show Header 3 ||
        .then(() => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                Show ? showHeader(3) : hideHeader(3);
                resolve();
            }, Secondes * 1000);
        });
    })
        // || Show Header 4 ||
        .then(() => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                Show ? showHeader(4) : hideHeader(4);
                resolve();
            }, Secondes * 1000);
        });
    });
}
let Show_Headers_Button = document.getElementById("Show-Btn");
if (Show_Headers_Button) {
    Show_Headers_Button.addEventListener("click", () => {
        console.log("cliked");
        AllHeaders(1, true);
    });
}
let Hide_Headers_Button = document.getElementById("Hide-Btn");
if (Hide_Headers_Button) {
    Hide_Headers_Button.addEventListener("click", () => {
        console.log("cliked");
        AllHeaders(1, false);
    });
}
