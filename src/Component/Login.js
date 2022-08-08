import React from "react";
import "./Login.css";
import exam2 from "./exam2.jpg";

const Login = () => {
  return (
    <>
     <div className="heading"> 
     <h1>Welcome to examination </h1> 
     </div> 
     <div className="main"> 
     <div className="Left"> 
     <img src={exam2}/> 
     </div>
      <div className="right"> 
     <div className="login">
       <label>User name : <br/></label> <input type="text"/> <br/>
       <label>Password :<br/> </label> <input type="password"/> <br/><br/>
       <button><input type="button" value="Login" /></button><br/><br/>
       <a href="#">Forgot password</a><br/><br/>
       <button>Signup</button>
       </div>
       </div>
       </div>
    </>
  );
};
export default Login;
