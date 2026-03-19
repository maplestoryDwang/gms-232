function start() {
    var a = cm.getEventManager("KerningPQ").getInstance("KerningPQ");
    if (a.getProperty("4stageclear") == null) {
        cm.playerMessage(5, "The portal is blocked.")
    } else {
        cm.warp(910340500, "st00")
    }
};