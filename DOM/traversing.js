let getParent = document.querySelector(".child1") 

// console.log(getParent.parentElement) 
// console.log(getParent.parentNode) 

function Parent(){
let parent= document.querySelector(".parent") 

console.log(parent.childElementCount) 
console.log(parent.childNodes) 
console.log(parent.children) 
console.log(parent.firstChild) 
console.log(parent.firstElementChild) 
console.log(parent.lastChild) 
console.log(parent.lastElementChild)
}


function Siblings(){
     
    child=document.querySelector(".child1")  

    console.log(child.nextSibling) 
    console.log(child.nextElementSibling) 
    console.log(child.previousSibling) 
    console.log(child.previousElementSibling)
}

Siblings(); 