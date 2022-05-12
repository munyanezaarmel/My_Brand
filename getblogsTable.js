
let tableCard = document.querySelector('.content-table')
let globalURLVal = "https://mi-brand.herokuapp.com";
let renderBlogsTable=(posts)=>{
        posts.getAllBlogs.map(blog=>{
        if(tableCard){
            tableCard.innerHTML += `<div class="create-container">
            <table class="content-table">
                <thead>
                  <tr>
                    <th>N0</th>
                    <th>blog</th>
                    <th>title</th>
                    <th>method</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>javascript</td>
                    <td>${blog.title}</td>
                    <td><button class="edit" onClick="updateModal()">edit</button></td>
                    <td><button class="delete" onClick="deleteBlog('${blog._id}')">delete</button></td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            `
        }
        })
    }
    
    const fetchBlogs= fetch(`${globalURLVal}/blogs`)
    .then(data=> data.json());
    fetchBlogs.then(res =>renderBlogsTable(res))

    async function deleteBlog(id) {
      alert('Deleting blog...');
  
      try { 
        
          await axios
              .delete(`${globalURLVal}/blogs/${id}?token=${ localStorage.getItem('token')}`,{
                token: localStorage.getItem('token'),
              })
          location.reload()
  
      } catch (error) {
          console.log(error);
        //  popupLoadingRemove();
          if (error.response.data?.message) {
              alert(`${error.response.data.message}`);
          } else {
              alert(`${error.message}`);
          }
      }
  
  }
  