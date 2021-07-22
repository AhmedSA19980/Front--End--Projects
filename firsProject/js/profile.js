

var com = document.getElementById("com-txt");
var btn = document.getElementById("Btn-Color");

function autoGrowHeight(ele){
  //const com = document.getElementById("com-txt");
  //const btn = document.getElementById("Btn-Color");

  ele.style.height = "10px";
  ele.style.height = (ele.scrollHeight)+ "px";
  if (ele.value == ""){
    btn.style.backgroundColor ="white";
  }else if(ele.value.length > 0){
    btn.style.background = "lightblue";
  
  }


}



com.addEventListener("click", function(){
  com.style.borderBottom ="2px solid black"
})

var cac = document.getElementById("cac");
cac.addEventListener("click",click);

function click(){
  com.value ="";
  btn.style.backgroundColor ="#ffffff"
  com.style.borderBottom ="none"
}