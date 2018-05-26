import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Note from './Note/Note';
import Noteform from './Noteform/Noteform';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      notes: [
        {id:1, noteContent: "Note 1"},
        {id:2, noteContent: "Note 2"}
      ]
    }
  }
  render() {
    return (
      <div className="App">
       <h1> Fire and react base</h1>
       <div>
       {
        this.state.notes.map((note) => {
          return(<Note noteContent={note.noteContent} noteId={note.id} key={note.id}/>)
        })
       }
       </div>
       
       <Noteform/>
      </div>
    );
  }
}

export default App;
