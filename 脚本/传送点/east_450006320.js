function start() {
    if (cm.isQuestFinished(34265) && cm.getQuestStatus(34266) == 0) {
        cm.warp(450006330, 1, false)
    } else {
        cm.playerMessage(-1, "一扇奇怪的门。牢牢封锁住了。");
        cm.playerMessage(5, "一扇奇怪的门。牢牢封锁住了。")
    }
};