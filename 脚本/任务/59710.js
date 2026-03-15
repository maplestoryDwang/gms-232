var status = -1;
var selectionLog = [];

function start() {
    action(1, 0, 0)
}

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
            cm.setInGameDirectionMode(false, false, false);
            cm.askMenuS_Bottom("汉斯说打开笔记本上想复原的那一页就行……要不要打开笔记本看看呢？\r\n#b#L0#1. 打开笔记本。#l\r\n#L1#2. 以后再说吧。#l")
        } else {
            if (status === a++) {
                if (b == 1) {
                    cm.dispose();
                    return
                }
                cm.updateInfoQuest(59744, "map=" + cm.getMapId());
                cm.forceStartQuest(59710, "");
                cm.warp(867111007);
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
            cm.updateInfoQuest(59744, "map=" + cm.getMapId());
            cm.warp(867111006);
            cm.dispose()
        }
    }
};