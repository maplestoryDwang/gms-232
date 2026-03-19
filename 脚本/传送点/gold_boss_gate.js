function start() {
    var b = cm.getPortal().getId();
    var a = cm.getPortal().getName();
    if (cm.getQuestStatus(3861) > 0) {
        cm.warp(252020700, 2)
    } else {
        cm.playerMessage(-1, "现在还不能通过这道门。")
    }
};