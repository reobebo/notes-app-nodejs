const fs = require('fs');

let fetchNotes=()=>{
    try{
        let notesString=fs.readFileSync('notes-data.json');
        return JSON.parse(notesString);
        }catch(e){
            return [];
    
        }
    
};

let saveNotes=(notes) =>{
    fs.writeFileSync('notes-data.json',JSON.stringify(notes));
};
let addNotes = (title,body) =>{
    let notes =fetchNotes();
    let note={
        title,
        body
    };
 
    let duplicateNotes=notes.filter((note)=>{
        return note.title===title;
    });

    if (duplicateNotes.length===0){
        notes.push(note);
        saveNotes(notes);
        return note;
        
    }
   
};

let getAll=() =>{
    return fetchNotes();
};
let getNote=(title) =>{
    console.log('getting your note',title);
    let notes=fetchNotes();
    let filteredNotes=notes.filter((note)=>note.title ===title);
    return filteredNotes[0];
}
let removeNote=(title) =>{
     //fetch notes
   let notes=fetchNotes();
   //filter notes, removing the one title of arg
   let filteredNotes=notes.filter((note)=>note.title !==title);
   //save new notes array
   saveNotes(filteredNotes);

   return notes.length !==filteredNotes.length;
}

let logNote=(note)=>{
  
    //use read command with --title
    console.log(note.title + ' '+note.body+' was added!');
};

module.exports={
    addNotes,
    getAll,
    getNote,
    removeNote,
    logNote
};