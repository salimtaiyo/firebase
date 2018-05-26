import React, { Component } from 'react';
import './Note.css';
import PropTypes from 'prop-types';

class Note extends Component{
    constructor(props){
        super(props);
        this.noteContent = props.noteContent;
        this.noteId = props.noteId;
    }

    render(props){
        return(
            <div> 
              <p className="">{this.noteId} {this.noteContent} </p>
            </div>
        )
    }
}
Note.PropTypes ={
    noteContent: PropTypes.string
}
export default Note;