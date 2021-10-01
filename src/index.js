//Chuck Norris Jokes

document.addEventListener('DOMContentLoaded', () => { 
//Event Listener 1: DOMContentLoaded
console.log("Something")

const jokeButton = document.querySelector('#joke')
jokeButton.addEventListener("click", () => getJokes())
//Event Listener 2: Button for "Next Joke"

function getJokes(){
  console.log("Joke Button Clicked")
  
  return fetch('https://api.chucknorris.io/jokes/random')
  .then(resp => resp.json())
  .then(element => {
    nameLater(element.value)
    //Fetching from https://api.chucknorris.io/jokes/random

  })
}

function nameLater(jokeValue){
  const joke = document.querySelector("#joke-box")
  const h4 = document.createElement("h4")
  h4.innerHTML = jokeValue
  joke.append(h4)
}
//Add listener to button then fetch from API

//Get random Chuck Norris joke and rate it:
//1-Lame, 2-"Eh", 3-Chuckled, 4-Laughed, 5-I'm Crying

//Event Listener 3: List?, select how funny it was

//On the HTML page, start with Button:
//"Did you hear:"
//Once clicked, Get random joke from API
//Have list next to joke (1-5 as options)
//If 4 or 5, save joke underneath

});