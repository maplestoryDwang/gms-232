function start() {
    var b = cm.getPortal().getId();
    var a = cm.getPortal().getName();
    if (cm.getQuestStatus(62005) == 1) {
        cm.warp(701210161, 0)
    } else {
        cm.warp(701210160, 0)
    }
};