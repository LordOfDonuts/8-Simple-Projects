const balanceNumber = document.getElementById('balance-number');

const incomeList = document.getElementById('income-list');
const outcomeList = document.getElementById('outcome-list');

const transactionInput = document.getElementById('transaction-input');
const addTransactionBtn = document.getElementById('add-transaction-btn');

let transactionValues =
  JSON.parse(localStorage.getItem('transactionsValues')) ?? [];

if (transactionValues.length > 0) {
  displayAllTransactions();
}

function displayAllTransactions() {
  transactionValues.forEach((item) => {
    addTransaction(item);
  });
}

updateBalance();

function addTransaction(moneyValue) {
  const listItem = document.createElement('li');
  const moneyText = document.createElement('span');
  const removeItemBtn = document.createElement('button');

  listItem.classList.add('transaction');
  moneyText.classList.add('money-text');
  removeItemBtn.classList.add('remove-transaction-btn');

  listItem.appendChild(moneyText);
  listItem.appendChild(removeItemBtn);

  removeItemBtn.innerHTML = 'X';

  if (moneyValue > 0) {
    moneyText.innerHTML = '+$' + moneyValue;
    incomeList.appendChild(listItem);
  } else {
    moneyText.innerHTML = '-$' + moneyValue * -1;
    outcomeList.appendChild(listItem);
  }

  removeItemBtn.addEventListener('click', () => {
    listItem.remove();
    transactionValues.splice(transactionValues.indexOf(moneyValue), 1);
    localStorage.setItem(
      'transactionsValues',
      JSON.stringify(transactionValues)
    );
    updateBalance();
  });
}

function addNewTransaction() {
  addTransaction(transactionInput.value);
  transactionValues.push(+transactionInput.value);
  localStorage.setItem('transactionsValues', JSON.stringify(transactionValues));
  updateBalance();
  transactionInput.value = '';
}

function updateBalance() {
  console.log(transactionValues);
  if (transactionValues.length > 0) {
    balanceNumber.innerHTML = transactionValues.reduce(
      (acc, current) => acc + current
    );
  }
}

addTransactionBtn.addEventListener('click', () => {
  if (transactionInput.value != '' && transactionInput.value != 0) {
    addNewTransaction();
  } else {
    alert('Write a number');
  }
});
