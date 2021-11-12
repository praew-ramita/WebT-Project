const track = () => {
    document.getElementById("track").style.display = 'block';
    document.getElementById("lyrics").style.display = 'none';
    document.getElementById("back").style.display = 'none';
    document.getElementById("media").style.display = 'none';
}
const lyrics = () => {
    document.getElementById("track").style.display = 'none';
    document.getElementById("lyrics").style.display = 'block';
    document.getElementById("back").style.display = 'none';
    document.getElementById("media").style.display = 'none';
}
const back = () => {
    document.getElementById("track").style.display = 'none';
    document.getElementById("lyrics").style.display = 'none';
    document.getElementById("back").style.display = 'block';
    document.getElementById("media").style.display = 'none';
}
const media = () => {
    document.getElementById("track").style.display = 'none';
    document.getElementById("lyrics").style.display = 'none';
    document.getElementById("back").style.display = 'none';
    document.getElementById("media").style.display = 'block';
}

var header = document.getElementById("myHeader");
var btns = header.getElementsByClassName("butt");
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
}