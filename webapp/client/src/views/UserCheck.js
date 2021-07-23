import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './UserCheck.css';
import back from './images/backImg.jpg';
import front from './images/signup.jpg';

class UserCheck extends Component {
    render() {
        return (
            <div className='UserCheck'>
                <div className='body'>
                    <div className="container">
                        <input type="checkbox" id="flip"/>
                        <div className="cover">
                            <div className="front">
                                <img src={back} alt=""/>
                                <div className="text">
                                    <span className="text-1">Every new friend is a <br/> new adventure</span>
                                    <span className="text-2">Let's get connected</span>
                                </div>
                            </div>
                            <div className="back">
                                <img className="backImg" src={front} alt=""/>
                                <div className="text">
                                    <span className="text-1">Complete miles of journey <br/> with one step</span>
                                    <span className="text-2">Let's get started</span>
                                </div>
                            </div>
                        </div>
                        <form action="#">
                            <div className="form-content">
                                <div className="login-form">
                                    <div className="title">Login</div>
                                    <div className="input-boxes">
                                        <div className="input-box">
                                            <i className="fas fa-envelope"></i>
                                            <input type="text" placeholder="Email" required/>
                                        </div>
                                        <div className="input-box">
                                            <i className="fas fa-lock"></i>
                                            <input type="password" placeholder="Password" required/>
                                        </div>
                                        <div className="button input-box">
                                            <input type="submit" value="Login"/>
                                        </div>
                                        <div className="text sign-up-text">Don't have an account? <label htmlFor="flip">Sigup now</label></div>
                                    </div>
                                </div>
                                <div className="signup-form">
                                    <div className="title">Signup</div>
                                    <div className="input-boxes">
                                        <div className="input-box">
                                            <i className="fas fa-user"></i>
                                            <input type="text" placeholder="UserName" required/>
                                        </div>
                                        <div className="input-box">
                                            <i className="fas fa-envelope"></i>
                                            <input type="text" placeholder="Email" required/>
                                        </div>
                                        <div className="input-box">
                                            <i className="fas fa-lock"></i>
                                            <input type="password" placeholder="Password" required/>
                                        </div>
                                        <div className="button input-box">
                                            <input type="submit" value="Sign Up"/>
                                        </div>
                                        <div className="text sign-up-text">Already have an account? <label htmlFor="flip">Login now</label></div>
                                    </div>
                                </div>
                            </div>
                        </form>
                        <Link 
                            to='/'
                            className='button'
                        >Back</Link>
                    </div>
                </div>    
            </div>
        )
    }
}

export default UserCheck;