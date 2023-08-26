const explanation = document.getElementById('explanation');

const openRulesBtn = document.getElementById('open-explanation');
const closeRulesBtn = document.getElementById('close-explanation');

const translateBtn = document.getElementById('translated-button');
const textToTranslate = document.getElementById('text-to-translate');
const translatedTextArea = document.getElementById('translated-text');

function firstVowel(word) {
  return word + 'ay';
}
function consonantAndVowel(word) {
  if (word.length >= 2) {
    return word.slice(1, word.length) + word.slice(0, 1) + 'ay';
  } else {
    return word;
  }
}
function doubleConsonant(word) {
  if (word.length >= 2) {
    return word.slice(2, word.length) + word.slice(0, 2) + 'ay';
  } else {
    return word;
  }
}

function translateWord(word) {
  let translation = '';

  if (checkVowel(word.slice(0, 1))) {
    translation = firstVowel(word);
  } else if (!checkVowel(word.slice(0, 1)) && checkVowel(word.slice(1, 2))) {
    translation = consonantAndVowel(word);
  } else if (!checkVowel(word.slice(0, 1)) && !checkVowel(word.slice(1, 2))) {
    translation = doubleConsonant(word);
  }

  return translation;
}

function checkVowel(character) {
  let isVowel = false;

  if (
    character == 'a' ||
    character == 'e' ||
    character == 'i' ||
    character == 'o' ||
    character == 'u'
  ) {
    isVowel = true;
  }

  return isVowel;
}

// Events
openRulesBtn.addEventListener('click', () => {
  explanation.classList.remove('closed');
});

closeRulesBtn.addEventListener('click', () => {
  explanation.classList.add('closed');
});

translateBtn.addEventListener('click', () => {
  translatedTextArea.value = '';

  if (textToTranslate.value.trim() != '') {
    const wordsArray = textToTranslate.value
      .trim()
      .split(' ')
      .filter((word) => word != '');

    wordsArray.forEach((item) => {
      translatedTextArea.value += translateWord(item) + ' ';
    });
  } else {
    alert('Type something to translate');
  }
});
