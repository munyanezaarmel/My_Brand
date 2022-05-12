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
//login
  const contactform=document.querySelector('.form-login')
contactform.addEventListener('submit', async (e) => {
    e.preventDefault();
const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const globalURL= window.location.origin.includes("github") ? window.location.origin : "http://localhost:3000";

  if (email == '' || password == '') {
    alert('Please fill empty fields !!');
    return 0;
  }
  try {
    const res = await axios.post(`${globalURL}/api/user/login`, {
      email,
      password,
    });

    localStorage.setItem(`token`,`${res.data.token}`);
    alert( 'Logged in successfully');
    setTimeout(() => {
       // if(res.data.email=="munyaarmel61@gmail.com")
      location.assign('./dashboard/index.html');
    }, 3000);
  } catch (error) {
    console.log(error);
    if (error.response?.data.message) {
      alert(`${error.response?.data.message}`);
    } else {
      alert(`${error.message}`);
    }
  }
})

