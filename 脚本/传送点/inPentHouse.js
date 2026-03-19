function start() {
    var b = cm.getPortal().getId();
    var a = cm.getPortal().getName();
    if (!cm.isQuestFinished(34425)) {
        cm.playerMessage(5, "只有经过同意，才能前往顶层豪华套间。")
    } else {
        cm.warp(103041004, 0)
    }
};