import { FlightsCenter } from "./WillItFly/modules/FligtsCenter/FlightsCenter";

const flightsCenter = FlightsCenter.getInstance();
flightsCenter.addPlane(10000, {
  economicClass: 4,
  bussinessClass: 1,
  firstClass: 0,
});
flightsCenter.addPassenger("economic", 1);
flightsCenter.addPassenger("economic", 1);
flightsCenter.addPassenger("economic", 1);
flightsCenter.addPassenger("economic", 1);
flightsCenter.addFlight(
  flightsCenter.planes[0],
  [
    flightsCenter.passengers[0],
    flightsCenter.passengers[1],
    flightsCenter.passengers[2],
    flightsCenter.passengers[3],
  ],
  "storm",
  "Wawa",
  "Paris",
  1000
);

console.log(flightsCenter);
