const textInput = document.getElementById('text-input');
const countBtn = document.getElementById('count-btn');

const totalLetters = document.getElementById('total-letters-number');
const totalConsonants = document.getElementById('total-consonants-number');
const totalVowels = document.getElementById('total-vowels-number');

setZeroInputs();

function setZeroInputs() {
  totalLetters.innerHTML = 'Total amount of consonants: <strong>0</strong>';
  totalConsonants.innerHTML = 'Total amount of consonants: <strong>0</strong>';
  totalVowels.innerHTML = 'Total amount of vowels: <strong>0</strong>';
}

function checkInput() {
  if (textInput.value) {
    const lettersNumber = textInput.value.match(
      /[aeioubcdfghjklmnpqrstvwxyz]/gi
    ).length;
    totalLetters.innerHTML = `Total amount of consonants: <strong>${lettersNumber}</strong>`;

    const consonantsNumber = textInput.value.match(
      /[bcdfghjklmnpqrstvwxyz]/gi
    ).length;
    totalConsonants.innerHTML = `Total amount of consonants: <strong>${consonantsNumber}</strong>`;

    const vowelsNumber = textInput.value.match(/[aeiou]/gi).length;
    totalVowels.innerHTML = `Total amount of vowels: <strong>${vowelsNumber}</strong>`;
  } else {
    setZeroInputs();
  }
}

countBtn.addEventListener('click', checkInput);
