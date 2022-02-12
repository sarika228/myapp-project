import React, { Component } from 'react'
class WelcomeUser extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn: true
        }
    }
    render() {
        return this.state.isLoggedIn ? 
        <div>Hii</div> : 
        <div>Bye</div>
    }
}
export default WelcomeUser