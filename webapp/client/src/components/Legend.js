import { useEffect } from 'react';
import L from 'leaflet';
import './Legend.css';

function Legend({ map }) {  
    
    useEffect(() => {
        if (map){
            const legend = L.control({ position: "bottomright" });
            
            const getColor = mag => {
                var color = '';
                if (mag <= 1) {
                    color = "#a3f600";
                } else if (mag <= 2) {
                    color = "#dcf400";
                } else if (mag <= 3) {
                    color = "#f7db11";
                } else if (mag <= 4) {
                    color = "#fdb72a";
                } else if (mag <= 5) {
                    color = "#fca35d";
                } else {
                    color = "#ff5f65";
                }
                return color
              };

            legend.onAdd = () =>{
                const div = L.DomUtil.create("div", "info legend");
                const mag = [0,1,2,3,4,5];
                let labels = [];
                let from;
                let to;
        
                // loop through our density intervals and generate a label with a colored background for each interval
                for (let i = 0; i < mag.length; i++) {
                    from = mag[i];
                    to = mag[i + 1];

                    labels.push(
                      '<i style="background:' +
                        getColor(from + 1) +
                        '"></i> ' +
                        from +
                        (to ? "&ndash;" + to : "+")
                    );
                  }
                  div.innerHTML = labels.join("<br>");
                  return div;
            }
            legend.addTo(map);
        }
    },[map]);
    return null
}

export default Legend