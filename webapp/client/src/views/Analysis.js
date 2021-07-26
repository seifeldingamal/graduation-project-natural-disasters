import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import './Analysis.css';
import JupyterViewer from 'react-jupyter-notebook';
import nb from './data.json';
import axios from 'axios';

class Analysis extends Component {

    state = {
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
        } else {
            this.setState({
                auth: false
            })
        }
    };

    async logout(){
        await axios.get('/auth/logout');
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
            <div className='Analysis'>
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
                                    ><h5>View Disasters<br/>And<br/>Their Statistics</h5></Link>                
                                    <Link 
                                        to='/predict'
                                        className='button'
                                    ><h5>Predict Future<br/>Shockwave Radius</h5></Link>
                                    <h5 
                                        className='current'
                                    >Analysis<br/>Process</h5>
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
                                to='/home'
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
                            <JupyterViewer rawIpynb={nb}/>
                        </div>
                    </div>                
                </div>
            </div>
            
        )
    }
}

export default Analysis;