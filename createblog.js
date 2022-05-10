const contactform=document.getElementById('add-form')
contactform.addEventListener('submit', async (e) => {
    e.preventDefault();
const title = document.getElementById('title-value').value;
const body = document.getElementById('body-value').value;
  const image = document.getElementById('image-value').value;
  const globalURL= window.location.origin.includes("herokuapp") ? window.location.origin : "http://localhost:3000";
  try {
    const res = await axios.post(`${globalURL}/blogs`, {
        token: localStorage.getItem('token'),
     title,
      body,
      image,
    });
    
   // localStorage.setItem(`token`,`${res.data.token}`);
    alert( 'blog created');
    setTimeout(() => {
      location.assign('./index.html');
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