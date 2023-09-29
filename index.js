const loadDom=function (){

fetch("http://localhost:3000/characters")
.then(resp=>resp.json())
.then(data=>{
   const divElement=document.querySelector("div#character-bar");
   data.forEach(animal=>{
    const spanTag=document.createElement("span");
    spanTag.textContent=animal.name;
    divElement.appendChild(spanTag);
   })
    
   });
}

document.addEventListener("DOMContentLoaded",loadDom)