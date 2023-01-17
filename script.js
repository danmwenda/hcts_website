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
(function (w,d) {
    var loader = function () {var s = d.createElement("script"), tag = d.getElementsByTagName("script")[0];
    s.src="https://cdn.iubenda.com/iubenda.js"; 
    tag.parentNode.insertBefore(s,tag);}; if(w.addEventListener){w.addEventListener("load", loader, false);}else if(w.attachEvent){w.attachEvent("onload", loader);}else{w.onload = loader;}})(window, document);

    function sendEmail(){
        Email.send({
            SecureToken: "961470c3-f946-4e50-ae92-6c2d9d58e31d",
            To : 'info@holiwellcts.com',
            From : document.getElementById("email").value,
            Subject : "New message",
            Body : "Name:" + document.getElementById("name").value
                + "<br> Email:" +document.getElementById("email").value
                + "<br> Message:" +document.getElementById("message").value
        }).then(
          message => alert("Thank You for your feedback")
        );
    }