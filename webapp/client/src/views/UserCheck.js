import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './UserCheck.css';
import back from './images/backImg.jpg';
import front from './images/signup.jpg';
import axios from 'axios';

class UserCheck extends Component {
    state = {
        username: '',
        email: '',
        password: '',
        error:'',
    }

    handleChange = (e) => {
        const input = e.target;
        const name = input.name;
        const value = input.value;
        this.setState({ [name]: value });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        if(e.nativeEvent.submitter.name === 'Login') {
            try {
                return axios.post('http://localhost:5000/auth/login', {
                    username: this.state.username,
                    password: this.state.password,
                })
            } catch (error) {
                console.log(error);
            }
        }
        if(e.nativeEvent.submitter.name === 'SignUp') {
            console.log('Signup');
        }
    }

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
                        <form onSubmit={this.handleSubmit} name="Login">
                            <div className="form-content">
                                <div className="login-form">
                                    <div className="title">Login</div>
                                    <div className="input-boxes">
                                        <div className="input-box">
                                            <i className="fas fa-envelope"></i>
                                            <input type="text" placeholder="Username" onChange={this.handleChange} value={this.state.username} name="username" />
                                        </div>
                                        <div className="input-box">
                                            <i className="fas fa-lock"></i>
                                            <input type="password" placeholder="Password" onChange={this.handleChange} value={this.state.password} name="password" />
                                        </div>
                                        <div className="button input-box">
                                            <input type="submit" value="Login" name="Login"/>
                                        </div>
                                        <div className="text sign-up-text">Don't have an account? <label htmlFor="flip">Sigup now</label></div>
                                    </div>
                                </div>
                                <div className="signup-form">
                                    <div className="title">Signup</div>
                                    <div className="input-boxes">
                                        <div className="input-box">
                                            <i className="fas fa-user"></i>
                                            <input type="text" placeholder="UserName" onChange={this.handleChange} value={this.state.username} name="username" />
                                        </div>
                                        <div className="input-box">
                                            <i className="fas fa-envelope"></i>
                                            <input type="text" placeholder="Email" onChange={this.handleChange} value={this.state.email} name="email" />
                                        </div>
                                        <div className="input-box">
                                            <i className="fas fa-lock"></i>
                                            <input type="password" placeholder="Password" onChange={this.handleChange} value={this.state.password} name="password" />
                                        </div>
                                        <div className="button input-box">
                                            <input type="submit" value="Sign Up" name="SignUp" />
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