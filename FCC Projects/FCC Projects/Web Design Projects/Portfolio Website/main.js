
function hover(e){
    let VideoPreview = document.createElement('video');
    VideoPreview.className = "card-img-top";
    VideoPreview.src = e.target.id;
    VideoPreview.id = e.target.src;
    VideoPreview.autoplay = true;
    VideoPreview.muted = true;
    VideoPreview.controls = true;
    VideoPreview.addEventListener('ended',(e)=>{
        e.target.currentTime = 0;
        e.target.play();
    })
    document.getElementById(e.target.id).replaceWith(VideoPreview);
}

function restore(e){
    console.log("Connected");
    let OriginalImage = document.createElement('img');
    OriginalImage.className = "card-img-top";
    OriginalImage.src = e.target.id;
    OriginalImage.id = e.target.src;
    document.getElementById(e.target.id).replaceWith(OriginalImage);
}

function loadEvents(){
    let card = document.getElementsByClassName('card');
    //skip the title card
    for(let index = 1; index < card.length; index++){
        card.item(index).children[0].addEventListener("mouseenter",hover);
    }
}

window.onload = loadEvents();

