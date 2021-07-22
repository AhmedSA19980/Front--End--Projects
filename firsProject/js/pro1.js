



var selected  = document.querySelector(".selected");
var optionContainer =document.querySelector(".option-container") ;
var opetionList = document.querySelectorAll(".option");
var opetionList1 = document.getElementById("arrow");

/*selected.addEventListener("click", chooseItem);
function chooseItem(e){
   e.querySelector("label");
}*/

/*selected.addEventListener("click", ()=>{
    optionContainer.classList.toggle("active");
});*/


/*opetionList.forEach(o =>{
    o.addEventListener("click", () =>{
        selected.innerHTML = o.querySelector("label").innerHTML ;
        
        optionContainer.classList.remove("option");
        opetionList.style.display = "none"
     

    });
})
optionContainer.forEach(e =>{
    e.addEventListener("click",()=>{
        selected.innerHTML = e.opetionList1.innerHTML;
    })
})
*/


var x, i, j, l, ll, selElmnt, a, b, c;
// Look for any elements with the class "custom-select": 
x = document.getElementsByClassName("selected-box");
l = x.length;
for (i = 0; i < l; i++) {
  selElmnt = x[i].getElementsByTagName("select")[0];
  ll = selElmnt.length;
  // For each element, create a new DIV that will act as the selected item: 
  a = document.createElement("DIV");
  a.setAttribute("class", "select-selected");
  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
  x[i].appendChild(a);
  // For each element, create a new DIV that will contain the option list: 
  b = document.createElement("DIV");
  b.setAttribute("class", "select-items select-hide");
  for (j = 1; j < ll; j++) {
    // For each option in the original select element,
    //create a new DIV that will act as an option item: 
    c = document.createElement("DIV");
    c.innerHTML = selElmnt.options[j].innerHTML;
    c.addEventListener("click", function(e) {
        // When an item is clicked, update the original select box,
        //and the selected item: 
        var y, i, k, s, h, sl, yl;
        s = this.parentNode.parentNode.getElementsByTagName("select")[0];
        sl = s.length;
        h = this.parentNode.previousSibling;
        for (i = 0; i < sl; i++) {
          if (s.options[i].innerHTML == this.innerHTML) {
            s.selectedIndex = i;
            h.innerHTML = this.innerHTML;
            y = this.parentNode.getElementsByClassName("same-as-selected");
            yl = y.length;
            for (k = 0; k < yl; k++) {
              y[k].removeAttribute("class");
            }
            this.setAttribute("class", "same-as-selected");
            break;
          }
        }
        h.click();
    });
    b.appendChild(c);
  }
  x[i].appendChild(b);
  a.addEventListener("click", function(e) {
    // When the select box is clicked, close any other select boxes,
    //and open/close the current select box: 
    e.stopPropagation();
    closeAllSelect(this);
    this.nextSibling.classList.toggle("select-hide");
    this.classList.toggle("select-arrow-active");
  });
}

function closeAllSelect(elmnt) {
  // A function that will close all select boxes in the document,
  //except the current select box: 
  var x, y, i, xl, yl, arrNo = [];

  x = document.getElementsByClassName("select-items");
  y = document.getElementsByClassName("select-selected");
  xl = x.length;
  yl = y.length;
  for (i = 0; i < yl; i++) {
    if (elmnt == y[i]) {
      arrNo.push(i)
    } else {
      y[i].classList.remove("select-arrow-active");
    }
  }
  for (i = 0; i < xl; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add("select-hide");
    }
  }
}

/* If the user clicks anywhere outside the select box,
then close all select boxes: */
document.addEventListener("click", closeAllSelect);



var form = document.getElementById("first-form");
var open = document.getElementById("open");
open.addEventListener("click", function(){
  if (form.style.display = "none"){
    form.style.display ="block";  /**if form does not work change it to flex */
  } var close_form =  document.getElementById("Close-form").addEventListener("click",function(){
    form.style.display = "none";
  })

  window.onclick =function(event){
    if(event.target == form){
      form.style.display = "none"
    }
  }
  
});







/*var setTime1 = document.getElementById("setTime1");
var setTime = document.getElementById("setTime");



function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
  }

  document.cookie = "username= nasir; expires=Thu, 01 Jan 1970 00:00:00 UTC;  path=C:Users/miche/documnets/projectOne";
  var read = document.cookie;
  console.log(read)

// store cookie name
function setCookie(cname, cvalue, exdays){
    var date = new Date();
    date.setTime(date.getTime() + (exdays*24*60*60*1000));
    var expires1 = "expires" + date.toUTCString();
    document.cookie = cname + "=" +cvalue + ";" + expires1+";path=/";
}

function getCookie(cname){
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(";");
    for(var i =0; i < ca.length; i++){
        var c = ca[i]
        while(c.charAt(0)== " "){
            c.substring(1);
        }
        if(c.indexOf(name)== 0){
            return c.substring(name.length, c.length)
        }
    }
    return " ";
}

function checkCookie(){
    var username1 = getCookie("username");
    if(username1 != ""){
        alert("welecome agin!"+ username1);
    }else{
        username1 = prompt("please enter your name:"," ");
        if(username1 !=" " && username1 != null){
            setCookie("username",username1, 365);
        }
    }
}*/






