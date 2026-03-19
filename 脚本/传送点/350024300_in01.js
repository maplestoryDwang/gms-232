function enter() {
    cm.openScriptNpc()
}
var status = -1;
var selectionLog = [];

function start() {
    action(1, 0, 0)
}

function action(f, d, c) {
    if (status == 0 && f == 0) {
        cm.dispose();
        return
    }(f == 1) ? status++ : status--;
    selectionLog[status] = c;
    var b = -1;
    if (status <= b++) {
        cm.dispose()
    } else {
        if (status === b++) {
            var e = cm.getNumberFromQuestInfo(33178, "r");
            var a = cm.getNumberFromQuestInfo(33178, "r1");
            if (e == 3) {
                cm.sendNormalTalk_Bottom("弗朗西斯好像逃到外面去了。快通过最左侧的门，到中央走廊看看吧。", 56, 0, false, false)
            } else {
                if (a == 1) {
                    cm.sendNormalTalk_Bottom("这个房间已经检查过了。", 56, 0, false, false)
                } else {
                    cm.addNumberForQuestInfo(33178, "r", 1);
                    cm.addNumberForQuestInfo(33178, "r1", 1);
                    cm.warp(350024400, 0)
                }
            }
            cm.dispose()
        }
    }
};