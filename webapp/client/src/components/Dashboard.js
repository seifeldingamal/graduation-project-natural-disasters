
import React, { useEffect, useRef, useState } from "react";
const { tableau } = window;

const Dashboard = (props) => {

    const link = props.url;

    const [url] = useState(
        link
    );
    
    const ref = useRef(null);

    const initViz = () => {
        new tableau.Viz(ref.current, url, {
            device: 'desktop',
        });
    };

    useEffect(initViz, [url]);

    return (
        <div>
        <div ref={ref} />
        </div>
    );
}

export default Dashboard;