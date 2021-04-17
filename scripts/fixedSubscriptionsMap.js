function choroplethize(numberOfSubs) {
  return numberOfSubs > 58.2
    ? '#0c2c84'
    : numberOfSubs > 37.4
    ? '#225ea8'
    : numberOfSubs > 26.4
    ? '#1d91c0'
    : numberOfSubs > 15.9
    ? '#41b6c4'
    : numberOfSubs > 8.6
    ? '#7fcdbb'
    : numberOfSubs > 2.1
    ? '#c7e9b4'
    : numberOfSubs >= 0
    ? '#ffffcc'
    : // if datum not available
      '#edf8fb';
}

// Legend
var fixedSubscriptionsLegend = L.control({ position: 'topright' });

fixedSubscriptionsLegend.onAdd = function (mymap) {
  var div = L.DomUtil.create('div', 'info legend'),
    grades = [0, 2.2, 8.7, 16, 26.5, 37.5, 58.3],
    labels = ['Number of Fixed Telephones Subscriptions (per 100 people)'],
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
        (to ? ' - ' + to : ' - 113.2')
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
      layer.bindTooltip(
        'Country:   ' +
          feature.properties.name +
          '<br>Number of Fixed Telephone Subscriptions (per 100 people): ' +
          feature.properties.subscriptions_number_of
      );
    },
  });

  timelineControl = L.timelineSliderControl({
    formatOutput: function (date) {
      return new Date(date).toLocaleDateString();
    },
    enableKeyboardControls: true,
  });
  fixedSubscriptionsLegend.addTo(map);
  timeline.addTo(map);
  timelineControl.addTo(map);
  timelineControl.addTimelines(timeline);
}
