import React, { useState } from "react";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState("");
  const handleLogin = () => {
    if (!email) {
      setError("Email Field Is Required.");
    }
    if (!password) {
      setError("Password Field Is Required.");
    }
  };
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
              {error && <p className="text-danger">{error}</p>}
            </div>
            <div>
              <p className="my-2 mb-2">Password</p>

              <input
                type="password"
                className="input_text"
                onChange={(e) => setPassword(e.target.value)}
              />
              {error && <p className="text-danger">{error}</p>}
            </div>
            
            
            <button className="login_button my-3" onClick={handleLogin}>
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
