ar=[2,32,66,30,0]   




let asc=ar.sort((a,b)=>{return a-b})

console.log(asc)


let exist=ar.some(v=>{return v %2 != 0}) 

console.log(exist) 
 


let anyexist=ar.every(v =>{return v %2==0})

console.log(anyexist) 
 
