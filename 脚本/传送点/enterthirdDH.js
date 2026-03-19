function start() {
    if (cm.getQuestStatus(20601) == 1 || cm.getQuestStatus(20602) == 1 || cm.getQuestStatus(20603) == 1 || cm.getQuestStatus(20604) == 1 || cm.getQuestStatus(20605) == 1) {
        if (cm.getPlayerCount(913010200) == 0) {
            var a = cm.getMap(913010200);
            a.killAllMonsters(false);
            a.respawn(true);
            cm.warp(913010200, 0)
        } else {
            cm.playerMessage("Someone is already attempting to defeat the boss. Better come back later.")
        }
    } else {
        cm.playerMessage("The only way to enter the hall #3 is if you're training for the Level 100 skills.")
    }
};