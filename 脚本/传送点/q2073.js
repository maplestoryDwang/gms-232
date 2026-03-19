function start() {
    if (cm.getQuestStatus(2073) == 1) {
        cm.warp(900000000, 0);
        return true
    } else {
        cm.playerMessage(5, "神秘的力量阻止着你的前进...");
        return false
    }
};