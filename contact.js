import React from "react";
class AddContact extends React.Component{
    render(){
        return(
            <div className="main">
                <h2>Add Contact</h2>
                <form classame="form">
                    <div className="field">
                        <label>Name</label>
                        <input type="text" name="name" placeholder="Name"/>
                    </div>

                    <div className="field">
                        <label>Email</label>
                        <input type="text" name="email" placeholder="Email"/>
                    </div>
                    <button className="button">Add </button>
                </form>
            </div>
        );
    }


}
export default AddContact;