let blogsCard = document.querySelector('.blogs');
let globalVal = window.location.origin.includes("herokuapp") ? window.location.origin : "http://localhost:3000";
const blogs= fetch(`${globalVal}/blogs`)
.then(data=> data.json());
blogs.then(res =>{
   //console.log(res)
    res.getAllBlogs.map(blog=>{
        blogsCard.innerHTML += `<div class="blog">
        <img src="${ blog.img?.includes("http")? blog.img : globalVal+"/img/"+blog.img }"alt="blog image not found">
        <div class="blog-text">
        <h4>${blog.title}</h4>
        <p>${blog.description}</p>
        </div>`
    })
})
//POST
/*
const postBlog= fetch(`${globalVal}/blogs`,{
    method: 'POST',
    body: JSON.stringify({
        title:'ti'
    })
})
.then(data=> data.json());
postBlog.then(res =>{
   //console.log(res)
    res.getAllBlogs.map(blog=>{
        blogsCard.innerHTML += `<div class="blog">
        <img src="${ blog.img?.includes("http")? blog.img : globalVal+"/img/"+blog.img }"alt="blog image not found">
        <div class="blog-text">
        <h4>${blog.title}</h4>
        <p>${blog.description}</p>
        </div>`
    })
})
*/