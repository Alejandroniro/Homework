function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

function myFunction1(){
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("read-more");

    if (dots.style.display === "none"){
        dots.style.display = "inline";
        btnText.innerHTML = "Ver mas";
        moreText.style.display = "none";
    }
    else {
        dots.style.display = "none";
        btnText.innerHTML = "Ver menos";
        moreText.style.display = "inline";
    }
}