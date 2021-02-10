'use strict'

var gNextId = 1
var gNextImage = 1

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
];


var gMeme = {
selectedImgId: 5,
    selectedLineIdx: 0,
    lines: [
        {
            txt: 'I never eat Falafel',
            size: 20,
            align: 'left',
            color: 'red'
        }
    ]

}


function getImages() {
return gImgs
}