var navbar = document.getElementById('navbar')
var navbarpadcol = document.querySelectorAll('#navbar li a')

function shrink(){
    navbar.style.backgroundColor = "transparent";
    navbar.style.fontSize = "25px";
    navbar.style.width = "100%";
    navbar.style.height = "auto";
    for (var i = 0; i < navbarpadcol.length; i++) {
        navbarpadcol[i].style.padding = "0.6vw 1.6vw";
        navbarpadcol[i].style.color = "black";
    }
}

function grow(){
    navbar.style.backgroundColor = "#ADA3A4";
    navbar.style.fontSize = "30px";
    navbar.style.width = "100%";
    navbar.style.height = "auto";
    for (var i = 0; i < navbarpadcol.length; i++) {
        navbarpadcol[i].style.padding = "1vw 2vw";
        navbarpadcol[i].style.color = "white";
    }
}

function mobile(){
    navbar.style.listStyleType = "none";
    navbar.style.margin = "0";
    navbar.style.padding = "0";
    navbar.style.width = "32vw";
    navbar.style.backgroundColor = "rgba(173, 163, 164, 0.5)";
    navbar.style.position = "fixed";
    navbar.style.height = "100%";
    navbar.style.overflow = "hidden";
    navbar.style.fontSize = "5vw";
    for (var i = 0; i < navbarpadcol.length; i++) {
        navbarpadcol[i].style.color = "white";
    }
}

function closeopen(){
    if (navbar.style.width == "32vw") {
        navbar.style.width = "0vw";
    } else if (navbar.style.width == "0vw") {
        navbar.style.width = "32vw";
    }
}

window.addEventListener('resize', function(event) {
    if (navbar.style.width != "0vw" && this.innerWidth < 1000) {
        mobile();
        return;
    }
    if (window.scrollY >= 100 && this.innerWidth > 1000) {
        shrink();
    } else if (window.scrollY <= 0 && this.innerWidth > 1000) {
        grow();
    }  
});

window.addEventListener('scroll', function(event) {
    event.preventDefault(); 
    if (navbar.style.width != "0vw" && this.innerWidth < 1000) {
        mobile();
        return;
    }
    if (window.scrollY >= 100 && this.innerWidth > 1000) {
        shrink();
    } else if (window.scrollY <= 0 && this.innerWidth > 1000) {
        grow();
    }
  });