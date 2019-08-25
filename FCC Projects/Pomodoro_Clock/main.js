
function increment(id){
    let item = document.getElementsByClassName('arrows');
    let num = Number(item[id - 1].children[1].innerHTML);
    item[id - 1].children[1].innerHTML = ++num;
}

function decrement(id){
    let item = document.getElementsByClassName('arrows');
    let num = Number(item[id - 1].children[1].innerHTML);
    if(num > 0) {
        item[id - 1].children[1].innerHTML = --num;
    }
}

function play(){
    
}

function pause(){
    
}

function restart(){
    let time = document.getElementsByClassName('time');
    time[0].children[0].innerHTML = '25:00';
}







