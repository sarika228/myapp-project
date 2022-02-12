import React from 'react';

class Example extends React.Component {
   constructor(props) {
      super(props);
		
      this.state = {
         header: "Hii sarika",
         content: "Welcome to Home"
      }
   }

   changeHead(){
       this.setState({
           header: "Hello Ramya"
       })
   }

   render() {
      return (
         <div>
            <h1>{this.state.header}</h1>
            <h2>{this.state.content}</h2>
            <button onClick={() => this.changeHead()}>
                Change Heder
            </button>
         </div>
      );
   }
}
export default Example;