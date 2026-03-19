function start() {
    var a = cm.getEventManager("KyrinTrainingGroundC");
    if (a == null) {
        cm.warp(120000101, 0)
    } else {
        if (a.getInstance("KyrinTrainingGroundC").getTimeLeft() < 120000) {
            cm.warp(912010200, 0)
        } else {
            cm.playerMessage("Please endure Kyrin's attack for a little while more!");
            return false
        }
    }
    return true
};