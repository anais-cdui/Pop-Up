let affiche = document.getElementById('affiche');
let img = affiche.firstElementChild;
/*console/log(img);*/
let thumbCol = document.getElementsByClassName('thumb');
/*console.log(thumbCol);*/
let thumbs = Array.from(thumbCol);
/*console.log(thumbs);*/
thumbs.forEach(function(thumb){
    let imgUrl = thumb.src;
    thumb.onclick = function (){
        img.src = imgUrl;
        affiche.style.visibility = 'visible';
}
});

affiche.onclick = function(){
    affiche.style.visibility = 'hidden';
}