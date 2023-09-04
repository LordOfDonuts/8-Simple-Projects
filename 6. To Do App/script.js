const itemNameInput = document.getElementById('item-name-input');
const addItemBtn = document.getElementById('add-item-btn');
const itemsList = document.getElementById('items');

let toDoHTML = localStorage.getItem('to do items');

if (toDoHTML != null) {
  itemsList.innerHTML = toDoHTML;
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

  checkbox.addEventListener('change', () => {
    checkbox.classList.toggle('checked');
    localStorage.setItem('to do items', itemsList.innerHTML);
  });

  removeElementBtn.addEventListener('click', () => {
    item.remove();
    localStorage.setItem('to do items', itemsList.innerHTML);
  });

  itemsList.append(item);
}

function saveToDOM() {
  localStorage.setItem('to do items', itemsList.innerHTML);
}

// Events

addItemBtn.addEventListener('click', () => {
  if (itemNameInput.value != '') {
    drawItem(itemNameInput.value);
    itemNameInput.value = '';
    saveToDOM();
  } else {
    alert('Type something');
  }
});