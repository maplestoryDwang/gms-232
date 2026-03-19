function start() {
    cm.warp(100040000, 0);
    if (cm.isQuestActive(22557)) {
        cm.forceCompleteQuest(22557);
        cm.playerMessage(1, "卡米拉获救了！回去告诉长老斯坦吧！");
        cm.getPlayer().gainSP(1)
    }
};