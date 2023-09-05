const itemNameInput = document.getElementById('item-name-input');
const addItemBtn = document.getElementById('add-item-btn');
const itemsList = document.getElementById('items');

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
  });

  itemsList.append(item);
}

// Events

addItemBtn.addEventListener('click', () => {
  if (itemNameInput.value != '') {
    drawItem(itemNameInput.value);
    itemNameInput.value = '';
  } else {
    alert('Type something');
  }
});