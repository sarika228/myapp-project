import React, { Component } from 'react'

class WelcomeUser extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn: ""
        }
    }
    render() {
        let message
        if(this.state.isLoggedIn) {
            message = <div>Welcome Kindson</div>
        } else {
            message = <div>Welcome visitor</div>
        }
        return <div>{message}</div>
    }
}
export default WelcomeUser