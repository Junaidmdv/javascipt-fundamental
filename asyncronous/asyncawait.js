// let npromise=new Promise((resolve,reject)=>{
//      let datarecieved =true 
 

//      if (datarecieved){
//          resolve("data fetched succesfull")
//      }else{
//          reject("data not found")
//      }
// }) 
 

// npromise.then((msg)=>{console.log(msg)}).catch((err)=>{
//     console.log(err)
// })

// let message =  await npromise   

// console.log(message)
// console.log("end")  



let promise=new Promise((resolve,reject)=>{
    let isdone=false  

    if (isdone){
        resolve("data is fetched")
    }else{
         //reject("data is not found") 

          throw new Error("data is not found")
         
    }
}) 


async function FetchData(){
    try{ 

        let msg=await promise; 
        console.log(msg)

    }catch(err){
          console.log(err)
    }finally{ 

        console.log("end")

    }
} 

FetchData(); 
 





