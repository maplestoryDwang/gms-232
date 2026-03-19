function start() {
    try {
        if (cm.haveItem(4031346)) {
            if (cm.getMapId() == 240010100) {
                cm.warp(101030100, "minar00")
            } else {
                cm.warp(240010100, "elli00")
            }
            cm.gainItem(4031346, -1);
            cm.playerMessage("The Magical Seed is spent and you are transferred to somewhere.");
            return true
        } else {
            cm.playerMessage("Magic Seed is needed to go through the portal.");
            return false
        }
    } catch (a) {
        cm.playerMessage("Error: " + a)
    }
};