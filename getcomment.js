
let commentCard = document.querySelector('.comment-section')
let global = "https://mi-brand.herokuapp.com";
let rendercomment=(comments)=>{
    console.log(comments);
        comments.getAllupdates.map(comment=>{
            commentCard.innerHTML +=`
                       <p>${comment.comment}</p>
            `
        })
    }

    const fetchComment= fetch(`${global}/comment`)
    .then(data=> data.json());
    fetchComment.then(res =>rendercomment(res))