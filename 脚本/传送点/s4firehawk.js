function start() {
    if (cm.getQuestStatus(6240) == 1 || cm.getQuestStatus(6241) == 1) {
        if (!cm.haveItem(4001113)) {
            if (cm.getPlayerCount(921100200) == 0) {
                cm.warp(921100200, 0);
                return true
            } else {
                cm.playerMessage("Other characters are on request. You can't enter.")
            }
        } else {
            cm.playerMessage("You already have Phoenix's egg. You can't enter.")
        }
    } else {
        if (cm.getQuestStatus(6240) == 2 && cm.getQuestStatus(6241) == 0) {
            if (!cm.haveItem(4001113)) {
                cm.warp(921100200, 0);
                return true
            } else {
                cm.playerMessage("You already have Phoenix's egg. You can't enter.")
            }
        } else {
            cm.playerMessage("You can't enter sealed place.")
        }
    }
    return false
};