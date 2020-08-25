var img_src = ['img/1.jpg', 'img/2.jpg', 'img/3.jpg', 'img/4.jpg'];
var color = ['red', 'green', 'blue', 'yellow'];
var i = 0;
var img = document.querySelector('img');
function changeBG() {
    img.setAttribute('src', img_src[i]);
    document.body.style.backgroundColor = color[i];
    i++;
    if (i == img_src.length && i == color.length) {
        i = 0;
    }

    setTimeout(() => changeBG(), 2000);
}

document.addEventListener('DOMContentLoaded', changeBG);