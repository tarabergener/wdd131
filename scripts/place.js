const temp = 75
const wind = 7

let velocity = wind * 0.7;
let windChill = temp - velocity;

document.querySelector("#windChill").innerHTML = windChill.toFixed(2) + '&deg;F';

document.querySelector("#temp").innerHTML = temp + "&degF";
document.querySelector("#wind").innerHTML = wind + "km/h";