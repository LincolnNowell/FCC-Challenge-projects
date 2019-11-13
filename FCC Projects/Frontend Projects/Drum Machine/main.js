const keys = {
    'Q': "Human Bass",
    'W': 'Human Close HH',
    'E': 'Human Kick',
    'A': 'Human Trumpet',
    'S': 'Human Open HH',
    'D': 'Human Percusion',
    'Z': 'Human Percusion 1',
    'X': 'Human Percusion 3',
    'C': 'Human Snare 2',
}

function Click(id,src){
    document.getElementById(id).play();
    document.getElementById('display').innerHTML = src;
}

document.addEventListener('keydown', (event) =>{
    let key = event.key.toUpperCase();
    if(document.getElementById(key)){
        document.getElementById(key).play();
        document.getElementById('display').innerHTML = keys[key];
    }
})