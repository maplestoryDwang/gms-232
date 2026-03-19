function start() {
    if (cm.getQuestStatus(6242) == 1 || cm.getQuestStatus(6243) == 1) {
        if (!cm.haveItem(4001114)) {
            if (cm.getPlayerCount(921100200) == 0) {
                cm.warp(921100210, 0);
                return true
            } else {
                cm.playerMessage("Other characters are on request. You can't enter.")
            }
        } else {
            cm.playerMessage("You don't have Freezer's Egg. You can't enter.")
        }
    } else {
        if (cm.getQuestStatus(6242) == 2 && cm.getQuestStatus(6243) == 0) {
            if (!cm.haveItem(4001114)) {
                cm.warp(921100210, 0);
                return true
            } else {
                cm.playerMessage("You don't have Freezer's Egg. You can't enter.")
            }
        } else {
            cm.playerMessage("You can't enter sealed place.")
        }
    }
    return false
};