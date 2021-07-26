import React from 'react';
import { useState } from 'react';
import { MapContainer, TileLayer, CircleMarker, Popup } from 'react-leaflet';
import Legend from './Legend';

const MapComp = (props) => {

    const [map, setMap] = useState(null);

    return (
            <MapContainer
                center={[30.033333, 31.233334]}
                zoom={4}
                style={{width: '100%', height: '80vh'}}
                whenCreated={setMap}
            >
                <TileLayer 
                    attribution='Map data &copy; <a href=&quot;https://www.openstreetmap.org/&quot;>OpenStreetMap</a> contributors, <a href=&quot;https://creativecommons.org/licenses/by-sa/2.0/&quot;>CC-BY-SA</a>, Imagery &copy; <a href=&quot;https://www.mapbox.com/&quot;>Mapbox</a>'
                    url={props.url}
                />
                {
                    props.events.map(event => {
                        if(event.mag) {
                            const point = [event.latitude, event.longitude]
                            let color = "";
                            if (event.mag <= 1) {
                                color = "#a3f600";
                            } else if (event.mag <= 2) {
                                color = "#dcf400";
                            } else if (event.mag <= 3) {
                                color = "#f7db11";
                            } else if (event.mag <= 4) {
                                color = "#fdb72a";
                            } else if (event.mag <= 5) {
                                color = "#fca35d";
                            } else {
                                color = "#ff5f65";
                            }
    
                            return (
                                <CircleMarker center={point}
                                fillColor= {color}
                                fillOpacity= {0.5}
                                color= {color}
                                radius= {event.depth/10} 
                                key={event.id} >
                                    <Popup>
                                        <span>Date: {event.day}/{event.month}/{event.year}</span>
                                        <br/>
                                        <span>Magnitude: {event.mag}</span>
                                        <br/>
                                        <span>Depth: {event.depth} </span>
                                        <br/>
                                    </Popup>
                                </CircleMarker>
                            )
                        }

                        return null;
                    })
                }
                <Legend map={map}/>
            </MapContainer>
    )
}

export default MapComp;