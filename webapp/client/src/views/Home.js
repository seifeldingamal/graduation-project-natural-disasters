import React, { Component } from 'react';
import logo from '../logo.svg';
import './Home.css'
import { Link } from 'react-router-dom';

class Home extends Component {
    render() {
        return (
            <div id='Body'>
                <div id="Header">
                    <div id="content">
                        <h1>Natural<br />Disasters</h1>
                    </div>
                </div>
                <div id="main3">
                    <div className='globe'>
                        <img src={logo} className="App-logo" alt="logo" />
                    </div>
                    <form action='/stats'className='button'>
                        <button >
                            <h5>View Disasters<br/>and<br/>Their Statistics</h5>
                        </button>
                    </form> 
                    <form action='/predict'className='button'>   
                        <button>
                            <h5>Predict Future<br/>Shockwave Radius</h5>
                        </button>
                    </form>    
                    <form action='/analysis'className='button'>                          
                        <button>
                            <h5>Analysis<br/>Process</h5>
                        </button>
                    </form> 
                    <form action='/usercheck'className='button'>   
                        <button >
                            UserCheck
                        </button>
                    </form>    
                
                    <b>Welcome to our system</b>
                    <p>
                    Being able to predict Earthquakes could allow us <br /> to better protect human life and property.
                    </p>
                </div>
            </div>
        )
    }
}

export default Home;
