function start() {
    if (cm.getPlayer().getParty() != null && cm.getMap().getNumMonsters() == 0 && cm.isLeader() && cm.getPlayer().getMapId() != 745010500) {
        cm.warpParty(cm.getPlayer().getMapId() + 100)
    } else {
        if (cm.getPlayer().getParty() != null && cm.getMap().getNumMonsters() == 0 && cm.isLeader() && cm.getPlayer().getMapId() == 745010500) {
            cm.openNpc(9330231, 1)
        } else {
            cm.playerMessage(5, "璇风‘璁ゅ????板?炬????杩?瀛??ㄦ???╋?")
        }
    }
};