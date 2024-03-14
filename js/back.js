var buttonTop = document.querySelector(".top-btn")

window.addEventListener('scroll', function(event) {
    event.preventDefault(); 
    if (this.window.scrollY >= 200) {
        buttonTop.style.opacity = "1";  
        buttonTop.style.pointerEvents = "auto";
    }
    else {
        buttonTop.style.opacity = "0";
        buttonTop.style.pointerEvents = "none";
    }
});