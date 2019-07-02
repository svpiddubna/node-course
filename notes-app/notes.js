const fs = require('fs');
const chalk = require('chalk');

const addNote = (title, body) => {
  const notes = loadNotes();
  // const duplicateNotes = notes.filter(note => note.title === title);
  const duplicateNote = notes.find(note => note.title === title);
  if (!duplicateNote) {
    notes.push({
      title: title,
      body: body
    });
    saveNotes(notes);
    console.log(chalk.bgGreen("New note added!"));
  } else {
    console.log(chalk.bgRed("Title taken!"));
  }
}

const removeNote = (title) => {

  const notes = loadNotes();

  const newNotes = notes.filter(note => note.title !== title);


  if (newNotes.length === notes.length) {
    console.log(chalk.bgRed("Note not found ;("));
  } else {
    console.log(chalk.bgGreen("Note removed"));
    saveNotes(newNotes);
  }
}

const listNotes = () => {
  console.log(chalk.bgBlue('Your notes'));

  const notes = loadNotes();
  notes.forEach(note => {
    console.log(note.title);
  })
}

const readNote = (title) => {
  const notes = loadNotes();

  const noteToRead = notes.find(note => note.title === title);

  if (noteToRead) {
    console.log(chalk.bgBlue(noteToRead.title))
    console.log(noteToRead.body)
  } else {
    console.log(chalk.bgRed('Note not found!!'))
  }


}

const saveNotes = notes => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync('notes.json', dataJSON);
}

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync('notes.json');
    const data = dataBuffer.toString();
    return JSON.parse(data);
  }

  catch (e) {
    return [];
  }
}

module.exports = {
  addNote: addNote,
  removeNote: removeNote,
  listNotes: listNotes,
  readNote: readNote
}

