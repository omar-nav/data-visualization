var mymap = L.map('mapid').setView([0, -16], 2.5);

L.tileLayer('https://c.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution:
    'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
  maxZoom: 18,
}).addTo(mymap);

// global function to add commas
const numberWithCommas = (from) => {
  return from.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

function choroplethizeWhatsAppUsers2019(d) {
  return d > 99
    ? '#045a8d'
    : d > 60
    ? '#2b8cbe'
    : d > 44
    ? '#74a9cf'
    : d > 28
    ? '#bdc9e1'
    : d > 0
    ? '#f1eef6'
    : // if not available
      '#cccccc';
}

function styleWhatsAppUsers(feature) {
  return {
    weight: 0.75,
    opacity: 0.5,
    color: 'grey',
    dashArray: '0',
    fillOpacity: 0.9,
    fillColor: choroplethizeWhatsAppUsers2019(feature.properties.USERS_2019),
  };
}

function geojsonPopupWhatsAppUsers2019(feature, layer) {
  if (feature.properties.COUNTRY) {
    return layer.bindPopup(
      'Country:   ' +
        feature.properties.COUNTRY +
        '<br>2019 Whatsapp Users (Millions): ' +
        feature.properties.USERS_2019
    );
  }
}

var WhatsAppUsers2019Layer = L.geoJSON(countries, {
  style: styleWhatsAppUsers,
  onEachFeature: geojsonPopupWhatsAppUsers2019,
  pointToLayer: function (feature, latlng) {
    return L.marker(latlng);
  },
});

// Draw map
WhatsAppUsers2019Layer.addTo(mymap);
var featureLayers = {
  'Top 10 Countries, Ranked by WhatsApp Users, 2019 (Millions) ': WhatsAppUsers2019Layer,
};
var geojson = L.control
  .layers(featureLayers, null, {
    collapsed: false,
  })
  .addTo(mymap);

// Legend
var WhatsAppUsers2019Legend = L.control({ position: 'bottomright' });

WhatsAppUsers2019Legend.onAdd = function (mymap) {
  var div = L.DomUtil.create('div', 'info legend'),
    grades = [0, 28, 44, 60, 99],
    labels = ['2019 Whatsapp Users (Millions)'],
    from,
    to;
  for (var i = 0; i < grades.length; i++) {
    from = grades[i];
    to = grades[i + 1];
    labels.push(
      '<i style="background:' +
        choroplethizeWhatsAppUsers2019(from + 1) +
        '"></i> ' +
        from +
        (to ? ' - ' + to : ' - 340')
    );
  }
  div.innerHTML = labels.join('<br>');
  return div;
};

WhatsAppUsers2019Legend.addTo(mymap);
let currentLegend = WhatsAppUsers2019Legend;

// Legend Box
mymap.on('baselayerchange', function (eventLayer) {
  if (eventLayer.name === '2019 Whatsapp Users') {
    mymap.removeControl(currentLegend);
    currentLegend = WhatsAppUsers2019Legend;
    WhatsAppUsers2019Legend.addTo(mymap);
  }
});
