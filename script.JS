var btnSignin = document.getElementById('signin')
var btnSignup = document.getElementById('signup')

var body = document.querySelector("body")

btnSignin.addEventListener("click", function (){
    body.className = "sign-in-js"
})

btnSignup.addEventListener("click", function (){
    body.className = "sign-up-js"
})
