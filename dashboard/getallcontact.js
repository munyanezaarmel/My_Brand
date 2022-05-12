
let contactCard = document.getElementById('contactCard')
let globalVal = window.location.origin.includes("github") ? window.location.origin : "http://localhost:3000";
let renderBlogs=(contacts)=>{
        contacts.getContact.map(contact=>{
        if(contactCard){
            contactCard.innerHTML=`<tr>
            <td>${contact._id}</td>
            <td>${contact.name}</td>
            <td>${contact.email}</td>
            <td>${contact.subject}</td>
            <td>${contact.message}</td></tr>
            `
        }
        })
    }
    
    const blogs= fetch(`${globalVal}/contact`)
    .then(data=> data.json());
    blogs.then(res =>renderBlogs(res))