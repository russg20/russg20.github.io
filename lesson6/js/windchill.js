
function wChill() {
    var temp = document.getElementById("hightemp").value;
        console.log("temp=" + temp);
    var speed = document.getElementById("wspeed").value;
        console.log("speed=" + speed);

    if(temp<50 && speed>3) {
        var windChill = 35.74 + 0.6215*temp - 35.75*Math.pow(speed, 0.16) + 0.4275*temp*Math.pow(speed, 0.16);
            console.log("windChill=" + windChill);
        document.getElementById("windchill").innerHTML = windChill + " &#8457;";
    } else {
        document.getElementById("windchill").innerHTML = "N/A";
    }
}