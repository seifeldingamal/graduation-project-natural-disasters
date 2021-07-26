import React, { Component } from 'react';
import './Stats.css'
import { Link, Redirect } from 'react-router-dom';
import MapComp from '../components/MapComp';
import Dashboard from '../components/Dashboard';
const config = require('./config');

const axios = require('axios');

class Stats extends Component {

    state = {
        events: [],
        displayData: [],
        leftOpen: false,
        rightOpen: false,
        auth:true,
        filter: '',
    }

    toggleSidebar = (event) => {
        let key = `${event.currentTarget.parentNode.id}Open`;
        this.setState({ [key]: !this.state[key] });
    }

    handleChange = (e) => {
        const { events } = this.state
        const value = e.target.value;
        this.setState({
            filter: value
        })
        if (value === 'reset') {
            this.setState({
                displayData: events
            })
        } else {
            const res = events.filter((event) => event.year === parseInt(value))

            console.log(res);

            this.setState({
                displayData: res
            })
        }
    }

    async componentDidMount() {
        //const auth = await axios.get('http://localhost:5000/auth/check')
        //if(auth) {
        //    this.setState({
        //        auth: true
        //    })
            const res = await axios.get('/apis/events')
            const events = res.data;
            this.setState({ 
                events,
                displayData: events,
             });
        //} else {
        //    this.setState({
        //        auth: true
        //    })
        //}
    };

    render() {

        let leftOpen = this.state.leftOpen ? 'open' : 'closed';
        let rightOpen = this.state.rightOpen ? 'open' : 'closed';

        let yearStart = 2000;
        let yearEnd = 2021;
        let years = Array(yearEnd-yearStart+1).fill().map(() => yearStart++);

        if (!this.state.auth) {
            return <Redirect to="/" />
        }
        return (
            <div className="Stats">
                <div id="layout1">
                    <div id='left' className={leftOpen} >
                        <div className='icon1'
                            onClick={this.toggleSidebar} >
                            &equiv;
                        </div>
                        <div className={`sidebar ${leftOpen}`} >
                            <div className='header1'>
                                <h3 className='title1'>
                                    Navigation
                                </h3>
                            </div>
                            <div className='content1'>
                                <h5 
                                    className='current'
                                >View Disasters<br/>And<br/>Their Statistics</h5>
                                <Link 
                                    to='/predict'
                                    className='button1'
                                ><h5>Predict Future<br/>Shockwave Radius</h5></Link>                
                                <Link 
                                    to='/analysis'
                                    className='button1'
                                ><h5>Analysis<br/>Process</h5></Link>
                            </div>
                        </div>
                    </div>
                    <div id='main1'>
                        <div className="header1">
                            <Link to='/home'className='button1'>
                                <h3 className={`
                                    title1
                                    ${'left-' + leftOpen}
                                    ${'right-' + rightOpen}
                                `}>
                                    Natural<br/>Disasters
                                </h3>
                            </Link>
                        </div>
                        <div className="content1">
                            {this.state.events.length > 0?
                            <MapComp events={this.state.displayData} url={config.API} />
                            : 'Data is loading'
                            }
                            <div style={{width: '100%', height: '80vh'}}>
                                <h2>Dashboard</h2>
                                <div>
                                    <h3>Earthquakes Analysis</h3>
                                    <Dashboard url={'https://public.tableau.com/views/earthquakeAnalysis/Dashboard1'} />
                                </div>
                                <div>
                                    <h3>Earthquakes Damage Analysis</h3>
                                    <Dashboard url={'https://public.tableau.com/views/earthquakeDamageAnalysis/Dashboard1'} />
                                </div>
                            </div>
                        </div>
                    </div>        
                    <div id='right' className={rightOpen} >
                        <div className='icon1'
                            onClick={this.toggleSidebar} >
                            &equiv;
                        </div>
                        <div className={`sidebar ${rightOpen}`} >
                            <div className='header1'>
                                <h3 className='title1'>
                                Filter Data
                                </h3>
                            </div>
                            <div className='content1'>
                                <h3>Determine Period</h3>
                                <form className='form-select'>
                                    <select id="Period" onChange={this.handleChange} value={this.state.filter} >
                                        <option>Select Specificly</option>
                                        {years.map(item => (
                                            <option key={item} value={item}>{item}</option>
                                        ))}
                                        <option key='reset' value="reset">Reset</option>
                                    </select>
                                </form>
                            </div>
                        </div>                
                    </div>
                </div>
            </div>
        )
    }
}

export default Stats;
