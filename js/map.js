var url = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson"

d3.json(url, function(data) {
    createFeatures(data.features);
});

function createFeatures(data) {
    L.mapbox.accessToken = API_KEY;
    var map = L.mapbox.map('map')
        .setView([0, 0], 3)
        .addLayer(L.mapbox.styleLayer('mapbox://styles/mapbox/streets-v9'));


    //   make markers
    data.forEach(feature => {
        var mag = feature.properties.mag;

        var color = "";
        if (mag <= 1) {
            color = "green";
        } else if (mag <= 2) {
            color = "yellow";
        } else if (mag <= 3) {
            color = "#E59866";
        } else if (mag <= 4) {
            color = "orange";
        } else if (mag <= 5) {
            color = "#D35400";
        } else {
            color = "red";
        }

        L.circle([feature.geometry.coordinates[1],
            feature.geometry.coordinates[0]
        ], {
            fillColor: color,
            fillOpacity: 0.75,
            color: color,
            radius: mag * 10000
        }).bindPopup("<h3> Location: " + feature.properties.place + "<hr>Mag: " + mag + "</h3>").addTo(map);
    });

    // make legend
    var legend = L.control({position: 'bottomright'});

    legend.onAdd = function() {
        var div = L.DomUtil.create('div', 'info legend');
        var labels = ["0-1", "1-2", "2-3", "3-4", "4-5", "5+"];
        var colors = ["green", "yellow", "#E59866",
            "orange", "#D35400", "red"
        ];

        // loop through our density intervals and generate a label with a colored background for each interval
        for (var i = 0; i < colors.length; i++) {
            div.innerHTML +=
                '<li style="background-color:' + colors[i] + '">' + labels[i] + '</li>';
        }
        return div;
    }
    legend.addTo(map);
}
