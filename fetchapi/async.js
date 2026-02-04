


async function GetProduct(){
       try{ 
          let response= await fetch("https://fakestoreapi.com/products")   
          
           if (!response.ok){
               throw new Error("products not found")
           }  

           let data= await response.json() 

           console.log(data)

       }catch(error){
         
             console.log(error.message)
       }
}  

GetProduct(); 