let container=document.getElementById("list-container");
  let input=document.getElementById("input-box");
  function addtask(){
    if (input.value==""){
        alert("add your notes");
    }
    else{
        let text=document.createElement("p");
        text.innerHTML=input.value;
        container.appendChild(text);
        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        text.appendChild(span);
    }
    input.value="";
  savedata();
}
  container.addEventListener("click",function(e){
    if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
    }
    savedata();
  },false);
  
  function savedata(){
    localStorage.setItem("data",container.innerHTML);
}
function showdata(){
    container.innerHTML=localStorage.getItem("data");
}
showdata();