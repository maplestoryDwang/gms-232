function start() {
    if (cm.isQuestActive(22008)) {
        cm.warp(100030103, "west00")
    } else {
        cm.playerMessage("You cannot go to the Back Yard without a reason")
    }
    return true
};