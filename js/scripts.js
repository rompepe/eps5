/*!
* Start Bootstrap - Small Business v5.0.6 (https://startbootstrap.com/template/small-business)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-small-business/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

/*let hideText_btn = document.getElementById('hideText_btn')

let hideText = document.getElementById('hideText')

hideText_btn.addEventListener("click", toggleText);

function toggleText(){
    hideText.classList.toggle('show');
    if(hideText.classList.contains ("show")){
        hideText_btn.innerHTML = "menos info";
    }else{
        hideText_btn.innerHTML = "más info";
    }
}
*/

//ayudame a hacer que los 3 botones tengan sus propios textos



document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll('.hideText_btn').forEach(button => {
        button.addEventListener('click', toggleText);
    });
});

function toggleText(event) {
    const button = event.target;
    const targetId = button.getAttribute('data-target');
    const targetElement = document.getElementById(targetId);

    targetElement.classList.toggle('show');
    targetElement.classList.toggle('parrafo1');

    if (targetElement.classList.contains('show')) {
        button.innerHTML = "Menos Info";
    } else {
        button.innerHTML = "Mas Info";
    }
}
