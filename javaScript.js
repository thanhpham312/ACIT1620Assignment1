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
var buttonGrow = document.getElementById("buttonGrow");
var buttonShrink = document.getElementById("buttonShrink");

var buttonShow = document.getElementById("buttonShow");
var buttonHide = document.getElementById("buttonHide");
var buttonReset = document.getElementById("buttonReset");

var controlPanel = document.getElementById("controlPanel");
var controlPanelMisc = document.getElementById("controlPanelMisc");

var imgList1 = ["rm1.png", "rm2.png", "rm3.png"];
var imgList2 = ["ar1.png", "ar2.png", "ar3.png"];
var imgList3 = ["bj1.png", "bj2.png", "bj3.png"];
var imgList4 = ["fr1.png", "fr2.png", "fr3.png"];

var selectedImg = topImg;


if (typeof currentImgList === "undefined") {
    var currentImgList = imgList1.slice();
}

// Define functions:

function displayImg() {
    topImg.style.boxShadow = "0px 0px 0px 5px rgba(255, 255, 255, 0.8)";
    bottomImg.style.boxShadow = "0px 0px 0px 5px rgba(255, 255, 255, 0.8)";
    leftImg.style.boxShadow = "0px 0px 0px 5px rgba(255, 255, 255, 0.8)";
    rightImg.style.boxShadow = "0px 0px 0px 5px rgba(255, 255, 255, 0.8)";

    selectedImg.style.boxShadow = "0px 0px 0px 5px rgba(2, 168, 243, 0.5)";

    thumbImg1.style.backgroundImage = "url(img/" + currentImgList[0] +  ")";
    thumbImg2.style.backgroundImage = "url(img/" + currentImgList[1] +  ")";
    thumbImg3.style.backgroundImage = "url(img/" + currentImgList[2] +  ")";
}

function changeFocus(imgNum) {
    if(imgNum == 1) {
        selectedImg = topImg;
        currentImgList = imgList1.slice();
        displayImg();
    }
    else if(imgNum == 2) {
        selectedImg = bottomImg;
        currentImgList = imgList2.slice();
        displayImg();
    }
    else if(imgNum == 3) {
        selectedImg = leftImg;
        currentImgList = imgList3.slice();
        displayImg();
    }
    else if(imgNum == 4) {
        selectedImg = rightImg;
        currentImgList = imgList4.slice();
        displayImg();
    }
}

function showClickedImg(thumbNum) {
    selectedImg.style.backgroundImage = "url(img/" + currentImgList[thumbNum] +  ")";
}

function moveImg(moveNum) {
    if(moveNum == 1) {
        selectedImg.style.left = selectedImg.offsetLeft + 120 - 30 + "px";
    }
    else if(moveNum == 2) {
        selectedImg.style.left = selectedImg.offsetLeft + 120 + 30 + "px";
    }
    else if(moveNum == 3) {
        selectedImg.style.top = selectedImg.offsetTop + 67.5 - 30 + "px";
    }
    else if(moveNum == 4) {
        selectedImg.style.top = selectedImg.offsetTop + 67.5 + 30 + "px";
    }
}

function changeImgSize(visibilityNum) {
    if(visibilityNum == 0) {
        selectedImg.style.width = selectedImg.offsetWidth*0.9 + "px";
        selectedImg.style.height = selectedImg.offsetHeight*0.9 + "px";
    }
    else if(visibilityNum == 1) {
        selectedImg.style.width = selectedImg.offsetWidth*1.1 + "px";
        selectedImg.style.height = selectedImg.offsetHeight*1.1 + "px";
    }
}

function controlPanelVisibility(sizeNum) {
    if(sizeNum == 0) {
        controlPanel.style.bottom = "-80px";
        controlPanelMisc.style.bottom = "5px";
    }
    else if(sizeNum == 1) {
        controlPanel.style.bottom = "0px";
        controlPanelMisc.style.bottom = "90px";
    }
}

function resetImg() {
    selectedImg.removeAttribute("style");
    displayImg();
}

// Run script:

displayImg();

// Change focus:

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

// Change display image on the focused window:

thumbImg1.addEventListener("click", function() {
    showClickedImg(0);
})

thumbImg2.addEventListener("click", function() {
    showClickedImg(1);
})

thumbImg3.addEventListener("click", function() {
    showClickedImg(2);
})

// Move focused window:

buttonLeft.addEventListener("click", function() {
    moveImg(1);
})

buttonRight.addEventListener("click", function() {
    moveImg(2);
})

buttonUp.addEventListener("click", function() {
    moveImg(3);
})

buttonDown.addEventListener("click", function() {
    moveImg(4);
})

// Increase the focused image's size:

buttonGrow.addEventListener("click", function() {
    changeImgSize(1);
})

buttonShrink.addEventListener("click", function() {
    changeImgSize(0);
})

// Show/hide the control panel:

buttonShow.addEventListener("click", function() {
    controlPanelVisibility(1);
})

buttonHide.addEventListener("click", function() {
    controlPanelVisibility(0);
})

// Reset the website:

buttonReset.addEventListener("click", function() {
    resetImg();
})