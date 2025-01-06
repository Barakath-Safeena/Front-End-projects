const input=document.getElementById("input-box");
const listcontainer=document.getElementById("list-container");

function addtask(){
    if(input.value===""){
        alert("add any task");
    }
    
    else{
        let list=document.createElement("li");
        list.innerHTML=input.value;
        listcontainer.appendChild(list);
        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        list.appendChild(span);
    }
    input.value="";
    savedata();
}
listcontainer.addEventListener("click",function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
    }savedata();
},false);
function savedata(){
    localStorage.setItem("data",listcontainer.innerHTML);
}
function showdata(){
    listcontainer.innerHTML=localStorage.getItem("data");
}
showdata();