import React, { Component } from 'react'

class WelcomeUser extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn: false
        }
    }
    render() {
        return this.state.isLoggedIn && <div>Welcome, Kindson</div>
    }
}
export default WelcomeUser