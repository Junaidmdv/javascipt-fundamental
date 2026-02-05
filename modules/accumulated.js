// import { ProducerDetails } from "./product.js";
// import { user } from "./user.mjs";


// function PrintData(){
//     console.log(user) 
//     console.log(ProducerDetails());
// } 

// PrintData();  


async function FetchUserDetail(){
   try{ 

      let response= await fetch("https://fakestoreapi.com/users") 
       if (!response.ok){
           throw new Error("data not found")
       }  

       let data=await response.json() 

       console.log(data)

       

   }catch(error){
         console.log(error)
   }
} 


FetchUserDetail(); 