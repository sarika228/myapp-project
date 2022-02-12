import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            username: ''
        }
    }

    onChangeHandler = (event) => {
        this.setState({
            username: event.target.value
        })
    }
    
    render() {
        return (
            <center>
            <div>
            <label>Username:</label>
                <input  
                onChange={this.onChangeHandler} 
                value={this.state.username} 
                type='text'></input> 
            
            <hr></hr>
            <div>
            <lable>Course</lable>
                <select value={this.state.course} 
                onChange = {this.handleCourseChange}>
                <option value="angular">Angular</option>
                <option value="javaScript">JavaScript</option>
                <option value="react">React</option>
                </select>
           
            </div>
            </div>
            </center>
        )
    }
}

export default Form
