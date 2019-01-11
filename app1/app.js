const fs = require("fs")
const os = require("os")
const _ = require("lodash")
const notes = require("./notes.js")

const user = os.userInfo();
const host = os.hostname();

let sum = notes.addNum(5, 5);

console.log('Starting app.js')

//option 1
fs.appendFile('greeting.txt', 'Hi There! this is first note.', function(err) {
  if (err) {
    console.error('Unable to write to file')
  }
})

fs.unlink('greeting.txt', (err) => {
  if (err) throw err;
  console.log('Successfully deleted greeting.txt')
})

//option 2
fs.appendFileSync('greeting2.txt', `\nHello ${user.username}. Host is equivalent to: ${host}`)

fs.appendFileSync('mynotes.txt', `\nHello ${user.username}. Your age is: ${notes.age}. \nSum total: ${sum}`)

console.log(_.isString(true))
console.log(_.isString('Andrew'))

let filteredArray = _.uniq(['Andrew', 1, 'Andrew', 1, 2, 3, 4])
console.log(filteredArray)
