const sections=document.querySelectorAll('.section');
const sectBtns=document.querySelectorAll('.controlls');
const sectBtn=document.querySelectorAll('.control');
const allSections=document.querySelector('.main-content');
function PageTransitions(){
    for(let i=0;i<sectBtn.length;i++){
        sectBtn[i].addEventListener('click',function(){
            let currentBtn=document.querySelectorAll('.active-btn');
            console.log("ok",currentBtn)
          //currentBtn[0].className=currentBtn[0].className.replace('active-btn',''); 
            this.className +='active-btn';
        })
    }
    allSections.addEventListener('click',(e) =>{
        const id=e.target.dataset.id;
        if (id){
            //remove selected from the other btns
            sectBtns.forEach((btn)=>{
                btn.classList.remove('active');
            })
            e.target.classList.add('active');
            //hiding other sections
            sections.forEach((section)=>{
                section.classList.remove('active')
            })

        const element=document.getElementById(id)
        element.classList.add('active')
        }
    })
    //theme 
    let theme=document.querySelector('.theme-btn');
    theme.addEventListener('click',()=>{
        let el=document.body;
        el.classList.toggle('light-mode')
    })
    
}
PageTransitions()