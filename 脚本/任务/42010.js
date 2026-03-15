var status = -1;
var selectionLog = [];

function start(d, c, b) {
    if (status == 0 && d == 0) {
        cm.dispose();
        return
    }(d == 1) ? status++ : status--;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            cm.askAcceptDecline("#b#h0##k。现在，我要告诉你去起源之塔探险的方法。你准备好了吗？", 0, 2540000)
        } else {
            if (status === a++) {
                cm.forceStartQuest(42010, "");
                cm.dispose();
                cm.warp(992000080, 0)
            }
        }
    }
}

function end(c, b, a) {
    cm.forceCompleteQuest();
    cm.dispose()
};