import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import './UserCheck.css';
import back from './images/backImg.jpg';
import front from './images/signup.jpg';
import axios from 'axios';

class UserCheck extends Component {
    state = {
        username: '',
        email: '',
        password: '',
        usernameError:'',
        emailError:'',
        passwordError:'',
        usernameError2:'',
        passwordError2:'',
    }

    handleChange = (e) => {
        const input = e.target;
        const name = input.name;
        const value = input.value;
        this.setState({ [name]: value });
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        this.setState({
            usernameError: '',
            passwordError: '',
            emailError: '',
            usernameError2:'',
            passwordError2:'',
            redirect: false,
        })

        if(e.nativeEvent.submitter.name === 'Login') {
            try {
                
                await axios.post('/auth/login', {
                    username: this.state.username,
                    password: this.state.password,
                });

                this.setState({
                    redirect: true
                })

            } catch (error) {

                console.log(error.response);
                this.setState({
                    usernameError: error.response.data.errors.username,
                    passwordError: error.response.data.errors.password,
                    emailError: error.response.data.errors.email,
                })
            }
        }

        if(e.nativeEvent.submitter.name === 'SignUp') {
            try {
                
                await axios.post('/auth/signup', {
                    username: this.state.username,
                    email: this.state.email,
                    password: this.state.password,
                });

                this.setState({
                    redirect: true
                })

            } catch (error) {
                console.log(error.response);
                this.setState({
                    usernameError2: error.response.data.errors.username,
                    passwordError2: error.response.data.errors.password,
                    emailError: error.response.data.errors.email,
                })
            }
        }
    }

    render() {
        if (this.state.redirect) {
            return <Redirect to="/home" />
        }
        return (
            <div className='UserCheck'>
                <div className='body'>
                    <div className="container">
                        <input type="checkbox" id="flip"/>
                        <div className="cover">
                            <div className="front">
                                <img src={back} alt=""/>
                                <div className="text">
                                    <span className="text-1">Discover new information<br/>about Natural Disasters</span>
                                    <span className="text-2">Let's get connected</span>
                                </div>
                            </div>
                            <div className="back">
                                <img className="backImg" src={front} alt=""/>
                                <div className="text">
                                    <span className="text-1">Find every statistic <br/> you need with one step</span>
                                    <span className="text-2">Let's get started</span>
                                </div>
                            </div>
                        </div>
                        <form onSubmit={this.handleSubmit}>
                            <div className="form-content">
                                <div className="login-form">
                                    <div className="title">Login</div>
                                    <div className="input-boxes">
                                        <div className="input-box">
                                            <i className="fas fa-envelope"></i>
                                            <input type="text" placeholder="Username" onChange={this.handleChange} value={this.state.username} name="username" />
                                            <div className="login-username error">{this.state.usernameError}</div>
                                        </div>
                                        <div className="input-box">
                                            <i className="fas fa-lock"></i>
                                            <input type="password" placeholder="Password" onChange={this.handleChange} value={this.state.password} name="password" />
                                            <div className="login-password error">{this.state.passwordError}</div>
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
                                            <div className="signup-username error">{this.state.usernameError2}</div>
                                        </div>
                                        <div className="input-box">
                                            <i className="fas fa-envelope"></i>
                                            <input type="text" placeholder="Email" onChange={this.handleChange} value={this.state.email} name="email" />
                                            <div className="signup-email error">{this.state.emailError}</div>
                                        </div>
                                        <div className="input-box">
                                            <i className="fas fa-lock"></i>
                                            <input type="password" placeholder="Password" onChange={this.handleChange} value={this.state.password} name="password" />
                                            <div className="signup-password error">{this.state.passwordError2}</div>
                                        </div>
                                        <div className="button input-box">
                                            <input type="submit" value="Sign Up" name="SignUp" />
                                        </div>
                                        <div className="text sign-up-text">Already have an account? <label htmlFor="flip">Login now</label></div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>    
            </div>
        )
    }
}

export default UserCheck;