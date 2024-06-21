import React, { useState } from "react";
import bg from '../assets/bg.jpg';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import React, { useState } from "react";
import bg from '../assets/bg.jpg';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Authenticate = () => {
  const [reguser, setReguser] = useState('');
  const [regphone, setRegphone] = useState('');
  const [regemail, setRegemail] = useState('');
  const [regpassword, setRegpassword] = useState('');
  const [logphone, setLogphone] = useState('');
  const [logpassword, setLogpassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/register', {
        reguser,
        regphone,
        regemail,
        regpassword
      });

      console.log(response.data);

      if (response.data.message === 'success') {
        alert('User Registered Successfully');
        navigate('/home');
      } else {
        alert('Failed to register user');
      }
    } catch (error) {
      console.error('Error registering user:', error);
      alert('An error occurred while registering');
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/login', {
        phone: logphone,
        password: logpassword
      });

      console.log(response.data);

      if (response.data.message === 'success') {
        alert('Login Successful');
        navigate('/dashboard'); // Navigate to dashboard or home page after login
      } else {
        alert('Login Failed. Please check your credentials.');
      }
    } catch (error) {
      console.error('Error logging in:', error);
      alert('An error occurred while logging in');
    }
  };

  return (
    <div className="modal fade" id="loginModal" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-body login">
            <div className="container">
              <div className="row full-height justify-content-center">
                <div className="section text-center">
                  <h6 className="mb-0 pb-3">
                    <span style={{ color: 'white' }}>Log In </span>
                    <span style={{ color: 'white' }}>Sign Up</span>
                  </h6>
                  <input className="checkbox" type="checkbox" id="reg-log" name="reg-log" />
                  <label htmlFor="reg-log"></label>
                  <div className="card-3d-wrap mx-auto slide-fwd-center">
                    <div className="card-3d-wrapper">
                      <div className="card-front">
                        <form style={{ backgroundImage: `url(${bg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                          <div className="center-wrap">
                            <div className="section text-center">
                              <h4 className="mb-4 pb-3">Log In</h4>
                              <div className="form-group mt-3">
                                <input type="tel" name="phone" className="form-style" placeholder="Your Phone Number" id="logphone" autoComplete="off" required onChange={(e) => setLogphone(e.target.value)} />
                                <i className="input-icon uil uil-mobile-android-alt"></i>
                              </div>
                              <div className="form-group mt-3">
                                <input type="password" name="password" className="form-style" placeholder="Your Password" id="logpass" autoComplete="off" required onChange={(e) => setLogpassword(e.target.value)} />
                                <i className="input-icon uil uil-lock-alt"></i>
                              </div>
                              <a href="#" className="forbuttons" onClick={handleLogin}><span></span><span></span><span></span><span></span>Login</a>
                            </div>
                          </div>
                        </form>
                      </div>
                      <div className="card-back">
                        <form onSubmit={handleRegister} style={{ backgroundImage: `url(${bg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                          <div className="center-wrap">
                            <div className="section text-center">
                              <h4 className="mt-3">Sign Up</h4>
                              <div className="form-group mt-2">
                                <input type="text" name="reguser" className="form-style" placeholder="Your Full Name" id="logname" autoComplete="off" required onChange={(e) => setReguser(e.target.value)} />
                                <i className="input-icon uil uil-user"></i>
                              </div>
                              <div className="form-group mt-3">
                                <input type="tel" name="regphone" className="form-style" placeholder="Your Phone Number" id="logphone" autoComplete="off" required onChange={(e) => setRegphone(e.target.value)} />
                                <i className="input-icon uil uil-mobile-android-alt"></i>
                              </div>
                              <div className="form-group mt-3">
                                <input type="email" name="regemail" className="form-style" placeholder="Your Email" id="logemail" autoComplete="off" required onChange={(e) => setRegemail(e.target.value)} />
                                <i className="input-icon uil uil-at"></i>
                              </div>
                              <div className="form-group mt-3 ">
                                <input type="password" name="regpassword" className="form-style" placeholder="Your Password" id="logpass" autoComplete="off" required onChange={(e) => setRegpassword(e.target.value)} />
                                <i className="input-icon uil uil-lock-alt"></i>
                              </div>
                              <a href="#" className="forbuttons" onClick={handleRegister}><span></span><span></span><span></span><span></span>Register</a>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

