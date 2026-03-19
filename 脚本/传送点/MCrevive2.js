function start() {
    if (cm.getPlayer().getCarnivalParty().getTeam() == 0) {
        cm.warp(cm.getMapId() - 100, "red_revive")
    } else {
        cm.warp(cm.getMapId() - 100, "blue_revive")
    }
};