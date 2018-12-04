const baseURL = "https://swapi.co/api/"
let url;
let people = "people"

function fetchResults(e) {
    e.preventDefault();
    url = `${baseURL}+${button}`;

 fetch(url)
 .then(function(result){
     console.log(result)
     return result.json();
 })
.then(function(json){
    console.log(json);
    displayResults(json);
})   
function displayResults(json){
    console.log("Display Results",json);
}}

switch(button){
    case document.getElementById("People").click():
     "people"
     break;
     case document.getElementById("Planets").click():
     "planets"
     break;
     case document.getElementById("Starships").click():
     "starships"
     break;
     case document.getElementById("Species").click():
    "species"
     break;

}