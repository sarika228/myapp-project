import React, { Component } from 'react'

export class WelcomeUser extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn: true
        }
    }
    
    render() {
        if(this.state.isLoggedIn) {
        return (
            <div> Welcome, Sarika! </div>
        )
        }
        else {
        return (
            <div> Welcome, visitor! </div>
        )
        }
    }
}

export default WelcomeUser