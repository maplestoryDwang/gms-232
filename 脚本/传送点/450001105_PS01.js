function start() {
    if (cm.getQuestStatus(34108) == 0) {
        cm.playerMessage(-1, "先听听卡奥怎么说。");
        cm.playerMessage(5, "先听听卡奥怎么说。")
    } else {
        cm.warp(450001107, 0)
    }
};