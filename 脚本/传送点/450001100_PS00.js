function start() {
    if (cm.isQuestFinished(34114) && !cm.isQuestFinished(34115)) {
        cm.warp(450001370, 0)
    } else {
        if (cm.isQuestFinished(34115)) {
            cm.warp(450001200, 2)
        } else {
            cm.playerMessage(-1, "看上去没法再往前通过了。");
            cm.playerMessage(5, "看上去没法再往前通过了。")
        }
    }
};