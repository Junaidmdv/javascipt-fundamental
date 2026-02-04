

// //anonymous function 
// let res=function(a,b){
//     return a+b 
// }; 


// console.log(res(10,20))

// // arrow function 

// let sub= (a,b)=> {return a-b}; 

// console.log(sub(10,5))


// let greet=(name) => console.log(`Hey ${name} goodmorning`); 
// greet("junaid"); 

// // higher order and callback function 


// function Sum(callback,a,b){
//     console.log(a+b)
//     callback(a,b); 
// }; 


// function Sub(a,b){
//      console.log(a-b)
// }; 

// Sum(Sub,10,5)


//currying 

function Book(name){
   
    return function(author){

        return function(price){
           
               
               console.log(`The book name is ${name} and author is ${author} price is ${price}`)
           
        }
    }
}

Book("Remeo julliet")(250)("Shakespiar"); 


//self invoke function; 

//IIFE -Immediatly invoked  function expression. 


(function(){
    console.log("Self invoked function")
})

//closure 


function counter(i){
     return function(){
         i++
         return i
     }
}


console.log("closure")

res=counter(1) 

console.log(res())
console.log(res()) 



//generative functions 



function* Person(){
    yield "junaid"; 
    yield 20; 
    yield "manglore"; 
}

let P=Person() 


console.log(P.next())





