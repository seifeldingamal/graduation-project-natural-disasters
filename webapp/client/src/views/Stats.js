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
                            <div class='tableauPlaceholder' id='viz1627161854970' style='position: relative'>
							<noscript>
							<a href='#'>
							<img alt='Dashboard 1 ' src='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;ea&#47;earthquakeAnalysis&#47;Dashboard1&#47;1_rss.png' style='border: none' />
							</a>
							</noscript>
							<object class='tableauViz'  style='display:none;'><param name='host_url' value='https%3A%2F%2Fpublic.tableau.com%2F' />
							<param name='embed_code_version' value='3' />
							<param name='site_root' value='' />
							<param name='name' value='earthquakeAnalysis&#47;Dashboard1' />
							<param name='tabs' value='no' />
							<param name='toolbar' value='yes' />
							<param name='static_image' value='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;ea&#47;earthquakeAnalysis&#47;Dashboard1&#47;1.png' /> 
							<param name='animate_transition' value='yes' /><param name='display_static_image' value='yes' /><param name='display_spinner' value='yes' />
							<param name='display_overlay' value='yes' />
							<param name='display_count' value='yes' />
							<param name='language' value='en-US' />
							</object>
							</div> 
							<script type='text/javascript'>    
							var divElement = document.getElementById('viz1627161854970'); 
							var vizElement = divElement.getElementsByTagName('object')[0]; 
							if ( divElement.offsetWidth > 800 )
								{ vizElement.style.width='1500px';vizElement.style.height='797px';}
							else if ( divElement.offsetWidth > 500 ) 
							{ vizElement.style.width='1500px';vizElement.style.height='797px';}
							else { vizElement.style.width='100%';vizElement.style.height='1327px';}
							var scriptElement = document.createElement('script');
							scriptElement.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';
							vizElement.parentNode.insertBefore(scriptElement, vizElement);
							</script>
						</div>
							
							
						<div>
							<div class='tableauPlaceholder' id='viz1627162058563' style='position: relative'>
							<noscript>
							<a href='#'>
							<img alt='Dashboard 1 ' src='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;DZ&#47;DZQR9JX7K&#47;1_rss.png' style='border: none' />
							</a>
							</noscript>
							<object class='tableauViz'  style='display:none;'><param name='host_url' value='https%3A%2F%2Fpublic.tableau.com%2F' />
							<param name='embed_code_version' value='3' />
							<param name='path' value='shared&#47;DZQR9JX7K' />
							<param name='toolbar' value='yes' />
							<param name='static_image' value='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;DZ&#47;DZQR9JX7K&#47;1.png' />
							<param name='animate_transition' value='yes' />
							<param name='display_static_image' value='yes' />
							<param name='display_spinner' value='yes' />
							<param name='display_overlay' value='yes' />
							<param name='display_count' value='yes' />
							<param name='language' value='en-US' />
							<param name='filter' value='publish=yes' />
							</object>
							</div>
							<script type='text/javascript'>
							var divElement = document.getElementById('viz1627162058563');
							var vizElement = divElement.getElementsByTagName('object')[0];
							if ( divElement.offsetWidth > 800 )
								{ vizElement.style.width='1466px';vizElement.style.height='795px';}
							else if ( divElement.offsetWidth > 500 )
								{ vizElement.style.width='1466px';vizElement.style.height='795px';}
							else { vizElement.style.width='100%';vizElement.style.height='1277px';}
							var scriptElement = document.createElement('script');
							scriptElement.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';
							vizElement.parentNode.insertBefore(scriptElement, vizElement);
							</script>
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
        )
    }
}

export default Stats;
