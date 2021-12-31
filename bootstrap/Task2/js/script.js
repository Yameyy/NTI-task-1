 // to top BTN
 var button = document.getElementById('up__btn');

 window.onscroll = function() {
     scrollFunction()
 };

 function scrollFunction() {
     if (document.body.scrollTop > 250 || document.documentElement.scrollTop > 250) {
         button.style.display = " block ";
     } else {
         button.style.display = " none ";
     }
 }

 button.onclick = function topFunction() {
     document.body.scrollTop = 0;
     document.documentElement.scrollTop = 0;

 }

 var formTag = document.getElementById('FormTag')

 formTag.addEventListener('input', function(e) {
     console.log(e.target.id)

     switch (e.target.id) {
         case "userName":

             NameValidation(e.target)
             break;
         case "email":
             emailValidation(e.target)

             break
         case 'subject':
             NameValidation(e.target)

             break
     }
 })

 formTag.addEventListener('submit', function(e) {
     e.preventDefault()
     console.log(e)
 })


 function NameValidation(input) {
     var inputValue = input.value.trim()
     console.log(inputValue.length);
     (inputValue.length < 3) ? showError(input, "enter at least 3 character"): removeError(input)
 }

 function showError(element, msg) {
     element.nextElementSibling.innerText = msg
     element.nextElementSibling.classList.add('text-danger')
 }

 function removeError(element) {
     element.nextElementSibling.innerText = ""
 }

 function emailValidation(input) {

     var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
     var inputValue = input.value

     console.log(emailPattern.test(inputValue))
     if (emailPattern.test(inputValue) == false) showError(input, "enter a valid Email")
     else removeError(input)

 }

 function passwordValidation(input) {
     var inputValue = input.value
     var passwordPattern = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
     if (passwordPattern.test(inputValue) == false) showError(input, "enter at least 1 capital character , 1 small character , 1 letter , 1 special character....")
     else removeError(input)
 }