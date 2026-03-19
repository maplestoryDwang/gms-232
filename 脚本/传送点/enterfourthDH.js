function start() {
    if (cm.getQuestStatus(20611) == 1 || cm.getQuestStatus(20612) == 1 || cm.getQuestStatus(20613) == 1 || cm.getQuestStatus(20614) == 1 || cm.getQuestStatus(20615) == 1) {
        if (cm.getPlayerCount(913020300) == 0) {
            var a = cm.getMap(913020300);
            a.killAllMonsters(false);
            a.respawn(true);
            cm.warp(913020300, 0)
        } else {
            cm.playerMessage("Someone is already attempting to defeat the boss. Better come back later.")
        }
    } else {
        cm.playerMessage("Hall #4 is only available to those that are training for Level 110 skill.")
    }
};