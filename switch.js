import React, { Component } from 'react'

class WelcomeUser extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn: ""
        }
    }
    render() {
        switch (this.state.isLoggedIn) {
            case true:
                return <div>Welcome, The Tech Pro</div>
            case false:
                return <div>Welcome, visitor</div>
            default:
                return null
        }
    }
}
export default WelcomeUser