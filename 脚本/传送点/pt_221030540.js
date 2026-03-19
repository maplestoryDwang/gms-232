function start() {
    var b = cm.getPortal().getId();
    var a = cm.getPortal().getName();
    if (cm.isQuestActive(3484)) {
        cm.warp(221030550, 3)
    } else {
        cm.playerMessage(5, "戒备森严的UFO舱室，还是不要乱闯的好。")
    }
};