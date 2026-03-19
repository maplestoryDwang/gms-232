function start() {
    var a = cm.getEventManager("KerningPQ").getInstance("KerningPQ");
    if (a.getProperty("1stageclear") == null) {
        cm.playerMessage(5, "The portal is blocked.")
    } else {
        cm.warp(910340200, "st00")
    }
};