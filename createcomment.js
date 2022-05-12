const commentform=document.getElementById('form-comment');
commentform.addEventListener('submit', async (e) => {
    e.preventDefault();
const comment = document.getElementById('textarea').value;
const clear= document.getElementById('clear')
  const globalURL= window.location.origin.includes("github") ? "https://mi-brand.herokuapp.com": "http://localhost:3000";
  try {
    const res = await axios.post(`${globalURL}/comment`, {
        token: localStorage.getItem('token'),
      comment
    });
    
   // localStorage.setItem(`token`,`${res.data.token}`);
    alert( 'comment posted');
    setTimeout(() => {
      location.reload();
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