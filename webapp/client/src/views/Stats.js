import React, { Component } from 'react';
import './Stats.css'
import { Link } from 'react-router-dom';
import MapComp from '../components/MapComp';

const axios = require('axios');

class Stats extends Component {

    state = {
        events: [],
        leftOpen: false,
        rightOpen: false,
    }

    toggleSidebar = (event) => {
        let key = `${event.currentTarget.parentNode.id}Open`;
        this.setState({ [key]: !this.state[key] });
    }

    async componentDidMount() {
        const res = await axios.get('http://localhost:5000/api/events')
        const events = res.data;
        this.setState({ events });
        console.log(this.state.events);
    };

    render() {
        let leftOpen = this.state.leftOpen ? 'open' : 'closed';
        let rightOpen = this.state.rightOpen ? 'open' : 'closed';
        
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
                            <Link to='/'className='button1'>
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
                            <MapComp events={this.state.events} />
                            : 'Data is loading'
                            }
                            <div>
                                <figure>
                                    <img src="Graph_of_largest_earthquakes_1906-2005.png" alt="Circular Sector"/>
                                    <figcaption>Graph of largest earthquakes at the period<br/>(1906-2005)</figcaption>
                                </figure>
                                <figure>
                                    <img src="unnamed.gif" alt="Histogram"/>
                                    <figcaption>Number of Earthquakes by Year</figcaption>
                                </figure>
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
                                <form className='form-input'>
                                    <input type="radio" id="RD1" name="Period" value="last 30 Days"/>
                                    <label htmlFor="RD1">last 30 Days</label><br/>
                                    <input type="radio" id="RD2" name="Period" value="last 3 Months"/>
                                    <label htmlFor="RD1">last 3 Months</label><br/>
                                    <input type="radio" id="RD3" name="Period" value="last 3 Years"/>
                                    <label htmlFor="RD1">last 3 Years</label><br/>
                                </form>
                                <br/>
                                <form className='form-select'>
                                    <select id="Period">
                                        <option>Select Specificly</option>
                                        <option value="1980 - 1990">1980 - 1990</option>
                                        <option value="1990 - 2000">1990 - 2000</option>
                                        <option value="2000 - 2010">2000 - 2010</option>
                                        <option value="2010 - 2020">2010 - 2020</option>
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
