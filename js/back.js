var buttonTop = document.querySelector(".top-btn")

window.addEventListener('scroll', function(event) {
    event.preventDefault(); 
    if (this.window.scrollY >= 200) {
        buttonTop.style.opacity = "1";  
    }
    else {
        buttonTop.style.opacity = "0";
    }
});