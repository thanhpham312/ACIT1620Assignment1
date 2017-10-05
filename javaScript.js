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

function moveImg(moveNum) {
    if(currentImgList[0] == "rm") {
        if(moveNum == 1) {
            topImg.style.left = topImg.offsetLeft + 120 - 30 + "px";
        }
        else if(moveNum == 2) {
            topImg.style.left = topImg.offsetLeft + 120 + 30 + "px";
        }
        else if(moveNum == 3) {
            topImg.style.top = topImg.offsetTop + 67.5 - 30 + "px";
        }
        else if(moveNum == 4) {
            topImg.style.top = topImg.offsetTop + 67.5 + 30 + "px";
        }
    }
    else if(currentImgList[0] == "ar") {
        if(moveNum == 1) {
            bottomImg.style.left = bottomImg.offsetLeft + 120 - 30 + "px";
        }
        else if(moveNum == 2) {
            bottomImg.style.left = bottomImg.offsetLeft + 120 + 30 + "px";
        }
        else if(moveNum == 3) {
            bottomImg.style.top = bottomImg.offsetTop + 67.5 - 30 + "px";
        }
        else if(moveNum == 4) {
            bottomImg.style.top = bottomImg.offsetTop + 67.5 + 30 + "px";
        }
    }
    else if(currentImgList[0] == "bj") {
        if(moveNum == 1) {
            leftImg.style.left = leftImg.offsetLeft + 120 - 30 + "px";
        }
        else if(moveNum == 2) {
            leftImg.style.left = leftImg.offsetLeft + 120 + 30 + "px";
        }
        else if(moveNum == 3) {
            leftImg.style.top = leftImg.offsetTop + 67.5 - 30 + "px";
        }
        else if(moveNum == 4) {
            leftImg.style.top = leftImg.offsetTop + 67.5 + 30 + "px";
        }
    }
    else if(currentImgList[0] == "fr") {
        if(moveNum == 1) {
            rightImg.style.left = rightImg.offsetLeft + 120 - 30 + "px";
        }
        else if(moveNum == 2) {
            rightImg.style.left = rightImg.offsetLeft + 120 + 30 + "px";
        }
        else if(moveNum == 3) {
            rightImg.style.top = rightImg.offsetTop + 67.5 - 30 + "px";
        }
        else if(moveNum == 4) {
            rightImg.style.top = rightImg.offsetTop + 67.5 + 30 + "px";
        }
    }
    /*else if(currentImgList[0] == "ar") {
        bottomImg.style.backgroundImage = "url(img/" + currentImgList[thumbNum] +  ")";
    }
    else if(currentImgList[0] == "bj") {
        leftImg.style.backgroundImage = "url(img/" + currentImgList[thumbNum] +  ")";
    }
    else if(currentImgList[0] == "fr") {
        rightImg.style.backgroundImage = "url(img/" + currentImgList[thumbNum] +  ")";
    }*/
}

function changeImgSize(visibilityNum) {
    if(currentImgList[0] == "rm") {
        if(visibilityNum == 0) {
            topImg.style.width = topImg.offsetWidth*0.9 + "px";
            topImg.style.height = topImg.offsetHeight*0.9 + "px";
        }
        else if(visibilityNum == 1) {
            topImg.style.width = topImg.offsetWidth*1.1 + "px";
            topImg.style.height = topImg.offsetHeight*1.1 + "px";
        }
    }
    else if(currentImgList[0] == "ar") {
        if(visibilityNum == 0) {
            bottomImg.style.width = bottomImg.offsetWidth*0.9 + "px";
            bottomImg.style.height = bottomImg.offsetHeight*0.9 + "px";
        }
        else if(visibilityNum == 1) {
            bottomImg.style.width = bottomImg.offsetWidth*1.1 + "px";
            bottomImg.style.height = bottomImg.offsetHeight*1.1 + "px";
        }
    }
    else if(currentImgList[0] == "bj") {
        if(visibilityNum == 0) {
            leftImg.style.width = leftImg.offsetWidth*0.9 + "px";
            leftImg.style.height = leftImg.offsetHeight*0.9 + "px";
        }
        else if(visibilityNum == 1) {
            leftImg.style.width = leftImg.offsetWidth*1.1 + "px";
            leftImg.style.height = leftImg.offsetHeight*1.1 + "px";
        }
    }
    else if(currentImgList[0] == "fr") {
        if(visibilityNum == 0) {
            rightImg.style.width = rightImg.offsetWidth*0.9 + "px";
            rightImg.style.height = rightImg.offsetHeight*0.9 + "px";
        }
        else if(visibilityNum == 1) {
            rightImg.style.width = rightImg.offsetWidth*1.1 + "px";
            rightImg.style.height = rightImg.offsetHeight*1.1 + "px";
        }
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
    if(currentImgList[0] == "rm") {
        topImg.removeAttribute("style")
    }
    else if(currentImgList[0] == "ar") {
        bottomImg.removeAttribute("style")
    }
    else if(currentImgList[0] == "bj") {
        leftImg.removeAttribute("style")
    }
    else if(currentImgList[0] == "fr") {
        rightImg.removeAttribute("style")
    }
}

// Run script:

displayImg(currentImgList);

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
    showClickedImg(1);
})

thumbImg2.addEventListener("click", function() {
    showClickedImg(2);
})

thumbImg3.addEventListener("click", function() {
    showClickedImg(3);
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