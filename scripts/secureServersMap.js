function choroplethize(numberOfServers) {
  return numberOfServers > 276768
    ? '#7a0177'
    : numberOfServers > 97481
    ? '#ae017e'
    : numberOfServers > 52631
    ? '#dd3497'
    : numberOfServers > 30332
    ? '#f768a1'
    : numberOfServers > 14771
    ? '#fa9fb5'
    : numberOfServers > 3687
    ? '#fcc5c0'
    : numberOfServers >= 0
    ? '#feebe2'
    : // if datum not available
      '#edf8fb';
}

// global function to add commas
const numberWithCommas = (from) => {
  from += '';
  var x = from.split('.');
  var x1 = x[0];
  var x2 = x.length > 1 ? '.' + x[1] : '';
  var rgx = /(\d+)(\d{3})/;
  while (rgx.test(x1)) {
    x1 = x1.replace(rgx, '$1' + ',' + '$2');
  }
  var x3 = x1 + x2;

  return x3;
};

// Legend
var numberOfServersLegend = L.control({ position: 'topright' });

numberOfServersLegend.onAdd = function (mymap) {
  var div = L.DomUtil.create('div', 'info legend'),
    grades = [0, 3688, 14772, 30333, 52632, 97482, 276769],
    labels = ['Number of Secure Internet Servers (per million people)'],
    from,
    to;
  for (var i = 0; i < grades.length; i++) {
    from = grades[i];
    to = grades[i + 1];
    labels.push(
      '<i style="background:' +
        choroplethize(from + 1) +
        '"></i> ' +
        numberWithCommas(from) +
        (to ? ' - ' + numberWithCommas(to) : ' - 746,933')
    );
  }
  div.innerHTML = labels.join('<br>');
  return div;
};

var osmUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
var osmAttrib =
  '&copy; <a href="https://openstreetmap.org/copyright">OpenStreetMap</a> contributors';
var osm = L.tileLayer(osmUrl, { maxZoom: 18, attribution: osmAttrib });
var map = L.map('map', {
  layers: [osm],
  center: new L.LatLng(0, -16),
  zoom: 2.5,
});
var timeline;
var timelineControl;

function onLoadData(data) {
  timeline = L.timeline(data, {
    style: function (data) {
      return {
        stroke: false,
        color: choroplethize(data.properties.servers_number_of),
        fillOpacity: 0.5,
      };
    },
    waitToUpdateMap: true,
    onEachFeature: function (feature, layer) {
      var roundedNumber = Math.round(
        feature.properties.servers_number_of
      ).toFixed(0);
      layer.bindTooltip(
        'Country:   ' +
          feature.properties.name +
          '<br>Number of Secure Internet Servers (per million people): ' +
          numberWithCommas(roundedNumber)
      );
    },
  });

  timelineControl = L.timelineSliderControl({
    formatOutput: function (date) {
      return new Date(date).toLocaleDateString();
    },
    enableKeyboardControls: true,
  });
  numberOfServersLegend.addTo(map);
  timeline.addTo(map);
  timelineControl.addTo(map);
  timelineControl.addTimelines(timeline);
}
