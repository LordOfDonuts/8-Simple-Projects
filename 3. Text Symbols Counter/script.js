const textInput = document.getElementById('text-input');
const countBtn = document.getElementById('count-btn');

const totalWords = document.getElementById('words-number');
const totalSpaces = document.getElementById('spaces-number');
const totalLetters = document.getElementById('letters-number');
const totalConsonants = document.getElementById('consonants-number');
const totalVowels = document.getElementById('vowels-number');

setZeroInputs();

function setZeroInputs() {
  totalWords.innerHTML = 'Words: <strong>0</strong>';
  totalSpaces.innerHTML = 'Spaces: <strong>0</strong>';
  totalLetters.innerHTML = 'Letters: <strong>0</strong>';
  totalConsonants.innerHTML = 'Consonants: <strong>0</strong>';
  totalVowels.innerHTML = 'Vowels: <strong>0</strong>';
}

function checkInput() {
  if (textInput.value != '') {
    const wordsNumber = textInput.value
      .split(' ')
      .filter((word) => word != '').length;
    totalWords.innerHTML = `Words: <strong>${wordsNumber}</strong>`;

    const lettersNumber = textInput.value.match(
      /[aeioubcdfghjklmnpqrstvwxyz]/gi
    )
      ? textInput.value.match(/[aeioubcdfghjklmnpqrstvwxyz]/gi).length
      : 0;
    totalLetters.innerHTML = `Letters: <strong>${lettersNumber}</strong>`;

    const consonantsNumber = textInput.value.match(/[bcdfghjklmnpqrstvwxyz]/gi)
      ? textInput.value.match(/[bcdfghjklmnpqrstvwxyz]/gi).length
      : 0;
    totalConsonants.innerHTML = `Consonants: <strong>${consonantsNumber}</strong>`;

    const vowelsNumber = textInput.value.match(/[aeiou]/gi)
      ? textInput.value.match(/[aeiou]/gi).length
      : 0;
    totalVowels.innerHTML = `Vowels: <strong>${vowelsNumber}</strong>`;

    const spacesNumber = textInput.value.length - lettersNumber;
    totalSpaces.innerHTML = `Spaces: <strong>${spacesNumber}</strong>`;
  } else {
    setZeroInputs();
  }
}

countBtn.addEventListener('click', checkInput);
