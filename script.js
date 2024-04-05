
const div=document.querySelectorAll(".circle")
const bishnu=document.querySelectorAll(".bishnu")
const right=document.querySelector(".right-container")
const heading=document.querySelector("#heading")
const hire=document.querySelector("#hire")
const view=document.querySelector("#view")
const navor=document.querySelector(".navor")
const title=document.querySelectorAll(".tab-link")
const sk=document.querySelector("#sk")
const ex=document.querySelector("#ex")
const ed=document.querySelector("#ed")
const Skill=document.querySelector("#Skills")
const experi=document.querySelector("#Experience")
const edu=document.querySelector("#Education")
const coll=document.querySelector(".coll")
console.log(title);
bishnu.forEach(function(bishnu){
    bishnu.addEventListener("click",function(e){
     if(e.target.id==="red"){
        div[1].style.boxShadow="   0 0 2rem red,inset 0 0 2rem red, 0 0 4rem red, inset 0 0 4rem red"
        // right.style.background="linear-gradient(-45deg,red,#262525 75%)"
        heading.style.color="red"
        hire.style.background="red"
        view.style.color="red"
        hire.style.border=".1rem solid red"
        view.style.border=".1rem solid red"
        hire.addEventListener("mouseover",function(){
            hire.style.background="#262525"
            hire.style.color="red"
        })
        view.addEventListener("mouseover",function(){
            view.style.background="red"
            view.style.color="#262525"
        })
     }
     if(e.target.id==="yello"){
        div[1].style.boxShadow="   0 0 2rem violet,inset 0 0 2rem violet, 0 0 4rem violet, inset 0 0 4rem violet"
        // right.style.background="linear-gradient(-45deg,violet,#262525 75%)"
        heading.style.color="violet"
        hire.style.background="violet"
        view.style.color="violet"
        hire.style.border=".1rem solid violet"
        view.style.border=".1rem solid violet"
        hire.addEventListener("mouseover",function(){
            hire.style.background="#262525"
            hire.style.color="violet"
        })
       
        view.addEventListener("mouseover",function(){
            view.style.background="violet"
            view.style.color="#262525"
        })
     }
     if(e.target.id==="green"){
        div[1].style.boxShadow="   0 0 2rem orange,inset 0 0 2rem orange, 0 0 4rem orange, inset 0 0 4rem orange"
       // right.style.background="linear-gradient(-45deg,orange,#262525 75%)"
        heading.style.color="orange"
        hire.style.background="orange"
        view.style.color="orange"
        hire.style.border=".1rem solid orange"
        view.style.border=".1rem solid orange"
        hire.addEventListener("mouseover",function(){
            hire.style.background="#262525"
            hire.style.color="orange"
        })
        view.addEventListener("mouseover",function(){
            view.style.background="orange"
            view.style.color="#262525"
        })
     }
     if(e.target.id==="sky"){
        div[1].style.boxShadow="   0 0 2rem  #5DB9EE,inset 0 0 2rem #5DB9EE, 0 0 4rem #5DB9EE, inset 0 0 4rem #5DB9EE"
       // right.style.background="linear-gradient(-45deg,#5DB9EE,#262525 75%)"
        heading.style.color="#5DB9EE"
        hire.style.background="#5DB9EE"
        view.style.color="#5DB9EE"
        hire.style.border=".1rem solid #5DB9EE"
        view.style.border=".1rem solid #5DB9EE"
        hire.addEventListener("mouseover",function(){
            hire.style.background="#262525"
            hire.style.color=" #5DB9EE"
        })
        view.addEventListener("mouseover",function(){
            view.style.background=" #5DB9EE"
            view.style.color="#262525"
        })
     }

    })
})
window.addEventListener("scroll",function(){
    if(window.scrollY>50){
        navor.style.background="black"
        
    }
    else{
        navor.style.background="transparent"
       
    }
})
title.forEach(function(title){
    title.addEventListener("click",function(e){
        if(e.target.id==="Skills"){
         
             sk.style.display="block"
             Skill.style.color="#5DB9EE"
             experi.style.color="#fff"
             edu.style.color="#fff"
             ex.style.display="none"
             ed.style.display="none"
        }
        if(e.target.id==="Experience"){
            
            ex.style.display="block"
            experi.style.color="#5DB9EE"
            sk.style.display="none"
            ed.style.display="none"
            Skill.style.color="#fff"
            edu.style.color="#fff"
       }
       if(e.target.id==="Education"){
       
            ed.style.display="block"
            edu.style.color="#5DB9EE"
            ex.style.display="none"
            sk.style.display="none"
            Skill.style.color="#fff"
            experi.style.color="#fff"
   }
    })
})