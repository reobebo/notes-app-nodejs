const fs=require('fs');
const _=require('lodash');
const yargs=require('yargs');

const notes=require('./notes.js');
let titleOption={
    describe: 'Title of note',
    demand: true,
    alias: 't'
};
let bodyOption={
    describe: 'Body of note',
    demand: true,
    alias: 'b'
};

const argv=yargs
.command('add','Add a new note',{
    title: titleOption,
    body:bodyOption
})
.command('list','List all notes')
.command('read','Read a note',{
    title: titleOption
})
.command('remove','Remove a note',{
    title: titleOption
})
.help()
.argv;
let command=argv._[0];


if(command==='add'){
   let note= notes.addNotes(argv.title,argv.body);
   if(note){
       notes.logNote(note);
   }else{
    console.log('this is a duplicate note');
}
} else if (command==='list'){
   let allNotes= notes.getAll();
   console.log('Printing '+allNotes.length+ ' note(s).');
   allNotes.forEach((note) => notes.logNote(note)); 
       
  
}else if(command==='read'){
 let note= notes.getNote(argv.title);
if (note){
console.log('note found');
notes.logNote(note);
}else{
    console.log('note not found');
}
}else if(command==='remove'){
 let noteRemoved = notes.removeNote(argv.title);
 let message = noteRemoved ? 'Note was removed':'Note not found';
 console.log(message);
}else{
    console.log('Command not recognized');
}