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
    let bottomTextInput = document.getElementById('bottom-text');
    saveUserText(topTextInput.value, bottomTextInput.value)
    clearCanvas()
    drawImage(userSelect.selectedImageId)
    generateMeme()
}

function generateMeme() {
    let fontSize;
    let userSelect = getGMeme()
    let topText = userSelect.lines[0].txt
    let bottomText = userSelect.lines[1].txt
    let moveLine = userSelect.lines[0].moveLine

    gCtx.fillStyle = 'white';
    gCtx.strokeStyle = 'black';
    gCtx.textAlign = 'center';

    fontSize = userSelect.lines[0].size;

    gCtx.font = fontSize + 'px Impact';
    gCtx.lineWidth = fontSize / 20;
    gCtx.textBaseline = 'top';

    gCtx.fillText(topText, gElCanvas.width / 2, 1 * moveLine, gElCanvas.width);
    gCtx.strokeText(topText, gElCanvas.width / 2, 1 * moveLine, gElCanvas.width);

    fontSize = userSelect.lines[0].size;
    gCtx.font = fontSize + 'px Impact';
    gCtx.lineWidth = fontSize / 20;

    gCtx.textBaseline = 'bottom';
    gCtx.fillText(bottomText, gElCanvas.width / 2, gElCanvas.height - 1 * moveLine, gElCanvas.width);
    gCtx.strokeText(bottomText, gElCanvas.width / 2, gElCanvas.height - 1 * moveLine, gElCanvas.width);

}
function clearCanvas() {
    gCtx.clearRect(0, 0, gElCanvas.width, gElCanvas.height);
}

function onChangeFontSize(diff) {
    ChangeFontSize(diff)
}

function onMoveLine(diff) {
    moveLine(diff)
}