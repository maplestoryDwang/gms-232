function start() {
    if (cm.getQuestStatus(31146) > 0) {
        cm.warp(271030410, 0)
    } else {
        cm.playerMessage(5, "现在无法进入秘密庭院。")
    }
};