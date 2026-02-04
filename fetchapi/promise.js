fetch("https://fakestoreapi.com/users"). 
then((response)=>{   
  
    if (!response.ok){
        throw new Error("data is not found")
    }
     return response.json()
}).then((data)=>{
      console.log(data)
}).
catch((error)=>{
    console.log(error.message)
})


