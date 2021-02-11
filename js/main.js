'use strict'

var gElCanvas;
var gCtx;
var image;

function init() {
    renderImages();
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
    document.querySelector('.gallery').classList.add("hidden");
    document.querySelector('.user-editor').classList.add("flex");
    let image = getImgById(imageId);
    var strHtml = `
    <canvas id="canvas" class="canvas" height="550" width="550"></canvas>
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
function drawImage(imageId) {
    gMeme.selectedImgId = imageId;
    image = new Image();
    image.src = `images/meme-pic/${imageId}.jpg`;
    image.onload = () => {
        gCtx.drawImage(image, 0, 0, gElCanvas.width, gElCanvas.height);
  }
  }
