import React, { Component } from 'react';
import './Predict.css'
import { Link, Redirect } from 'react-router-dom';
import MapComp from '../components/MapComp';

const config = require('./config');
const axios = require('axios');

class Predict extends Component {
    state = {
        events: [],
        leftOpen: false,
        auth: false,
    }

    toggleSidebar = (event) => {
        let key = `${event.currentTarget.parentNode.id}Open`;
        this.setState({ [key]: !this.state[key] });
    }

    async componentDidMount() {
        const auth = await axios.get('http://localhost:5000/auth/check')
        if(auth) {
            this.setState({
                auth: true
            })
            const res = await axios.get('/apis/events')
            const events = res.data;
            this.setState({ events });
        } else {
            this.setState({
                auth: false
            })
        }
    };

    logout = () => {
        axios.get('/auth/logout');
        this.setState({
            auth: false
        })
    }

    render() {
        let leftOpen = this.state.leftOpen ? 'open' : 'closed';

        if (!this.state.auth) {
            return <Redirect to="/" />
        }

        return (
            
            <div className='Predict'>
                <div id="layout">
                    <div id='left' className={leftOpen} >
                        <div className='icon'
                            onClick={this.toggleSidebar} >
                            &equiv;
                        </div>
                        <div className={`sidebar ${leftOpen}`} >
                            <div className='header'>
                                <h3 className='title'>
                                    Navigation
                                </h3>
                            </div>
                            <div className='content'>
                                    <Link 
                                        to='/stats'
                                        className='button'
                                    ><h5>View Disasters<br/>And<br/>Their Statistics</h5>
                                    </Link> 
                                    <h5 
                                        className='current'
                                    >Predict Future<br/>Shockwave Radius</h5>              
                                    <Link 
                                        to='/analysis'
                                        className='button'
                                    ><h5>Analysis<br/>Process</h5>
                                    </Link>
                                    <h5     
                                        onClick={this.logout}
                                        className='button'
                                    >Sign Out</h5>
                            </div>
                        </div>
                    </div>
                    <div id='main'>
                        <div className="header">
                            <Link 
                                to='/'
                                className='button'
                            >
                                <h3 className={`
                                    title
                                    ${'left-' + leftOpen}
                                `}>
                                    Natural<br/>Disasters
                                </h3>
                            </Link>
                        </div>
                        <div className="content">
                            {this.state.events.length > 0?
                            <MapComp events={this.state.events} url={config.API2}/>
                            : 'Data is loading'
                            }
                        </div>
                    </div>                      
                </div>
            </div>
            
        )
    }
}

export default Predict;