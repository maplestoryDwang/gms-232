function start() {
    if (cm.isQuestFinished(34562) || cm.isQuestActive(34562)) {
        cm.warp(450007000, 0)
    } else {
        cm.playerMessage(-1, "散发着诡异气息的门。现在还不是探索的时候。");
        cm.playerMessage(5, "散发着诡异气息的门。现在还不是探索的时候。")
    }
};