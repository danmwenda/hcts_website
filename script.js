window.addEventListener("scroll", function(){
    var header = this.document.querySelector("header");
    header.classList.toggle('sticky', this.window.scrollY>0);
});

let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar1');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open');
}