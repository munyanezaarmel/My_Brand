
let commentCard = document.querySelector('.comment-section')
let global = window.location.origin.includes("github") ? window.location.origin : "http://localhost:3000";
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