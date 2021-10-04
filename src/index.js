//Chuck Norris Jokes

document.addEventListener('DOMContentLoaded', () => { 
//Event Listener 1: DOMContentLoaded
console.log("Something")

const jokeButton = document.querySelector('#joke')
jokeButton.addEventListener("click", () => getJokes())
//Event Listener 2: Button for "Next Joke"
//Add listener to button then fetch from API
const nextButton = document.querySelector('#next-joke')
nextButton.addEventListener('click', () => nextJoke())


function getJokes(){
  console.log("Joke Button Clicked")
  
  return fetch('https://api.chucknorris.io/jokes/random')
  .then(resp => resp.json())
  .then(element => {
    currentJoke(element.value)
    //Fetching from https://api.chucknorris.io/jokes/random

  })
}

function nextJoke(){
  const reaction = document.querySelector("#laughed").value
  if(reaction === 'laughed' || reaction ===  "i'm-crying"){
    const haha = document.querySelector("h4")
    let h3 = document.createElement("h3")
    console.log("Place where joke goes was found")
    //h3.innerHTML = something
    p.innerText = haha
    console.log(h3)
    console.log(haha)
    console.log("attempting to write innerHTML")
    const funnyList = document.querySelector("#funny-list")
    funnyList.append(h3)
    getJokes()
  }else {
    getJokes()
  }
}

function currentJoke(jokeValue){
  const joke = document.querySelector("#temp")
  const h4 = document.createElement("h4")
  document.querySelector("h4").remove()
  h4.innerHTML = jokeValue
  joke.append(h4)
  document.querySelector("#laughed").style.display = "block"
  document.querySelector("#next-joke").style.display = "block"
  
  //add a drop down list here to rate the joke
  //1-Lame, 2-"Eh", 3-Chuckled, 4-Laughed, 5-I'm Crying
  //add a check button next to, to submit
}

//Get random Chuck Norris joke and rate it

//Event Listener 3: List?, select how funny it was

//On the HTML page, start with Button:
//"Did you hear:"
//Once clicked, Get random joke from API
//Have list next to joke (1-5 as options)
//If 4 or 5, save joke underneath

});