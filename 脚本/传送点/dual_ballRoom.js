function start() {
    if (cm.getQuestStatus(2363) == 1 && !cm.haveItem(4032616)) {
        cm.gainItem(4032616, 1)
    }
};