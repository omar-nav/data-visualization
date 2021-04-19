function choroplethize(numberOfSubs) {
  return numberOfSubs > 200
    ? '#0c2c84'
    : numberOfSubs > 146
    ? '#225ea8'
    : numberOfSubs > 122
    ? '#1d91c0'
    : numberOfSubs > 96
    ? '#41b6c4'
    : numberOfSubs > 67
    ? '#7fcdbb'
    : numberOfSubs > 19
    ? '#c7e9b4'
    : numberOfSubs >= 0
    ? '#ffffcc'
    : // if datum not available
      '#cccccc';
}

// Legend
var cellSubscriptionsLegend = L.control({ position: 'topright' });

cellSubscriptionsLegend.onAdd = function (mymap) {
  var div = L.DomUtil.create('div', 'info legend'),
    grades = [0, 20, 68, 97, 123, 147, 201],
    labels = ['Number of Mobile Cell Subscriptions (per 100 people)'],
    from,
    to;
  for (var i = 0; i < grades.length; i++) {
    from = grades[i];
    to = grades[i + 1];
    labels.push(
      '<i style="background:' +
        choroplethize(from + 1) +
        '"></i> ' +
        from +
        (to ? ' - ' + to : ' - 289')
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
        color: choroplethize(data.properties.subscriptions_number_of),
        fillOpacity: 0.5,
      };
    },
    waitToUpdateMap: true,
    onEachFeature: function (feature, layer) {
      var roundedNumber = Math.round(
        feature.properties.subscriptions_number_of
      ).toFixed(0);
      layer.bindTooltip(
        'Country:   ' +
          feature.properties.name +
          '<br>Number of Mobile Cell Subscriptions (per 100 people): ' +
          roundedNumber
      );
    },
  });

  timelineControl = L.timelineSliderControl({
    formatOutput: function (date) {
      return new Date(date).toLocaleDateString();
    },
    enableKeyboardControls: true,
  });
  cellSubscriptionsLegend.addTo(map);
  timeline.addTo(map);
  timelineControl.addTo(map);
  timelineControl.addTimelines(timeline);
}
