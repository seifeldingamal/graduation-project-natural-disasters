import React, { Component } from 'react';
import logo from '../logo.svg';
import './Home.css'
import { Link } from 'react-router-dom';
import axios from 'axios';

class Home extends Component {

    state = {
        auth: false,
    }

    async componentDidMount() {
        const res = await axios.get('/auth/check')

        this.setState({
            auth: res.data.auth
        });
    };

    logout = () => {
        axios.get('/auth/logout');
        this.setState({
            auth: false
        })
    }

    render() {
        return (
            <div className="Home">
                <div id='Body'>
                    <div id="Header">
                        <div id="content">
                            <h1>Natural<br />Disasters</h1>
                        </div>
                        <div id="main3">
                            <div className='globe'>
                                <img src={logo} className="App-logo" alt="logo" width="150" height="150"/>
                            </div>
                                <Link 
                                    to='/stats'
                                    className='button'
                                ><h5>View Disasters<br/> and <br/>Their Statistics</h5></Link>
                                <Link 
                                    to='/predict'
                                    className='button'
                                ><h5>Predict Future Shockwave Radius</h5></Link>                      
                                <Link 
                                    to='/analysis'
                                    className='button'
                                ><h5>Analysis Process</h5></Link>
                                {this.state.auth === false ?
                                    <Link 
                                        to='/usercheck'
                                        className='button'
                                    ><h5>Sign In/ Sign Up</h5>
                                    </Link>
                                    :
                                    <button 
                                        onClick={this.logout}
                                        className='button'
                                    ><h5>Sign Out</h5></button>
                                }
                        
                            <b>Welcome to our system</b>
                            <p>Being able to predict Earthquakes could allow us to better protect human life and property.</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;
