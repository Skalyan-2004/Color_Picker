function changeColor(color) {
    document.getElementsByClassName('content')[0].style.backgroundColor = color;
}

function changeFontColor(color) {
    document.getElementById('inputtext').style.color = color;
}

function changeFontFamily(font){
    document.getElementById('inputtext').style.fontFamily=font;
}

function changeFontSize(size) {
    document.getElementById('inputtext').style.fontSize = size;
}

function myReset(){
    document.getElementById("inputtext").value = ""; 
    document.querySelector('.content').style.backgroundColor='#ffcad4';
}