// let form =document.querySelectorAll(".input ")
let form =document.querySelector(".googleForm")

let margin = document.querySelector(".margin")
console.log(form)

// let data;
// form.forEach(inputdetails=>{
// data=inputdetails;
// console.log(data[1])
// })




    // console.log(data)








form.addEventListener("submit",valdiation)

function valdiation(e){
    e.preventDefault();
    
let name = document.querySelector(".inputName")
let email = document.querySelector(".inputEmail")
let address = document.querySelector(".inputAddress")
let number = document.querySelector(".inputNumber")
let hire = document.querySelector(".inputHire")
let join = document.querySelector(".inputJoin")
let gender = document.querySelector( 'input[name="gender"]:checked');
let position = document.querySelector( 'input[name="position"]:checked');
let fresher = document.querySelector( 'input[name="fresher"]:checked');

let error =document.querySelector(".error")



  if(name.value.length <=4){
 let  error = document.createElement("li")
 let invalid = document.querySelector(".name")
 error.innerHTML= "Enter valid name"
 error.classList.add("invalid")
 invalid.appendChild(error)
 setTimeout(()=>{
  document.querySelector(".invalid").remove()
 },5000)
  }

   else if(!email.value.includes("@")){
 let invalid = document.querySelector(".email")
 let  error = document.createElement("li")
    error.innerHTML ="Enter Valid Email";
    error.classList.add("invalid")
    invalid.appendChild(error)
    setTimeout(()=>{
        document.querySelector(".invalid").remove()
       },5000)
  }

  else if(number.value<=10){
    let invalid = document.querySelector(".number")
    let  error = document.createElement("li")
    error.innerHTML ="Enter Valid Number";
    error.classList.add("invalid")
    invalid.appendChild(error)
    setTimeout(()=>{
document.querySelector(".invalid").remove()
    },5000)
  }
  else if(address.value.length <=4){
    let invalid = document.querySelector(".address")
    let  error = document.createElement("li")
    error.innerHTML ="Enter Valid Address";
    error.classList.add("invalid")
    invalid.appendChild(error)
    setTimeout(()=>{
document.querySelector(".invalid").remove()
    },5000)
  }

 

  else if(gender==null){
    let invalid = document.querySelector(".gender")
    let  error = document.createElement("li")
    error.innerHTML ="Select Gender";
    error.classList.add("invalid")
    invalid.appendChild(error)
    setTimeout(()=>{
document.querySelector(".invalid").remove()
    },5000)
  }

  else if(position==null){
    let invalid = document.querySelector(".position")
    let  error = document.createElement("li")
    error.innerHTML ="Select Department";
    error.classList.add("invalid")
    invalid.appendChild(error)
    setTimeout(()=>{
document.querySelector(".invalid").remove()
    },5000)
  }
  else if(fresher==null){
    let invalid = document.querySelector(".fresher")
    let  error = document.createElement("li")
    error.innerHTML ="Select Any One";
    error.classList.add("invalid")
    invalid.appendChild(error)
    setTimeout(()=>{
document.querySelector(".invalid").remove()
    },5000)
  }
  else if(hire.value.length <=4){
    let invalid = document.querySelector(".hire")
    let  error = document.createElement("li")
    error.innerHTML ="Must be Filled";
    error.classList.add("invalid")
    invalid.appendChild(error)
    setTimeout(()=>{
document.querySelector(".invalid").remove()
    },5000)
  }

 else if(join.value.length <=4){
    let invalid = document.querySelector(".join")
    let  error = document.createElement("li")
    error.innerHTML ="Must Be Filled";
    error.classList.add("invalid")
    invalid.appendChild(error)
    setTimeout(()=>{
document.querySelector(".invalid").remove()
    },5000)
  }

  else{
      alert("form is Submitted Sucessfully")
    
    // window.location.replace("sumbitForm.html");
  }

 
}




