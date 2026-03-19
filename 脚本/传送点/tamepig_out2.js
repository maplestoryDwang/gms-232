function start() {
    cm.getPlayer().removeAll(4031507);
    cm.getPlayer().removeAll(4031508);
    if (cm.getMap(923010000).getCharactersSize() < 1) {
        cm.getMap(923010000).resetFully()
    }
    cm.warp(230000003, "out00");
    return true
};