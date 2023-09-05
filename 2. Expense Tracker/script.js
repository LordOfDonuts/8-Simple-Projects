const balanceNumber = document.getElementById('balance-number');

const incomeList = document.getElementById('income-list');
const outcomeList = document.getElementById('outcome-list');

const transactionNumber = document.getElementById('transaction-number-input');
const transactionCategory = document.getElementById(
  'transaction-category-input'
);
const addTransactionBtn = document.getElementById('add-transaction-btn');

let transactionMap = new Map();

updateBalance();

// Function

function addTransaction(mapKey, mapValue) {
  const listItem = document.createElement('li');
  const text = document.createElement('span');
  const removeItemBtn = document.createElement('button');

  listItem.classList.add('transaction');
  text.classList.add('money-text');
  removeItemBtn.classList.add('remove-transaction-btn');

  listItem.appendChild(text);
  listItem.appendChild(removeItemBtn);

  removeItemBtn.innerHTML = 'X';

  if (mapValue > 0) {
    text.innerHTML = `${mapKey}: +$${mapValue}`;
    incomeList.appendChild(listItem);
  } else {
    text.innerHTML = `${mapKey}: -$${mapValue * -1}`;
    outcomeList.appendChild(listItem);
  }

  removeItemBtn.addEventListener('click', () => {
    listItem.remove();
    transactionMap.delete(mapKey);
    updateBalance();
    console.log(transactionMap);
  });
}

function addNewTransaction() {
  addTransaction(transactionCategory.value.trim(), +transactionNumber.value);

  transactionMap.set(
    transactionCategory.value.trim(),
    +transactionNumber.value
  );

  updateBalance();

  transactionCategory.value = '';
  transactionNumber.value = '';
}

function updateBalance() {
  if (transactionMap.size > 0) {
    let totalBalance = 0;

    for (let value of transactionMap.values()) {
      totalBalance += value;
    }

    console.log(totalBalance);

    if (totalBalance >= 0) {
      balanceNumber.innerHTML = `$${totalBalance}`;
    } else {
      balanceNumber.innerHTML = `-$${totalBalance * -1}`;
    }
  } else {
    balanceNumber.innerHTML = '$0';
  }
}

// Events

addTransactionBtn.addEventListener('click', () => {
  if (
    (transactionNumber.value != '' && transactionNumber.value != 0) ||
    transactionCategory.value.trim() != ''
  ) {
    addNewTransaction();
  } else {
    alert('Fill out the fields');
  }
});
