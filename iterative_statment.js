// for (let i=0;i<10;i++){
//      console.log(i)
// }



// let i=20

// while(i > 10){
//     console.log(i)
//     i--
// } 


// j=40


// do{
//     console.log(j)
//     j++
// }while(j < 50)




// for of 


let nums=[1,2,3,5,5,3,23,23]

for(let interator of nums){
     console.log(interator)
}


let word="javascript"


for (let char of word){
     console.log(char)
}



function* Generater(){
    yield 1 
    yield 2 
    yield 3 

}

let number= Generater()  

for (let n of number){
    console.log(n)
}


//for of can't iterate the object 

// for in 

let person1={
    name:"junaid", 
    hobies:["coding","singing"], 
    sibling: ["abc","cde"]
}


for(let key in person1){
    console.log(`${key} : ${person1[key]}`)
}




