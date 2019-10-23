var currdt = new Date();
var dayOpt = {weekday: 'long'};
var weekday = currdt.toLocaleDateString('en-US', dayOpt);
var monthOpt = {month: 'long'};
var month = currdt.toLocaleDateString('en-US', monthOpt);
var day = currdt.getDate();
var yr = currdt.getFullYear();
document.getElementById("localDate").innerHTML = weekday + ", " + day + " " + month + " " + yr;