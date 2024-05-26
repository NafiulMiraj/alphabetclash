// function play()
// {
//     // 1 hide home
//     const homeSection = document.getElementById('home-screen');
// homeSection.classList.add('hidden');
//     // show playground 

//     const playgroundShow = document.getElementById('play-ground');
// playgroundShow.classList.remove('hidden');
// }

function play(){
    hideElementById('home-screen');
    showElementById('play-ground');
    continueGame();

}

function continueGame(){
//generate a random alphabet 
const alphabet = getARandomAlphabet();
console.log('your jujutsu ALPHABET is ', alphabet);
const currentAlphabetElement = document.getElementById('current-alphabet');
currentAlphabetElement.innerText = alphabet;

//set bg color
setBackgroundColorById(alphabet)

}

