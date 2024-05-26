function hideElementById(elementId) {
  const element = document.getElementById(elementId);
  element.classList.add("hidden");
}

function showElementById(elementId) {
  const element = document.getElementById(elementId);
  element.classList.remove("hidden");
}
function setBackgroundColorById(elementId){
  const element = document.getElementById(elementId);
  element.classList.add('bg-orange-300');
}
function removeBackgroundColorById(elementId){
  const element = document.getElementById(elementId);
  element.classList.add('bg-orange-300');
}

function getARandomAlphabet() {
  const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
  const alphabets = alphabetString.split('');
  console.log(alphabets);

  //get a random number
  const randomNumber = Math.random()*25;
  const index = Math.round(randomNumber);


  const alphabet =alphabets[index];
  // console.log(index, alphabet);
  return alphabet;

}
