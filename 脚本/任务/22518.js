var status = -1;

function start(c, b, a) {
    cm.sendNext("Please eliminate 100 Spores.");
    cm.forceStartQuest();
    cm.dispose()
}

function end(c, b, a) {
    if (!cm.canHold(2000004, 20) || !cm.canHold(2000002, 20) || !cm.canHold(4032457, 1)) {
        cm.sendNext("Please make use/etc space.");
        cm.dispose();
        return
    }
    cm.gainItem(4032457, 1);
    cm.gainItem(2000004, 20);
    cm.gainItem(2000002, 20);
    cm.getPlayer().gainSP(1, 0);
    cm.gainExp(520);
    cm.forceCompleteQuest();
    cm.dispose()
};