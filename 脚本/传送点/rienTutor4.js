function start() {
    if (cm.getQuestStatus(21013) == 2) {
        cm.warp(140090500, 1)
    } else {
        cm.playerMessage(5, "你必须完成任务后，才能进入下一个地图！")
    }
};