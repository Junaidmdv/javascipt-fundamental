


async function FetchData(){
   try{
       let responce= await fetch("https://fakestoreapi.com/products",{
        method:"GET"
       })    
       let data= await responce.json() 

       if (!responce.ok){
            throw  new Error("data is not found")
       } 

       console.log(data)
   }catch(error){
    
       console.log(error.message)

   }
}