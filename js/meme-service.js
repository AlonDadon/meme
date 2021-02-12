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
            txt: 'I success',
            size: 20,
            align: 'left',
            color: 'red',
            moveLine:16,
        },
        {
            txt: 'I success',
            size: 20,
            align: 'left',
            color: 'red',
            moveLine:16,
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
function saveUserText(topText, bottomText) {
    gMeme.lines[0].txt = topText
    gMeme.lines[1].txt = bottomText
}

function ChangeFontSize(diff) {
    gMeme.lines[0].size += diff
    console.log(gMeme.lines[0].size)
    if (gMeme.lines[0].size > 80) gMeme.lines[0].size = 25
    if( gMeme.lines[0].size < 25) gMeme.lines[0].size = 65
    drawImage()
}
function moveLine(diff){
    if (gMeme.lines[0].moveLine < 0 ) return gMeme.lines[0].moveLine = 0
    gMeme.lines[0].moveLine += diff
    generateMeme()
    drawImage()
}
  