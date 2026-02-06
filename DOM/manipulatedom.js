
function manipulateElements(){
    
    let inputdata=document.getElementById("input").value; 
    let newItem=document.createElement("li")   
    newItem.textContent=inputdata 
    let lists=document.querySelector("ol")
    //  lists.append(newItem) 

    // .append(text,element) text node  and element node can added in the same time
    // appendChild only accept element node.  

     lists.insertBefore(newItem,lists.children[0]) 
     //replceChild(element,position) : replace the child 
     // removeChild (postion) 

     

}