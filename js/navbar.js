var navbar = document.getElementById('navbar')
var navbarpadcol = document.querySelectorAll('#navbar li a')
var button = document.getElementById('drpbtn')

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
        return;
    }
    if (window.scrollY >= 100 && this.innerWidth > 1000) {
        shrink();
    } else if (window.scrollY <= 0 && this.innerWidth > 1000) {
        grow();
    }
  });