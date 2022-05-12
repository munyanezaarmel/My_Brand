const contactform=document.querySelector('.form-login')
contactform.addEventListener('submit', async (e) => {
    e.preventDefault();
const email = document.getElementById('email').value;
const username = document.getElementById('name').value;
  const password = document.getElementById('password').value;
  const globalURL= window.location.origin.includes("github") ? window.location.origin : "http://localhost:3000";

  if (email == '' || password == '') {
    alert(warning, 'Please fill empty fields !!');
    return 0;
  }
  try {
    const res = await axios.post(`${globalURL}/api/user/register`, {
     username,
      email,
      password,
    });
    

   // localStorage.setItem(`token`,`${res.data.token}`);
    alert( 'account created successsful');
    
    setTimeout(() => {
      //  if(res.data.savedUser.email=="munyaarmel61@gmail.com")
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