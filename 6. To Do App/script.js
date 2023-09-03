const itemNameInput = document.getElementById('item-name-input');
const addItemBtn = document.getElementById('add-item-btn');
const itemsList = document.getElementById('items');

let itemsNames = JSON.parse(localStorage.getItem('to do items')) ?? [];

if (itemsNames.length > 0) {
  itemsNames.forEach((item) => {
    drawItem(item);
  });
}

// Functions

function drawItem(itemName) {
  const item = document.createElement('li');
  const checkbox = document.createElement('input');
  const text = document.createElement('p');
  const removeElementBtn = document.createElement('button');

  item.appendChild(checkbox);
  item.appendChild(text);
  item.appendChild(removeElementBtn);

  item.classList.add('item');
  checkbox.classList.add('item-checkbox');
  checkbox.type = 'checkbox';
  text.classList.add('item-text');
  removeElementBtn.classList.add('remove-item-btn');

  text.innerHTML = itemName;
  removeElementBtn.innerHTML = 'X';

  removeElementBtn.addEventListener('click', () => {
    item.remove();
    itemsNames.splice(itemsNames.indexOf(itemName), 1);
    localStorage.setItem('to do items', JSON.stringify(itemsNames));
  });

  itemsList.append(item);
}

function saveNewItem(itemName) {
  itemsNames.push(itemName);
  localStorage.setItem('to do items', JSON.stringify(itemsNames));
}

// Events

addItemBtn.addEventListener('click', () => {
  if (itemNameInput.value != '') {
    saveNewItem(itemNameInput.value);
    drawItem(itemNameInput.value);

    itemNameInput.value = '';
  } else {
    alert('Type something');
  }
});
