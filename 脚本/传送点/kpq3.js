function start() {
    var a = cm.getEventManager("KerningPQ").getInstance("KerningPQ");
    if (a.getProperty("3stageclear") == null) {
        cm.playerMessage(5, "The portal is blocked.")
    } else {
        cm.warp(910340400, "st00")
    }
};