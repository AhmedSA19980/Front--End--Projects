
const text = document.getElementById("text");
const error = document.getElementById("mess");
const form = document.getElementById("form");
const pass =document.getElementById("pass");
const repeat_pass = document.getElementById("repeat-pass");
const number =document.getElementById("number");
const email =document.getElementById("email");
const check =document.getElementById("check");
const submit = document.getElementById("submit");

/*form.addEventListener("submit", (e)=>{
 var mess1 =[];
 if (text.value === "" || text == null){
     e.preventDefault()
    mess.push("look one of")
    
 }if(text.value.length > 0 ){
  e.preventDefault()
  mess.innerText =mess1.join(", ")
 }
}) */



error.style.fontSize ="23px"

form.addEventListener("submit", (e)=>{
    let messages = [];
    if (text.value === "" || text.value == null){
    
        messages.push("Erorr! characher required")
    }if (email.value ==="" || email.value == null){
        messages.push("email required")
    }if (pass.value ==="" || pass.value == null) {
        messages.push("passwor required")
        
    
    }if (pass.value === "password" || pass.value ==="password".toUpperCase() ){
        messages.push("password can't be password")
    }if (repeat_pass.value !== pass.value  ){
        messages.push("password is not match password  ")

    }if(number.value == "" || number.value == null){
        messages.push("enter your birthday")
    }if (check.value == false){
        messages.push("sign")
        return false
    }
    if (check.checked == false){
        messages.push("u didn't sign our accept our privcy and policy")
    }
    if (messages.length > 0 ){
        e.preventDefault()
        error.innerText = messages.join(",")
    }
})

// add box click checked
/*var textbox = document.getElementById("text-box")
check.addEventListener("click", function(){

    if (check.checked != true){
        textbox.style.display ="block"

    }else{
        textbox.style.display = "none"
    }
});*/

// e =pramater means eventobject , which means you need this paramture to add event in element

let a = "ahmed";
console.log(a)

var le ="ahmed";
console.log(le)