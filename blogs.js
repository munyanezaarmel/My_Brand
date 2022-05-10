const createBlog=document.querySelector('#add-form')
console.log(createBlog)
let blogsCard = document.querySelector('.blogs')
const titleValue=document.getElementById('title-value')
const bodyValue=document.getElementById('body-value')
const imageValue=document.getElementById('image-value')
let globalVal = window.location.origin.includes("herokuapp") ? window.location.origin : "http://localhost:3000";
let renderBlogs=(posts)=>{
        posts.getAllBlogs.map(blog=>{
        if(blogsCard){
            blogsCard.innerHTML += `<div class="blog" data-id="${blog._id}">
            <img src="${ blog.img?.includes("http")? blog.img : globalVal+"/img/"+blog.img }"alt="blog image not found">
            <div class="blog-text">
            <h4>${blog.title}</h4>
            <p>${blog.description}</p>
            </div>`
        }
        })
    }
    
    const blogs= fetch(`${globalVal}/blogs`)
    .then(data=> data.json());
    blogs.then(res =>renderBlogs(res))

    //delete
/*
blogsCard.addEventListener('click',()=>{

let deleteButton=e.target.id='delete'
let editButton=e.target.id='edit'
let id=e.target.parentElement.datasetid
if(deleteButton){
    fetch(`${globalVal}/blogs/${id}`,{
        method: 'DELETE'
    })
    .then(res=> res.json())
    .then(()=>location.reload());
}
if(editButton){
    
}
})
*/
//post
/*
createBlog.addEventListener('submit',(e)=>{
    e.preventDefault();
    fetch(`${globalVal}/blogs`,{
        method:'POST',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify({
            title: titleValue.value,
            description: bodyValue.value,
            img:imageValue.value

        })
    })
   .then(res=>res.json())
   .then(data=>{
       const dataArr=[]
       dataArr.push(data)
       renderPosts(dataArr)
   })
})


*/
