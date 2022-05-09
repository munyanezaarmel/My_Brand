/*const contactform = document.querySelector(".form-login");
if(localStorage.getItem("email") == null){

    localStorage.setItem("email","munyaarmel61@gmail.com");
    localStorage.setItem("password","Kigali@1");
    localStorage.setItem("name","admin");
}

contactform.addEventListener('submit',(e)=>{
    e.preventDefault();
    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;
    
    if(  email =="" || password == ""){
        return alert("Please fill empty fields !!")
    }
    if(  email !== localStorage.getItem("email") || password !== localStorage.getItem("password")){
        return alert("Sorry password or email is wrong")
    }
    localStorage.setItem("isLoggedIn","true")

    location.assign("./dashboard/index.html");

});

*/
//sign in google
function onSignIn(googleUser) {
var profile = googleUser.getBasicProfile();
/*
$("#name").text(profile.getName())
$("#email").text(profile.getEmail())
$("#image").attr('src',profile.getImageUrl())
$('.data').css('display',"block") 
*/
$('.g-signin2').css('display','none')
$('#signout-button').css('display','block')
  }
  //sign out in google
  function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
     alert('User signed out.');
     $('.g-signin2').css('display','block')
    // $('.data').css('display',"none")
    });
  }
