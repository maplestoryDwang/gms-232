function start() {
    if (cm.getQuestStatus(20301) == 1 || cm.getQuestStatus(20302) == 1 || cm.getQuestStatus(20303) == 1 || cm.getQuestStatus(20304) == 1 || cm.getQuestStatus(20305) == 1) {
        if (cm.getPlayerCount(913002400) == 0) {
            if (cm.haveItem(4032179, 1)) {
                cm.removeNpc(913002400, 1104104);
                var a = cm.getMap(913002400);
                a.killAllMonsters(false);
                a.spawnNpc(1104104, new java.awt.Point(542, 88));
                cm.warp(913002400, 0)
            } else {
                cm.playerMessage("You do not have the Erev Search Warrent to do so, please get it from Nineheart.")
            }
        } else {
            cm.playerMessage("The forest is already being searched by someone else. Better come back later.")
        }
    } else {
        cm.warp(130020000, 10)
    }
};