function start() {
    var b = 0;
    if (cm.getQuestStatus(20774) == 1) {
        b = 913070330
    } else {
        if (cm.getQuestStatus(20775) == 1 || cm.getQuestStatus(20776) == 1) {
            b = 913070340
        }
    }
    if (b > 0) {
        if (cm.getPlayerCount(b) == 0) {
            var a = cm.getMap(b);
            a.resetFully();
            a.respawn(true);
            cm.warp(b, 0)
        } else {
            cm.playerMessage(5, "地图上已经有人了。");
            cm.playerMessage(-1, "地图上已经有人了。")
        }
    } else {
        cm.playerMessage(5, "只向接受了任务的骑士们开放。");
        cm.playerMessage(-1, "只向接受了任务的骑士们开放。")
    }
};