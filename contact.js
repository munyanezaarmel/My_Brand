
  let globalURL= window.location.origin.includes("github") ? window.location.origin : "http://localhost:3000";
const contact = document.querySelector('.contact-form');
contact.addEventListener('submit', async (e) => {
  e.preventDefault();
  const name = document.querySelector('#name-contact').value;
  const email = document.querySelector('#email-contact').value;
  const subject = document.querySelector('#subject').value;
  const message = document.querySelector('#message').value;

  if (
    name.trim() == '' ||
    email.trim() == '' ||
    subject.trim() == '' ||
    message.trim() == ''
  ) {
    alert('Please fill empty fields!!');
    return 0;
  }

  try {
    await axios.post(`${globalURL}/contact`, {
      name,
      email,
      subject,
      message,
    });
    
    document.querySelector('#email-contact').value = '';
    document.querySelector('#name-contact').value = '';
    document.querySelector('#subject').value = '';
    document.querySelector('#message').value = '';
    

    alert('Thanks for your feedback ');
  } catch (error) {
    console.log(error);
    if (error.response.data?.message) {
      alert(`${error.response.data.message}`);
    } else {
      alert(`${error.message}`);
    }
  }
});