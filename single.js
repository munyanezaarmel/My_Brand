
let blogsCard = document.querySelector('.blog')
let globalVal = window.location.origin.includes("herokuapp") ? window.location.origin : "http://localhost:3000";
let renderBlogs=(blog)=>{
            blogsCard.innerHTML = `<div class="blog">
            <img src="${ blog.img?.includes("http")? blog.img : globalVal+"/img/"+blog.img }"alt="blog image not found">
            <div class="blog-text">
            <h4>${blog.title}</h4>
            <p>${blog.description}</p>
            <i class="fa fa-comment">comment </i><br>         
            <fieldset>
            <legend> <i class="fa fa-comment">comment</i></legend>  
            <textarea name="comment" id="" cols="30" rows="10" placeholder="comment on this blog"></textarea>
               <button type="submit"> send comment</button>
            </div>`
        }
    const blogs= fetch(`${globalVal}/blogs/${location.search.split("=")[1]}`)
    .then(data=> data.json());
    blogs.then(res =>renderBlogs(res))