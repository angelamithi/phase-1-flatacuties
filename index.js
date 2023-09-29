const loadDom=function (){

fetch("http://localhost:3000/characters")
.then(resp=>resp.json())
.then(data=>{
   const divElement=document.querySelector("div#character-bar");
   data.forEach(character=>{
   const cutieCharacter=character.name;
   const spanTag=document.createElement("span");
   const listCharacter=document.createElement("ul");
   spanTag.textContent=cutieCharacter;
   divElement.appendChild(spanTag);
   spanTag.appendChild(listCharacter);
  spanTag.addEventListener("click",function(){
    loadAnimalInfo(character.id);
  }
  
  );
   })
    
   });
   
  
}

const loadAnimalInfo=function (id){
    const characterDetailedInfo=document.querySelector("div#detailed-info");
    characterDetailedInfo.innerHTML=""
    fetch(`http://localhost:3000/characters/${id}`)
    .then(resp=>resp.json())
    .then(data=>{       
        const characterName=document.createElement("h2");
        characterName.textContent=data.name;
        characterDetailedInfo.appendChild(characterName);

        const characterImage=document.createElement("img");
        characterImage.src=data.image;
        characterImage.alt=data.name;
        characterDetailedInfo.appendChild(characterImage);

        const characterVotes=document.createElement("p");
        characterVotes.textContent=data.votes;
        characterDetailedInfo.appendChild(characterVotes);

    })
       
}

const loadForm= function(){
    const formElement=document.querySelector("form#votes-form");
    formElement.addEventListener("submit",event=>{
        event.preventDefault();
        const input=document.querySelector("#votes").value;
       

    })
}
    

document.addEventListener("DOMContentLoaded",loadDom)