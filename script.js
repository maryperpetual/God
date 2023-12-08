// PRELOADER
window.addEventListener("load", function() {  
    setTimeout(function() {
        document.querySelector(".preloader").style.display = "none";
        document.querySelector(".content").style.display = "block";
    }, 2000);
});


