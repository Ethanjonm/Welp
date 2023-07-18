import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import * as sessionActions from "../../store/session";
import "./SignupForm.css"

const SignupFormPage = () => {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  const [email, setEmail] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [zip_code, setZip_code] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState([]);

  if (sessionUser) return <Redirect to="/" />;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      setErrors([]);
      return dispatch(sessionActions.signup({ email, fname, lname, zip_code, password }))
        .catch(async (res) => {
        let data;
        try {
          // .clone() essentially allows you to read the response body twice
          data = await res.clone().json();
        } catch {
          data = await res.text(); // Will hit this case if the server is down
        }
        if (data?.errors) setErrors(data.errors);
        else if (data) setErrors([data]);
        else setErrors([res.statusText]);
      });
    }
    return setErrors(['Confirm Password field must be the same as the Password field']);
  };

  return (

    <div className="Container">  
        <div className="SignupForm-Container"> 
            <h2 className="signup-title">Sign Up for Welp</h2>
            <p>Connect with local Businesses</p>
            {/* <p>Term of Service</p> */}
            <form onSubmit={handleSubmit}>
            <ul className="errors">
                {errors.map(error => <li key={error}>{error}</li>)}
            </ul>
            <label className="email">

                <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                required
                />
            </label>
            <label className="fname">
                <input
                type="text"
                value={fname}
                onChange={(e) => setFname(e.target.value)}
                placeholder="First name"
                required
                />
            </label>
            <label className="lname">
                <input
                type="text"
                value={lname}
                onChange={(e) => setLname(e.target.value)}
                placeholder="Last name"
                required
                />
            </label>
            <label className="zip_code">

                <input
                type="text"
                value={zip_code}
                onChange={(e) => setZip_code(e.target.value)}
                placeholder="Zip Code"
                required
                />
            </label>
            <label className="password">
                <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                required
                />
            </label>
            <label className="confirmPassword">
                <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Comfirm Password"
                required
                />
            </label>
            <button id="Signup" type="submit">Sign Up</button>
            </form>
        </div>
    </div>
  );
}

export default SignupFormPage;