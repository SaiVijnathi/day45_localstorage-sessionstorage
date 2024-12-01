import {React, useEffect, useRef} from 'react'
import { Link, useNavigate } from 'react-router-dom';
import TopNavigation from './TopNavigation';


function Login() {

    let navigate = useNavigate();

    let emailInputRef = useRef();
    let passwordInputRef = useRef();
    let messageInputRef = useRef();

    useEffect(()=>{
        emailInputRef.current.value = localStorage.getItem("email");
        passwordInputRef.current.value = localStorage.getItem("password");

        
        if(localStorage.getItem("email")&& localStorage.getItem("password")){
        validateLogin();
        }
    },[]);


    let validateLogin=()=>{
    let typedEmail = emailInputRef.current.value;
                    let typedPassword = passwordInputRef.current.value;
                    let typedMessage = messageInputRef.current.value;
                    
                    if(typedEmail == "saivijnathi@gmail.com" &&
                    typedPassword == "vijnathi"){

                        localStorage.setItem("email",emailInputRef.current.value);
                        localStorage.setItem("password",passwordInputRef.current.value);

                        sessionStorage.setItem("email",emailInputRef.current.value);
                        sessionStorage.setItem("password",passwordInputRef.current.value);

                    navigate("/dashboard",{state:{msg:typedMessage}});
                    }else{
                        alert("Invalid email or password.");
                    }
                }

  return (
    <div>
    <TopNavigation/>
    <h1>LogIn</h1>
        <form>            
            <div>
                <label>Email</label>
                <input type='email' placeholder="Enter your Email" ref={emailInputRef}></input>
            </div>
            <div>
                <label>Password</label>
                <input type='password' placeholder="Enter your password" ref={passwordInputRef}></input>
            </div>

            <div>
                <label>Message</label>
                <input ref={messageInputRef} placeholder="Enter any Message to display"></input>
            </div>

            <div>
                <button type='button' onClick={()=>{

                    
                    validateLogin();


                }}>LogIn</button>
            </div>
        </form>
        <div className='validate'>
        <p style={{color:"white"}}>Don't have an account? </p>
        <Link to="/signup" style={{textDecoration:"none",color:"yellow",fontSize:"1.3rem"}}>SignUp</Link>
        </div>
    </div>
  )
}

export default Login;