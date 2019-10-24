function wChill() {
    var temp = document.getElementById("hightemp").value;
    var speed = document.getElementById("wspeed").value;

    if(temp<50 AND speed>3) {
        var windChill = 35.74 + 0.6215*temp - 35.75*Math.pow(speed, 0.16) + 0.4275*temp*Math.pow(speed, 0.16);
        document.getElementById("windchill").innerHTML = windChill + "&#8457;";
    } else {
        document.getElementById("windchill").innerHTML = "N/A";
    }
}