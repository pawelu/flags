const L = require('leaflet');
const Draw = require('leaflet-draw');

require('leaflet/dist/leaflet.css');
require('leaflet-draw/dist/leaflet.draw.css');

class Dashboard {
  showMainMap() {
    var map = L.map('main_map').setView([50.06, 19.93], 15);

    var drawnItems = new L.FeatureGroup();
    map.addLayer(drawnItems);

    L.Icon.Default.imagePath = 'webpack/leaflet'

    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);


    var drawControl = new L.Control.Draw({
      draw: {
        position: 'topleft',
        polygon: {
          title: 'Draw a sexy polygon!',
          allowIntersection: false,
          drawError: {
            color: '#b00b00',
            timeout: 1000
          },
          shapeOptions: {
            color: '#bada55'
          },
          showArea: true
        },
        polyline: {
          metric: false
        },
        circle: {
          shapeOptions: {
            color: '#662d91'
          }
        }
      },
      edit: {
        featureGroup: drawnItems
      }
    });

    map.addControl(drawControl);

    map.on('draw:created', function (e) {
      var type = e.layerType,
        layer = e.layer;

      if (type === 'marker') {
        layer.bindPopup('A popup!');
      }

      var newGymJSON = JSON.stringify(layer.toGeoJSON());
      console.log(newGymJSON);


      drawnItems.addLayer(layer);
    });
  }
}

module.exports = Dashboard;
