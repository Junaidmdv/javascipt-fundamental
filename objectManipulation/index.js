let person={
    name:"johny", 
    age:30, 

    getName(){
        console.log(`i am ${this.name}`)
    }
}  


let person2= new Object(); 

person2.__proto__=person 

console.log(person2.name) 


person2.setName=function(name){
    this.name=name
}
 


console.log(person.name)  
person2.setName("Zunaid") 
person2.getName(); 

person.getName();  
//person2.getName(); 