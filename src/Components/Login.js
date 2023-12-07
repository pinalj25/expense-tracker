import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Login.css';

export default function Login() {
  return (
  
      <div className="container">
        <div className="box">
            <div className="cover"></div>
             <div className="shadow"></div>
              <div className="content">
                    <form className="form">
                      
                       <h3 className="logo"> <i className="fa-solid fa-key hhh"></i></h3>
                       <h2>Sign In</h2>
                
                          <div className="inputBox">
                         
                              <input type="text" required />
                              <i class="fa-solid fa-user"></i> 
                              <label for="">  Username</label>
                          </div>
                          <div className="inputBox">
                          <input type="password"  required />
                          <i class="fa-solid fa-lock"></i> 
                          <label for=""> Password </label>
                           
                          </div>
                          <div className="links">
                            <a href="#"><i class="fa-solid fa-question" ></i>Forgot Password</a>
                            <a href="#"><i class="fa-solid fa-user-plus" ></i> Sign Up</a>
                          </div>
                          <div className="inputBox">
                             <button>Login</button>
                          </div>
                   
                       
                        
                    </form>
             <div/>
         </div>
       </div>
    </div> 
   
  );
}
