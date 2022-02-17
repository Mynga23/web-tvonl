var btn = document.querySelector('.sign');
var hien = document.querySelector('.auth-form');
var daux = document.querySelector('.daux');
var boddy = document.querySelector('#pape-wraper');
var buton = document.querySelector('.btn_btn');
btn.addEventListener('click',function(){
    hien.classList.add('hien');
});
daux.addEventListener('click',function(){
    hien.classList.remove('hien');
});
buton.addEventListener('click',function(){
	boddy.classList.remove('hien');
});