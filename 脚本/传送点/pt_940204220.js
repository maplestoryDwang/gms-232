function start() {
    var e = cm.getPortal().getId();
    var b = cm.getPortal().getName();
    var d = cm.getEventInstance();
    var c = d.getEventManager();
    var a = c.getNumberProperty("clear");
    if (a > 0) {
        cm.warp(940204108, 0);
        cm.forceStartQuest(34760, "");
        cm.forceCompleteQuest(34760);
        cm.gainExp(48338098);
        cm.updateInfoQuest(34760, "exp=1")
    } else {
        cm.getTopMsgFont("必须消灭掉区域内的所有怪物，才能移动到下一地区。", 3, 20, 4, 0);
        cm.playerMessage(5, "请消灭掉区域内的所有怪物。")
    }
};