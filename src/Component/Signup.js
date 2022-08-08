import React from 'react'
import "./Signup.css";

const signup=() => {
  return 
  (
    <>
       <div className="main">
      <div className="header">
        <h1>Welcome on registration portal</h1>
      </div>
    
      <div className="signup">
        <label>First Name :<br/> </label> <input type="text"/><br/><br/>
        <label>Last Name :<br/> </label> <input type="text"/><br/><br/>
        <label>Email Id : <br/></label> <input type="text"/><br/><br/>

        <label>Generate password :<br/> </label> <input type="text"/><br/>
        <p>Gender:<br/></p>
        <input type="radio" name="gender" value="male"/> Male<br/>
        <input type="radio" name="gender" value="female"/> Female<br/>
        <input type="radio" name="gender" value="other"/>other<br/><br/>
        <button><input type="submit" /></button>
      </div>
    </div>

    </>
    
  );
}
export default signup;
