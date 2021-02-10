'use strict'

function init() {
    renderImages();

}

function renderImages() {
    let images = getImages()
    console.log(images)
let strHtml = images.map((image)=>{
return `
<article class="img-item"><img src="images/meme-pic/${image.id}.jpg" alt="image${image.id}" class="grid-item box"></article>
`
})
document.querySelector('.grid-container').innerHTML = strHtml.join('')
}
