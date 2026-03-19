function start() {
    if (cm.haveItem(4001094)) {
        if (cm.getQuestStatus(3706) > 0) {
            if (cm.getPlayerCount(240040611) == 0) {
                cm.removeNpc(240040611, 2081008);
                cm.resetMap(240040611);
                cm.warp(240040611, "sp")
            } else {
                cm.playerMessage(5, "Someone else is already inside in an attempt to complete the quest. Please try again later.")
            }
        } else {
            cm.playerMessage(5, "You do not have the quest started. Please try again later.")
        }
    } else {
        cm.playerMessage(5, "In order to enter the premise, you'll need to have the Nine Spirit's Egg in possession.")
    }
};