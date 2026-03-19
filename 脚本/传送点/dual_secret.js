function start() {
    if (cm.getQuestStatus(2369) == 1 && !cm.haveItem(4032617)) {
        cm.gainItem(4032617, 1)
    } else {
        cm.playerMessage("墙上的洞。")
    }
};