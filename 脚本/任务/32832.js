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
            cm.sendNormalTalk_Bottom("写是写了，不过这真的能起作用吗？", 57, 1530507, false, true)
        } else {
            if (status === a++) {
                cm.forceCompleteQuest(32832);
                cm.forceCompleteQuest(32811);
                cm.dispose()
            }
        }
    }
}

function end(d, c, b) {
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
            cm.sendNormalTalk_Bottom("那就是这个世界的粉笔？真神奇！拿给我看看，给我！", 37, 1530030, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("……什么嘛？跟我们世界的没什么两样嘛？真让人失望。", 37, 1530030, true, true)
            } else {
                if (status === a++) {
                    cm.forceStartQuest(32810, "");
                    cm.forceCompleteQuest(32810);
                    cm.gainItem(4034151, -25);
                    cm.dispose()
                }
            }
        }
    }
};