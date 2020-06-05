// Your code goes here
let link = document.querySelectorAll (".nav-link").forEach(item => {item.addEventListener('click', event => {event.target.style.color = "red";
event.stopPropagation();
event.preventDefault();
})});

let nav = document.querySelector (".nav");
nav.addEventListener('click', (event) => {event.target.style.backgroundColor = "pink";
})

let image = document.querySelectorAll('.img-content img');
image[0].addEventListener('dblclick', (event) => {event.target.style.border = "1px solid black";});

let text1 = document.querySelectorAll ('.text-content');
window.addEventListener ('scroll', ()=> {text1[0].style.backgroundColor = "blue";})
text1[1].addEventListener ('mouseleave', (event) => {event.target.style.backgroundColor = "red";})

let destin = document.querySelector ('.content-destination')
destin.addEventListener('wheel', (event) => {event.target.style.backgroundColor = "red";});

let destination = document.querySelectorAll('.destination');
window.addEventListener ('resize', ()=> {destination[0].style.backgroundColor = "red";})
destination[1].addEventListener ('mouseenter', (event) => {event.target.style.backgroundColor = "red";});

let destpic = document.querySelector (".content-destination img");
window.addEventListener ('focus', () => {destpic.style.display = "inline"})
window.addEventListener ('blur', ()=> {destpic.style.display = "none";})

let button = document.querySelectorAll ('.btn');
window.addEventListener('keydown', ()=> {button[0].style.display = "none";});
window.addEventListener('load', ()=>{button[1].style.display = "none";})