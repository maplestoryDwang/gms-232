function start() {
    if (cm.getPlayer().getEventInstance() != null) {
        cm.getPlayer().getEventInstance().unregisterPlayer(cm.getPlayer())
    }
    cm.warp(101030104);
    return true
};