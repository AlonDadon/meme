'use strict'

var gKeywords = { 'happy': 12, 'funny puk': 1 }
var gImgs = [
    { id: 1, url: 'images/meme-pic/1.jpg', keywords: ['happy'] },
    { id: 2, url: 'images/meme-pic/2.jpg', keywords: ['happy'] },
    { id: 3, url: 'images/meme-pic/3.jpg', keywords: ['happy'] },
    { id: 4, url: 'images/meme-pic/4.jpg', keywords: ['happy'] },
    { id: 5, url: 'images/meme-pic/5.jpg', keywords: ['happy'] },
    { id: 6, url: 'images/meme-pic/6.jpg', keywords: ['happy'] },
    { id: 7, url: 'images/meme-pic/7.jpg', keywords: ['happy'] },
    { id: 8, url: 'images/meme-pic/8.jpg', keywords: ['happy'] },
    { id: 9, url: 'images/meme-pic/9.jpg', keywords: ['happy'] },
    { id: 10, url: 'images/meme-pic/10.jpg', keywords: ['happy'] },
    { id: 11, url: 'images/meme-pic/11.jpg', keywords: ['happy'] },
    { id: 12, url: 'images/meme-pic/12.jpg', keywords: ['happy'] },
    { id: 13, url: 'images/meme-pic/13.jpg', keywords: ['happy'] },
    { id: 14, url: 'images/meme-pic/14.jpg', keywords: ['happy'] },
    { id: 15, url: 'images/meme-pic/15.jpg', keywords: ['happy'] },
    { id: 16, url: 'images/meme-pic/16.jpg', keywords: ['happy'] },
    { id: 17, url: 'images/meme-pic/17.jpg', keywords: ['happy'] },
    { id: 18, url: 'images/meme-pic/18.jpg', keywords: ['happy'] },
];
var gMeme = {
    selectedImageId: 5,
    selectedLineIdx: 0,
    lines: [
        {
            txtPosX: 2,
            txt: '',
            size: 25,
            align: 'left',
            color: 'white',
            moveLine: 16,
            strokeTxt: 'black',
            font: "Impact"
        },
        {
            txtPosX: 2,
            txt: '',
            size: 25,
            align: 'left',
            color: 'red',
            moveLine: 16,
            strokeTxt: 'black',
            font: "Impact"
        }
    ]
}


function getImages() {
    return gImgs
}
function getGMeme() {
    return gMeme
}
function getImgById(imageId) {
    let image = gImgs.find(image => {
        return image.id === imageId
    })
    return image;
}
function saveSelectedImage(imageId) {
    gMeme.selectedImageId = imageId
}
function saveUserText(Text) {
    let idx = gMeme.selectedLineIdx
    gMeme.lines[idx].txt = Text
}
function changeFontSize(diff) {
    let idx = gMeme.selectedLineIdx
    gMeme.lines[idx].size += diff
    if (gMeme.lines[idx].size > 80) gMeme.lines[idx].size = 25
    if (gMeme.lines[idx].size < 25) gMeme.lines[idx].size = 65
    drawImage()
}
function moveLine(diff) {
    let idx = gMeme.selectedLineIdx
    if (gMeme.lines[idx].moveLine < 0) return gMeme.lines[idx].moveLine = 0
    if (idx === 0) gMeme.lines[idx].moveLine -= diff
    else gMeme.lines[idx].moveLine += diff
    generateMeme()
    drawImage()
}
function switchLine() {
    gMeme.selectedLineIdx++
    if (gMeme.selectedLineIdx > gMeme.lines.length - 1) gMeme.selectedLineIdx = 0
}
function addLine() {
    let idx = gMeme.selectedLineIdx
    if (gMeme.lines[idx].txt){
        switchLine()
        idx = gMeme.selectedLineIdx
    } 
    gMeme.lines[idx].txt = 'Add text'
    generateMeme()
    drawImage()
}
function deleteLine() {
    let idx = gMeme.selectedLineIdx
    if (!gMeme.lines[idx].txt) switchLine()
    gMeme.lines[idx].txt = ''
    generateMeme()
    drawImage()
    switchLine()
}
function downloadImg(elLink) {
    const data = gElCanvas.toDataURL()
    elLink.href = data
    elLink.download = 'Canvas'
}
function changeColor(color) {
    let idx = gMeme.selectedLineIdx
    gMeme.lines[idx].color = color
    generateMeme()
    drawImage()
}
function strokeText(color) {
    let idx = gMeme.selectedLineIdx
    gMeme.lines[idx].strokeTxt = color
    generateMeme()
    drawImage()
}
function moveXPos(pos) {
    let idx = gMeme.selectedLineIdx
    if (pos === 'center') gMeme.lines[idx].txtPosX = 2
    if (pos === 'right') gMeme.lines[idx].txtPosX = 1.2
    if (pos === 'left') gMeme.lines[idx].txtPosX = 6
    generateMeme()
    drawImage()
}
function  changeFont(font){
    let idx = gMeme.selectedLineIdx
    gMeme.lines[idx].font = font;
    generateMeme()
    drawImage()
}