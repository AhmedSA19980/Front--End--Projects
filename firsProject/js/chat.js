
       



function searchName(){
    var peopleList, list, li ,displayItem, filter, textValue;
    /*  declare all the varibles[element] that we make event of them*/
    peopleList = document.getElementById("find");
    filter = peopleList.value.toUpperCase();/*we filter the text even if we write upper or lower case*/
    list =  document.getElementById("list-chat");
    li = list.getElementsByTagName("li");
    /* here we loop through  item list(li)  */
    for(var i = 0;i < li.length; ++i){ 
        displayItem =li[i].getElementsByTagName("div")[0]; /*here we start serch by first index , we have only one list item, 
        os the index[should be 0+]   if we have to list and want to serch by second list item [should be [1] ] */ 
        textValue = displayItem.textContent || displayItem.innerText;/*display the list item search in new window  */
       
        if (textValue.toUpperCase().indexOf(filter) > -1){
              /*the key or letter we start to type it going to match ,start from first letter checks if contain in items list name  */
            li[i].style.display = ""; /*mean block  */
        }else {
            li[i].style.display = "none";
        }
    }

}


function autoHighAdjust(ele){
    ele.style.height = "50%";
    ele.style.height = (ele.scrollHeight)+ "px";
} 
