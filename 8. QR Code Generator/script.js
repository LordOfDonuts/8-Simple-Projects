const textToConvert = document.getElementById('code-input');
const generateCodeBtn = document.getElementById('add-code-btn');
const codeImg = document.getElementById('code-img');

// Functions

async function getNewQR() {
  const codeWidth = codeImg.clientWidth;
  const codeHeight = codeImg.clientHeight;

  codeImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=${codeWidth}x${codeHeight}&data=${textToConvert.value}`;
  codeImg.classList.add('show-code');
}

// Events

generateCodeBtn.addEventListener('click', () => {
  if (textToConvert.value.trim() != '') {
    getNewQR();
  } else {
    alert('You must type something');
  }
});
