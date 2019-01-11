console.log('Starting app.js')

const os = require("os")
const _ = require("lodash")
const yargs = require("yargs")
const notes = require("./notes.js")

const user = os.userInfo();
const host = os.hostname();

const argv = yargs.argv;

var commmand = argv._[0]

switch (commmand) {
  case 'add':
    notes.addNote(argv.title, argv.body)
    break;

  case 'list':
    notes.getAll();
    break;

  case 'read':
    notes.readNote(argv.title);
    break;

  case 'remove':
    notes.removeNote(argv.name);
    break;

  default:
    console.log('Command not recognize')
}
