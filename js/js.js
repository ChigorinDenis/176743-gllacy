var link = document.querySelector(".map-btn");
var popup = document.querySelector(".feedback-shadow");
var close = document.querySelector(".feedback-close");
var animation = document.querySelector(".feedback");
var form = document.querySelector(".form-enter form");
var login = document.querySelector(".form-login");
 var password = document.querySelector(".form-password"); 

 link.addEventListener("click", function(event) {
 event.preventDefault();
 popup.classList.add("feedback-shadow-show");
animation.classList.add("feedback-animation");
 }); 

 close.addEventListener("click", function() {
 popup.classList.remove("feedback-shadow-show");	
 }); 

  form.addEventListener("submit", function(event) {
 if (!login.value || !password.value) {
 event.preventDefault();
 document.write("Нужно ввести логин и пароль!"); 
 }
 }); 