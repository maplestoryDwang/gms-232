function start() {
    if (cm.getPlayer().getCarnivalParty().getTeam() == 0) {
        cm.warp(cm.getMapId() - 1, "red_revive")
    } else {
        cm.warp(cm.getMapId() - 1, "blue_revive")
    }
};