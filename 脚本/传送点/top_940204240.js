function start() {
    var b = cm.getPortal().getId();
    var a = cm.getPortal().getName();
    cm.forceStartQuest(34761, "");
    cm.forceCompleteQuest(34761);
    cm.updateInfoQuest(34761, "col=1;exp=1");
    cm.gainExp(29002859);
    cm.warp(410000120, 0)
};