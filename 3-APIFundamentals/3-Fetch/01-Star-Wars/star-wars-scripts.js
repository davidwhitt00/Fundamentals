var starWarsPeopleList = document.querySelector("ul");

fetch("https://swapi.co/api/people")
.then(function(response){
return response.json();
})
.then(function(json){
// "use strict"
    let people = json.results;

for(let p of people) {
    var listItem = document.createElement("li");
    listItem.innerHTML = "<b>" + p.name + "</b>";
    starWarsPeopleList.appendChild(listItem);
}

});