let arr=[10,20,30,40] 


let [a,b,c,d]=arr  


console.log(a,b,c,d)   
 

// restructure the  rest operater 

let[a1,...a2]=arr

console.log(a1,a2)


let nextedArr=[1,2,3,4,5,[6,7,8,9,[10,11]]]


let [a10,b11,c12,d13,e14,[a20,a21,a3,a4,[b1,b2]]]=nextedArr 

console.log(a10) 