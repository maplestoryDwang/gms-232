function start() {
    if (cm.getQuestStatus(20301) == 1 || cm.getQuestStatus(20302) == 1 || cm.getQuestStatus(20303) == 1 || cm.getQuestStatus(20304) == 1 || cm.getQuestStatus(20305) == 1) {
        if (cm.getPlayerCount(913002300) == 0) {
            if (cm.haveItem(4032179, 1)) {
                cm.removeNpc(913002300, 1104103);
                var a = cm.getMap(913002300);
                a.killAllMonsters(false);
                a.spawnNpc(1104103, new java.awt.Point(-1766, 88));
                cm.warp(913002300, 0)
            } else {
                cm.playerMessage("You do not have the Erev Search Warrent to do so, please get it from Nineheart.")
            }
        } else {
            cm.playerMessage("The forest is already being searched by someone else. Better come back later.")
        }
    } else {
        cm.warp(130010120, "out00")
    }
};