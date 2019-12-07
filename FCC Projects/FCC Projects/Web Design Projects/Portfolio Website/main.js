
function hover(e){
    let VideoPreview = document.createElement('video');
    VideoPreview.className = "card-img-top";
    VideoPreview.src = e.target.id;
    VideoPreview.id = e.target.src;
    VideoPreview.autoplay = true;
    document.getElementById(e.target.id).replaceWith(VideoPreview);
}

function restore(e){
    let OriginalImage = document.createElement('img');
    OriginalImage.className = "card-img-top";
    OriginalImage.src = e.target.id;
    OriginalImage.id = e.target.src;
    console.log("yah");
    document.getElementById(e.target.id).replaceWith(OriginalImage);
}

function loadEvents(){
    let card = document.getElementsByClassName('card');
    //skip the title card
    for(let index = 1; index < card.length; index++){
        card.item(index).children[0].addEventListener("mouseenter",hover);
        //card.item(index).children[0].addEventListener("mouseleave",restore);
    }
}

window.onload = loadEvents();

