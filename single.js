
let blogsCard = document.querySelector('.blog-text')
var feild = document.getElementById('textarea');
var clear = document.getElementById('clear')
let globalVal = window.location.origin.includes("github") ? window.location.origin : "http://localhost:3000";
let renderBlogs=(blog)=>{
            blogsCard.innerHTML = `
            <img src="${ blog.img?.includes("http")? blog.img : globalVal+"/img/"+blog.img }"alt="blog image not found">
            <h4>${blog.title}</h4>
            <p>${blog.description}</p>`
        }
    const blogs= fetch(`${globalVal}/blogs/${location.search.split("=")[1]}`)
    .then(data=> data.json());
    blogs.then(res =>renderBlogs(res))
    //comment section 
    
      
  