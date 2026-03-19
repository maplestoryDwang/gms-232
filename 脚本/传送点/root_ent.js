function start() {
    cm.updateInfoQuest(105200000, cm.getMapId());
    if (cm.isQuestFinished(30007)) {
        cm.warp(105200000, 0)
    } else {
        if (!cm.isQuestActive(30000) && !cm.isQuestFinished(30000)) {
            cm.playerMessage("这里看上去没通往任何地方。")
        } else {
            cm.warp(105010200, 0)
        }
    }
    return true
};