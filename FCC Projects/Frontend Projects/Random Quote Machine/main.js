const qoutes = ["Programming is learned by writing programs.", "Damn the torpedoes! Full speed ahead.","Programming is understanding.",
"C makes it easy to shoot yourself in the foot; C++ makes it harder, but when you do it blows your whole leg off."];
const authors = ["Brian Kernighan", "Admiral Farragut","Kristen Nygaard","Bjarne Stroustrup"];
const pictures = ["images/swiss.jpg","images/paradise.jpg","images/lake.jpg","images/sunset.jpg"]

let index = Math.floor(Math.random() * qoutes.length);
document.getElementById("text").innerHTML = qoutes[index];
document.getElementById("author").innerHTML = "by " + authors[index];
document.body.style.backgroundImage = `url(${pictures[index]})`;

function NewQuote(id){
    let index = Math.floor(Math.random() * qoutes.length);
    document.getElementById("text").innerHTML = qoutes[index];
    document.getElementById("author").innerHTML = "by " + authors[index];
    document.body.style.backgroundImage = `url(${pictures[index]})`;
}

