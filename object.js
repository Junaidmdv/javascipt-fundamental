let user={
    name: "junaid", 
    age: 23, 
    address: "manglore", 
    selfIntro:function(){
        console.log(`I am ${user.name}`)
    }
}

console.log(user)


let sIntro=user.selfIntro 

sIntro(); 


let dynamicProp="employeeId"

let man={
    name:'junaid', 
    age: 23, 
    [dynamicProp]:"Usr@1",
}

console.log(man)

