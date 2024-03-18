var button = document.querySelector(".nav-btn")
var checkbox = document.getElementById('open-nav')

function shrink(){
    navbar.classList.add('shrink');
}

function grow(){
    navbar.classList.remove('shrink');
}

function mobile(){
    navbar.classList.remove('shrink');
}

window.addEventListener('scroll', function(event) {
    event.preventDefault(); 
    if (this.innerWidth < 1000) {
        mobile();
        if (this.window.scrollY >= 100) {
            button.style.color = "rgb(126, 124, 124)";
        }
        else {
            button.style.color = "white";
        }
        return;
    }
    if (window.scrollY >= 100 && this.innerWidth > 1000) {
        shrink();
    } else if (window.scrollY <= 100 && this.innerWidth > 1000) {
        grow();
    }
  });

window.addEventListener('resize', function(event) {
    event.preventDefault();
    if (this.innerWidth < 1000) {
        mobile();
        if (this.window.scrollY >= 100) {
            button.style.color = "rgb(126, 124, 124)";
        }
        else {
            button.style.color = "white";
        }
        return;
    } else if (this.innerWidth > 1000) {
        if (checkbox.checked!=false)
        checkbox.click();
    }
    
})