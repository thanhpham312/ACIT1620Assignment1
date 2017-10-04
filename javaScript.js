// Initialize variables:

var topImg = document.getElementById("topImg");
var bottomImg = document.getElementById("bottomImg");
var leftImg = document.getElementById("leftImg");
var rightImg = document.getElementById("rightImg");

var thumbImg1 = document.getElementById("thumbImg1");
var thumbImg2 = document.getElementById("thumbImg2");
var thumbImg3 = document.getElementById("thumbImg3");
var buttonLeft = document.getElementById("buttonLeft");
var buttonRight = document.getElementById("buttonRight");
var buttonUp = document.getElementById("buttonUp");
var buttonDown = document.getElementById("buttonDown");
var buttonZoomIn = document.getElementById("buttonZoomIn");
var buttonZoomOut = document.getElementById("buttonZoomOut");

var imgList1 = ["rm", "rm1.png", "rm2.png", "rm3.png"];
var imgList2 = ["ar", "ar1.png", "ar2.png", "ar3.png"];
var imgList3 = ["bj", "bj1.png", "bj2.png", "bj3.png"];
var imgList4 = ["fr", "fr1.png", "fr2.png", "fr3.png"];


if (typeof currentImgList === "undefined") {
    var currentImgList = imgList1.slice();
}

// Define functions:

function displayImg(currentImgList) {
    if(currentImgList[0] == "rm") {
        topImg.style.boxShadow = "0px 0px 0px 5px rgba(2, 168, 243, 0.5)";
        bottomImg.style.boxShadow = "0px 0px 0px 5px rgba(255, 255, 255, 0.8)";
        leftImg.style.boxShadow = "0px 0px 0px 5px rgba(255, 255, 255, 0.8)";
        rightImg.style.boxShadow = "0px 0px 0px 5px rgba(255, 255, 255, 0.8)";
    }
    else if(currentImgList[0] == "ar") {
        bottomImg.style.boxShadow = "0px 0px 0px 5px rgba(2, 168, 243, 0.5)";
        topImg.style.boxShadow = "0px 0px 0px 5px rgba(255, 255, 255, 0.8)";
        leftImg.style.boxShadow = "0px 0px 0px 5px rgba(255, 255, 255, 0.8)";
        rightImg.style.boxShadow = "0px 0px 0px 5px rgba(255, 255, 255, 0.8)";
    }
    else if(currentImgList[0] == "bj") {
        leftImg.style.boxShadow = "0px 0px 0px 5px rgba(2, 168, 243, 0.5)";
        topImg.style.boxShadow = "0px 0px 0px 5px rgba(255, 255, 255, 0.8)";
        bottomImg.style.boxShadow = "0px 0px 0px 5px rgba(255, 255, 255, 0.8)";
        rightImg.style.boxShadow = "0px 0px 0px 5px rgba(255, 255, 255, 0.8)";
    }
    else if(currentImgList[0] == "fr") {
        rightImg.style.boxShadow = "0px 0px 0px 5px rgba(2, 168, 243, 0.5)";
        topImg.style.boxShadow = "0px 0px 0px 5px rgba(255, 255, 255, 0.8)";
        bottomImg.style.boxShadow = "0px 0px 0px 5px rgba(255, 255, 255, 0.8)";
        leftImg.style.boxShadow = "0px 0px 0px 5px rgba(255, 255, 255, 0.8)";
    }
    thumbImg1.style.backgroundImage = "url(img/" + currentImgList[1] +  ")";
    thumbImg2.style.backgroundImage = "url(img/" + currentImgList[2] +  ")";
    thumbImg3.style.backgroundImage = "url(img/" + currentImgList[3] +  ")";
}

function changeFocus(imgNum) {
    if(imgNum == 1) {
        currentImgList = imgList1;
        displayImg(currentImgList);
    }
    else if(imgNum == 2) {
        currentImgList = imgList2;
        displayImg(currentImgList);
    }
    else if(imgNum == 3) {
        currentImgList = imgList3;
        displayImg(currentImgList);
    }
    else if(imgNum == 4) {
        currentImgList = imgList4;
        displayImg(currentImgList);
    }
}

function showClickedImg(thumbNum) {
    if(currentImgList[0] == "rm") {
        topImg.style.backgroundImage = "url(img/" + currentImgList[thumbNum] +  ")";
    }
    else if(currentImgList[0] == "ar") {
        bottomImg.style.backgroundImage = "url(img/" + currentImgList[thumbNum] +  ")";
    }
    else if(currentImgList[0] == "bj") {
        leftImg.style.backgroundImage = "url(img/" + currentImgList[thumbNum] +  ")";
    }
    else if(currentImgList[0] == "fr") {
        rightImg.style.backgroundImage = "url(img/" + currentImgList[thumbNum] +  ")";
    }
}

// Run script:

displayImg(currentImgList);

// 

topImg.addEventListener("click", function() {
    changeFocus(1);
});

bottomImg.addEventListener("click", function() {
    changeFocus(2);
});

leftImg.addEventListener("click", function() {
    changeFocus(3);
});

rightImg.addEventListener("click", function() {
    changeFocus(4);
});

// Change display image:

thumbImg1.addEventListener("click", function() {
    showClickedImg(1)
})

thumbImg2.addEventListener("click", function() {
    showClickedImg(2)
})

thumbImg3.addEventListener("click", function() {
    showClickedImg(3)
})