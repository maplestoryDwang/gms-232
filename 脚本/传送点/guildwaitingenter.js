function start() {
    if (cm.getEventInstance() == null) {
        cm.warp(101030104)
    } else {
        if (cm.getEventInstance().getProperty("canEnter") != null && cm.getEventInstance().getProperty("canEnter").equals("true")) {
            cm.warp(990000100)
        } else {
            cm.playerMessage("The portal is not open yet.");
            return false
        }
    }
    return true
};