// let npromise=new Promise((resolve,reject)=>{  

//      let datarecieved=true;

//       if (datarecieved){
//         resolve("data received");

//       }else{ 
//           reject("data rejected"); 
//       } 


// })  

// npromise.then((message)=>{
//      console.log("message is ", message)

// }).catch(error=>{
//      console.log(`message is ${error}`)
// }); 
 

// function CustomPromise(resolve,reject){

//       let datarecieved=false; 

//       if (datarecieved){
//           resolve("data received")
//       }else if (!datarecieved){
//            reject("data is  not received")
//       }
// }
 


// CustomPromise((mes)=>{
//    console.log(`status ${mes}`) 


//     CustomPromise((m)=>{
//         console.log(`recieved in nexted ${m}`)
//      },   
//      (m)=>{
//          console.log(`reject in nexted ${m}`)
//      })

// },
// (mes)=>{
//     console.log(`status ${mes}`)
// })
 



// let prm=new Promise((resolve,reject)=>{ 
//      let datarec=true 

//      if (datarec){ 
//           resolve("data kitti mone")

//      }else{
//          reject("data poyi mutte")
//      }

// })


// prm.then((msg)=>{
//      console.log(`result: ${msg}`) 
     
//      return "order data kitti" 

// }).then((nextmsg)=>{
//     console.log(nextmsg)
// }).catch((msg)=>{
//     console.log(`result ${msg}`)
// }).finally(()=>{
//     console.log("nirthi poda")
// })  



// problem 3 


let promis1=new Promise((resolve,reject)=>{
      let datarecieved=true 

      if (datarecieved){
          resolve("user data is fetched")
      }else{
          reject("user data not found")
      }
}) 


promis1.then((mes)=>{
    console.log(mes)
}).catch((err)=>{
     console.log(err)
}).finally(()=>{
    console.log("end")
})


let promis2=new Promise((resolve,reject)=>{
      let datarecieved=true 

      if (datarecieved){
          resolve("product data is fetched")
      }else{
          reject("product data not found")
      }
}) 


promis2.then((mes)=>{
    console.log(mes)
}).catch((err)=>{
     console.log(err)
})
 
 
let ms=await promis2 
console.log("ended promise")