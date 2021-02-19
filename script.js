document.getElementById('button').addEventListener('click', comparison)
let userInput = 0

function comparison () {
// Get user input
  userInput = document.getElementById('input').value
  
  if (userInput >= 17) {
    document.getElementById('answer').innerHTML = 'You are able to see an R movie alone, as well as PG-13, PG, and G rated movies.'
  }  else if (userInput >= 13) {
    document.getElementById('answer').innerHTML = 'You are able to see an PG-13 movie alone, as well as PG, and G rated movies.'
  }  else if (userInput >= 5) {
    document.getElementById('answer').innerHTML = 'You are able to see PG, and G rated movies.'
  }  else {
    document.getElementById('answer').innerHTML = 'You are too young for most movies'
  }
}