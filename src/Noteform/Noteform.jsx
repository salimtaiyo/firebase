import React, { Component } from 'react';
import './Noteform.css';

class Noteform extends Component{
    constructor(props){
        super(props);

        this.state = {
            newNoteContent:''
        }
    }

    render(){
        return (
            <div>
                <h3> Noteform</h3>
                <input type="text" name="name" placeholder="input variable yo" value={this.state.newNoteContent} />
                <button className="btn"> Click me</button>
            </div>
        )
    }
}

export default Noteform;