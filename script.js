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

    const constraints = {
        name: {
            presence: { allowEmpty: false }
        },
        email: {
            presence: { allowEmpty: false },
            email: true
        },
        message: {
            presence: { allowEmpty: false }
        }
    };

    const form = document.getElementById('contact-form');

    form.addEventListener('submit', function (event) {
      const formValues = {
          name: form.elements.name.value,
          email: form.elements.email.value,
          message: form.elements.message.value
      };
 
      const errors = validate(formValues, constraints);
 
      if (errors) {
        event.preventDefault();
        const errorMessage = Object
            .values(errors)
            .map(function (fieldValues) { return fieldValues.join(', ')})
            .join("\n");
 
        alert(errorMessage);
      }
    }, false);