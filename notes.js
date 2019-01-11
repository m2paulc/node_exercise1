console.log('Starting notes.js')

const fs = require("fs")

const addNote = (title, body) => {
  console.log(`Adding a Note`)
  fs.appendFileSync(title, '\n' + body)
}

const getAll = () => {
  console.log(`Listing all`)

}

const readNote = (title) => {
  console.log(`Reading Notes`)

}

const removeNote = (name) => {
  console.log(`Removing Notes`)

}

module.exports = {
  addNote,
  getAll,
  readNote,
  removeNote
}
