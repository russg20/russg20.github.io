var temp = parseInt(document.getElementById("hightemp").value);
var speed = parseInt(document.getElementById("wspeed").value);

function wChill() {
    
    if(temp<50 && speed>3) {
        var windChill = 35.74 + 0.6215*temp - 35.75*Math.pow(speed, 0.16) + 0.4275*temp*Math.pow(speed, 0.16);
        document.getElementById("windchill").innerHTML = windChill + " &#8457;";
    } else {
        document.getElementById("windchill").innerHTML = "N/A";
    }
}