importPackage(Packages.server.maps);

function start() {
    var a = cm.getPlayer().getEventInstance();
    var b = a.getMapInstance(103000801);
    if (a.getProperty("1stageclear") != null) {
        cm.getPlayer().changeMap(b, b.getPortal("st00"));
        return true
    } else {
        cm.playerMessage("The warp is currently unavailable.");
        return false
    }
};