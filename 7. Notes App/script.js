const noteInputField = document.getElementById('add-note-text');
const addNoteButton = document.getElementById('add-note-btn');
const notesList = document.getElementById('notes-list');

let notesValues = JSON.parse(localStorage.getItem('notes')) ?? [];

console.log(notesValues);

if (notesValues.length > 0) {
  notesValues.forEach((noteText, noteIndex) => {
    addNote(noteText, noteIndex);
  });
}

// Functions

function addNote(noteText, noteIndex = notesValues.length) {
  const listItem = document.createElement('li');
  const noteTextArea = document.createElement('textarea');
  const noteRemoveBtn = document.createElement('button');

  listItem.appendChild(noteTextArea);
  listItem.appendChild(noteRemoveBtn);

  listItem.classList.add('note-item');
  noteRemoveBtn.classList.add('remove-note-btn');

  noteTextArea.innerHTML = noteText;
  noteRemoveBtn.innerHTML = 'X';

  noteTextArea.addEventListener('input', () => {
    notesValues[noteIndex] = noteTextArea.value;
    saveNotes();
    console.log(notesValues);
  });

  noteRemoveBtn.addEventListener('click', () => {
    listItem.remove();
    deleteNote(noteIndex);
  });

  notesList.appendChild(listItem);
}

function saveNewNote(noteText) {
  notesValues.push(noteText);
  saveNotes();
}

function saveNotes() {
  localStorage.setItem('notes', JSON.stringify(notesValues));
}

function deleteNote(noteIndex) {
  notesValues.splice(noteIndex, 1);
  saveNotes();
}

// Events

addNoteButton.addEventListener('click', () => {
  const noteText = noteInputField.value.trim();

  if (noteText != '') {
    addNote(noteText);
    saveNewNote(noteText);
    noteInputField.value = '';
  } else {
    alert('Note cannot be empty');
  }
});
