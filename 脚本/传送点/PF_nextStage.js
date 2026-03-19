function start() {
    if (cm.getMap().getNumMonsters() == 0) {
        if (cm.getMapId() == 867201960) {
            cm.forceCompleteQuest(64089)
        }
        cm.warp(cm.getMapId() + 20, 0)
    } else {
        cm.sendNormalTalk_Bottom("#b(这里的怪物还没有清理干净。) ", 57, 0, false, true)
    }
};