const loadDom=function (){

fetch("http://localhost:3000/characters")
.then(resp=>resp.json())
.then(data=>{
   const divElement=document.querySelector("div#character-bar");
   divElement.innerHTML="";
   data.forEach(character=>{
   const cutieCharacter=character.name;
   const spanTag=document.createElement("span");
   const listCharacter=document.createElement("ul");
   spanTag.textContent=cutieCharacter;
   divElement.appendChild(spanTag);
   spanTag.appendChild(listCharacter);
  //spanTag.addEventListener("click",function(){
   // loadAnimalInfo(character.id);
   spanTag.addEventListener("click", (function(id) {
    return function() {
      loadAnimalInfo(id);
    };
  })(character.id));
    
  }
  
  );
   })
    
   }//);
   
  
//}

const loadAnimalInfo=function (id){
    const characterDetailedInfo=document.querySelector("div#detailed-info");
    fetch(`http://localhost:3000/characters/${id}`)
    .then(resp=>resp.json())
    .then(data=>{ 
        characterDetailedInfo.innerHTML="";   
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
        
        //create a form to load on the dom for adding votes

        const formElement=document.createElement("form");

        const nameLabel=document.createElement("h3");
        nameLabel.textContent=" Character Votes  : " + data.votes;

        const voteInput = document.createElement("input");
        voteInput.setAttribute("type", "text");
        voteInput.setAttribute("placeholder", "Enter your vote");
       
               
        const votesButton = document.createElement("input");
        votesButton.setAttribute("type", "submit");
        votesButton.setAttribute("value", "Add Votes" );

        //const totalVotesHeading=document.createElement("h3");
        //totalVotesHeading.innerHTML="Total Votes";
        const totalVotesLabel=document.createElement("label");
        totalVotesLabel.textContent=data.votes;
        const totalVotesHeading=document.createElement("label");
        totalVotesHeading.innerHTML="<br><br><strong><font size='4px'>Total Votes :</font> </strong>";

        
        formElement.appendChild(nameLabel);
        formElement.appendChild(voteInput);
        formElement.appendChild(votesButton);
        formElement.appendChild(totalVotesHeading);
        formElement.appendChild(totalVotesLabel);
        


        document.getElementById("detailed-info").appendChild(formElement);


        formElement.addEventListener("submit",function(e){
            e.preventDefault();
            const totalVotes=parseInt(voteInput.value)+data.votes;  
            totalVotesLabel.textContent=totalVotes;
             formElement.reset();
        })
       



       

       
        

    })
       
}

    

document.addEventListener("DOMContentLoaded", function () {
    loadDom();

    
});
