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
            cm.forceStartQuest(34756, "");
            cm.sendNormalTalk_Bottom("#face0#完成了！", 36, 3002110, false, true);
            cm.gainItem(4036320, 1)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#好了！快把这种魔法肥料撒在树上！", 36, 3002110, true, true)
            } else {
                if (status === a++) {
                    cm.dispose()
                }
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
            cm.dispose();
            cm.warp(940204117, 0)
        }
    }
};