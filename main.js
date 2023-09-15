window.setInterval(ut, 1000);

function ut() {
    var clock = new Date();
    document.getElementById("tempo").innerHTML = clock.toLocaleTimeString();
    document.getElementById("data").innerHTML = clock.toLocaleDateString();
}