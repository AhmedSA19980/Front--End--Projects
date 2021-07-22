function openList(){
    //here we choose the sidebar ele to change it's style
    var start = document.getElementById("list-adress");
    start.style.height = "100%"
    
}

function closeList(){
    var start = document.getElementById("list-adress");
    start.style.height = "0"
    

}
var option = document.getElementById("option");

//add transtion to click
function doubleClick(opetionList1){
    if (option.style.display ==="none"){
        option.style.display = "block"
    }else{
        option.style.display = "none"
    }

}


function popup(){
  var formP = document.getElementById("con-form-pro");
  var form_pro = document.querySelector(".form-pro");
  form_pro.style.background ="# 5ECADB"
  document.body.style.position ="fixed"
  
  document.body.style.top="-9px"

  var close = document.getElementById("close1").addEventListener("click", function(){
    formP.style.display = "none"
    document.body.style.position ="relative"
    document.body.style.position = '';
    document.body.style.top = '';

  });

    if(formP.style.display="none"){
       formP.style.display = "flex";
      
    }

    window.onclick = function(event1){
        if(event1.target == formP){
          formP.style.display = "none"
          document.body.style.position ="relative"
          document.body.style.position = '';
          document.body.style.top = '';
        }
    }

  
}

