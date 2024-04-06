import React, { useState,useEffect } from "react";

import{useNavigate} from "react-router-dom"
const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const navigate = useNavigate();
  const handleLogin = () => {
    setEmailError("");
    setPasswordError("");

    if (!email) {
      setEmailError("Email Field Is Required.");
    } else {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(email)) {
        setEmailError("Invalid Email Address.");
      }
    }

    if (!password) {
      setPasswordError("Password Field Is Required.");
    }

    if (emailError || passwordError) {
      return;
    }

    localStorage.setItem("user",JSON.stringify({email,password}));
    navigate("/");
  };

useEffect(()=>
{
const user=localStorage.getItem("user");
if(user)
{
  navigate("/");
}
},[])
 
  return (
    <div className="container login_wrapper ">
      <div className="row justify-content-center align-items-center">
        <div className="col-md-6">
          <div className="login_card_wrapper">
            <h3>Login Page</h3>
            <div>
              <p className="my-2 mb-2">Email Address</p>

              <input
                type="text"
                className="input_text"
                onChange={(e) => setEmail(e.target.value)}
              />
              {emailError && <p className="text-danger">{emailError}</p>}
            </div>
            <div>
              <p className="my-2 mb-2">Password</p>

              <input
                type="password"
                className="input_text"
                onChange={(e) => setPassword(e.target.value)}
              />
             {passwordError && <p className="text-danger">{passwordError}</p>}
            </div>
           
             <h4 className="my-2 cursor-pointer">Forgot Password</h4 >
            <button className="login_button my-3" onClick={handleLogin}>
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
