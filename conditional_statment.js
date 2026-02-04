age=35; 


if (age){
    console.log("age is ",age)
}

if(age >=35){
    console.log("eligible")
} else{
     console.log("not eligible")
}


// ternary operater 

// let res= age >= 35?"YES":"NO"; 

console.log(age >= 18?"eligible":"not eligible")   


//if else ladder 

total_marks=80; 

if (total_marks > 90 && total_marks <=100){
     console.log("Grade A")
}else if (total_marks >= 80){
     console.log("grade B")
}else if (total_marks >= 70){
     console.log("grade C")
}else if(total_marks >= 60){
    console.log("grade D")
}else{
     console.log("student failed")
}





let day="Sunday"



//switch statements 

switch(day){
    case "Monday": 
      console.log("Eda thinglaycha"); 
      break; 
    case "Tuesday": 
       console.log("Eda chovaycha"); 
       break; 
    case "Wednesday": 
        console.log("Eda budanaycha"); 
        break; 
    case "Thursday": 
        console.log("Eda vyayam"); 
        break; 
    case "Friday": 
       console.log("Eda velli"); 
       break; 
    default: 
        console.log("Eda nokanda leava kadann orang")
        break; 
}




