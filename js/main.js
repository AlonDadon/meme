'use strict'

var gElCanvas;
var gCtx;
var image;

function init() {
    renderImages();
    gElCanvas = document.getElementById("canvas");
    gCtx = canvas.getContext("2d");
}

function renderImages() {
    let images = getImages()
    let strHtml = images.map((image) => {
        return `
<article onclick="renderEditor(${image.id})" class="img-item"><img src="${image.url}"></article>
`
    })
    document.querySelector('.grid-container').innerHTML = strHtml.join('')
}

function renderEditor(imageId) {
    saveSelectedImage(imageId)
    document.querySelector('.gallery').classList.add("hidden");
    document.querySelector('.search-bar').classList.add("hidden");
    document.querySelector('.user-editor').classList.add("flex");
    let image = getImgById(imageId);
    var strHtml = `
    <canvas id="canvas" class="canvas" ></canvas>
    `
    let elDesignPart = document.querySelector('.canvas-container');
    elDesignPart.innerHTML = strHtml;
    renderCanvas();
    drawImage(image.id)
}

function renderCanvas() {
    gElCanvas = document.getElementById('canvas');
    gCtx = gElCanvas.getContext('2d');

}
function drawImage() {
    let imageId = getGMeme().selectedImageId
    image = new Image();
    image.src = `images/meme-pic/${imageId}.jpg`;
    image.onload = () => {
        canvasSize(image)
        gCtx.drawImage(image, 0, 0, gElCanvas.width, gElCanvas.height);
        generateMeme()
    }
}
function canvasSize(image) {
    gElCanvas.width = image.width;
    gElCanvas.height = image.height;
}
function onGenerate() {
    let userSelect = getGMeme()
    let topTextInput = document.getElementById('top-text');
    saveUserText(topTextInput.value)
    clearCanvas()
    drawImage(userSelect.selectedImageId)
    generateMeme()
}

function generateMeme() {
    let fontSize;
    let userSelect = getGMeme()
    let idx = userSelect.selectedLineIdx
    let moveLine;
    let text = userSelect.lines[idx].txt
    let topText;
    let bottomText;
    let userColor = userSelect.lines[0].color
    let textPosX = userSelect.lines[0].txtPosX
    let strokeText = userSelect.lines[0].strokeTxt

        if (idx === 0) {
        topText = text
        bottomText = userSelect.lines[idx + 1].txt
    } else {
        bottomText = text
        topText = userSelect.lines[idx - 1].txt
    }

    gCtx.textAlign = 'center';
    gCtx.fillStyle = userColor;
    gCtx.strokeStyle = strokeText;
    moveLine = userSelect.lines[0].moveLine
    fontSize = userSelect.lines[0].size;
    gCtx.font = fontSize + 'px Impact';
    gCtx.lineWidth = fontSize / 20;
    gCtx.textBaseline = 'top'
    gCtx.fillText(topText, gElCanvas.width / textPosX, 1 * moveLine, gElCanvas.width);
    gCtx.strokeText(topText, gElCanvas.width / textPosX, 1 * moveLine, gElCanvas.width);

    strokeText = userSelect.lines[1].strokeTxt
    gCtx.strokeStyle = strokeText;
    textPosX = userSelect.lines[1].txtPosX
    userColor = userSelect.lines[1].color
    gCtx.fillStyle = userColor;
    moveLine = userSelect.lines[1].moveLine
    fontSize = userSelect.lines[1].size;
    gCtx.font = fontSize + 'px Impact';
    gCtx.lineWidth = fontSize / 20;
    gCtx.textBaseline = 'bottom';
    gCtx.fillText(bottomText, gElCanvas.width /textPosX, gElCanvas.height - 1 * moveLine, gElCanvas.width);
    gCtx.strokeText(bottomText, gElCanvas.width / textPosX, gElCanvas.height - 1 * moveLine, gElCanvas.width);
}


function clearCanvas() {
    gCtx.clearRect(0, 0, gElCanvas.width, gElCanvas.height);
}
function onChangeFontSize(diff) {
    changeFontSize(diff)
}
function onMoveLine(diff) {
    moveLine(diff)
}
function onSwitchLine() {
    switchLine()
}
function onAddLine() {
    addLine()
}
function onDeleteLine() {
    deleteLine()
}
function onDownloadImg(elLink) {
    downloadImg(elLink)
}
function onChangeColor(value) {
    changeColor(value)
}
function onMoveXPos(pos){
    moveXPos(pos)
}
function onStrokeText(value){
    strokeText(value)
}
