// Initialize the map
const map = L.map("map").setView([-28.4793, 24.6727], 5); // Centered on South Africa

// Add OpenStreetMap tiles
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

// Add vehicle markers (simulated data)
const vehicles = [
  {
    id: "L-2456",
    lat: -26.2041,
    lng: 28.0473,
    status: "moving",
    destination: "Durban",
  }, // Johannesburg
  {
    id: "L-2458",
    lat: -33.9249,
    lng: 18.4241,
    status: "idle",
    destination: "Pretoria",
  }, // Cape Town
  {
    id: "L-2460",
    lat: -29.8579,
    lng: 31.0292,
    status: "moving",
    destination: "Bloemfontein",
  }, // Durban
  {
    id: "L-2462",
    lat: -25.7479,
    lng: 28.2293,
    status: "maintenance",
    destination: "Johannesburg",
  }, // Pretoria
];

const statusIcons = {
  moving: L.icon({
    iconUrl:
      "https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678111-map-marker-512.png",
    iconSize: [32, 32],
    iconAnchor: [16, 32],
  }),
  idle: L.icon({
    iconUrl:
      "https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678111-map-marker-512.png",
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    className: "idle-marker",
  }),
  maintenance: L.icon({
    iconUrl:
      "https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678111-map-marker-512.png",
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    className: "maintenance-marker",
  }),
};

// Add markers to the map
vehicles.forEach((vehicle) => {
  const marker = L.marker([vehicle.lat, vehicle.lng], {
    icon: statusIcons[vehicle.status],
  }).addTo(map);

  marker.bindPopup(`
                <b>Vehicle ${vehicle.id}</b><br>
                Status: ${vehicle.status}<br>
                Destination: ${vehicle.destination}
            `);
});

// Simulate route optimization
document.querySelector(".btn-success").addEventListener("click", function () {
  alert("Optimized route has been applied to the vehicle navigation system!");
});
