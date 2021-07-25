import React, { Component } from 'react';
import logo from '../logo.svg';
import './Home.css'
import { Link } from 'react-router-dom';

class Home extends Component {
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
                                <Link 
                                    to='/usercheck'
                                    className='button'
                                >UserCheck</Link>
                        
                            <b>Welcome to our system</b>
                            <p>
                            Being able to predict Earthquakes could allow us <br /> to better protect human life and property.
                            </p>
                        </div>
                        
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;
