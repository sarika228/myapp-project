import React,{useState} from "react"
import "./login.css";
import login from "login.js";

function Loginpage(){
    const adminUser={
        email:"admin@admin.com",
        password:"admin@123"
    }
    const [user,setUser]=useState({name:"",email:""});
    const [error,setError]=useState("");

    const Login=details=>{
        console.log(details);

        if(details.email==adminUser.email && details.password==adminUser.password){
            console.log("Logged In");
            setUser({
                name:details.name,
                email:details.email
            });

    }   else{
        console.log("Details does not match!");

    }
    }

    const Logout=()=>{
       setUser({name:"",email:""});
    }
    return(
        <div className="Loginpage">
            {/* {(user.email!="")?(  */}
                <div className="welcome">
                    <h2>Welcome, <span>{user.name}</span></h2>
                    <button onClick={Logout}>Logout</button>
                </div>
            {/* ):(  */}
                  {/* <LoginForm Login={Login} error={error}></LoginForm>  */}
            
            {/* )}        */}
        </div>
    );
}
export default Loginpage;
