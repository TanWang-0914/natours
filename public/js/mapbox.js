/* eslint-disable */

export const displayMap = (locations) => {
  mapboxgl.accessToken =
    'pk.eyJ1IjoidGFua3dhbmcwOTE0IiwiYSI6ImNrYmFoYWx5ZDBvMnozNW1kbTFkcWpnODIifQ.Qx5ZT2sfBjwNbR8oPSMd-w';

  var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/tankwang0914/ckbahu0l00jde1ilf7akbtzf4',
    scrollZoom: false,
    // center: [-118.113491, 34.111745],
    // zoom: 4,
    // interactive: true,
  });

  const bounds = new mapboxgl.LngLatBounds();

  locations.forEach((loc) => {
    // Create marker
    const el = document.createElement('div');
    el.className = 'marker';

    // Add marker
    new mapboxgl.Marker({
      element: el,
      anchor: 'bottom',
    })
      .setLngLat(loc.coordinates)
      .addTo(map);

    // Add popup
    new mapboxgl.Popup({
      offset: 30,
    })
      .setLngLat(loc.coordinates)
      .setHTML(`<p>Day ${loc.day}: ${loc.description}</p>`)
      .addTo(map);

    // Extend map bounds to include current location
    bounds.extend(loc.coordinates);
  });

  map.fitBounds(bounds, {
    padding: {
      top: 200,
      bottom: 150,
      left: 100,
      right: 100,
    },
  });
};
