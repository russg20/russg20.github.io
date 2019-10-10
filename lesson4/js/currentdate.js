var currdt = new Date();
var options = {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    year: 'numeric'
}
document.getElementById("localDate").innerHTML = currdt.toLocaleDateString('en-US', options);
