const textInput = document.getElementById('textInput')
const textOutput = document.getElementById('textOutput')
const vowels = ['a','e','i','o','u']

textInput.addEventListener('keyup', (e) => {
  const input = e.target.value;
  //builds an array
  const words = input.split(' ');
  const output = words.map(word => convertToPigLatin(word)).join(" ")
  textOutput.innerText = output;
  });

const convertToPigLatin = (input) => {
  //check if it starts in a vowel, then just add the ending vowel
  if(vowels.includes(input[0])) {
    output = input + "-yay";
  } else {
    let consonants = "";
    for(let i = 0; i < input.length; i++) {
      if(vowels.includes(input[i])) {
        break;
      }
        consonants += input[i]
    }
    output = input.substring(consonants.length) + "-" + consonants + "ay" 
  }
  //translate to pig latin and display new text
  return output
  }