function enter() {
    cm.openScriptNpc()
}
var status = -1;
var selectionLog = [];

function start() {
    action(1, 0, 0)
}

function action(c, b, a) {
    status++;
    if (cm.isQuestActive(25000)) {
        action25000(c, b, a)
    } else {
        cm.dispose()
    }
}

function action25000(d, c, b) {
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status === a++) {
            cm.sendNormalTalk("穿过这个传送口，就是圣地……那里有很多骑士，所以一定要小心。让我发挥一下过去的实力吧，呵呵。", 17, 0, false, true)
        } else {
            if (status === a++) {
                cm.forceStartQuest(25003, "1");
                cm.dispose();
                cm.warp(915000300, 1, false)
            }
        }
    }
}

function action2(d, c, b) {
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status === a++) {}
    }
};