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
        if (status === a++) {
            cm.sendNextS_Bottom("汉斯说只要打开笔记本里想要复原的那一页就行……让我来看看……！")
        } else {
            if (status === a++) {
                cm.askMenuS_Bottom("要不要读一读？\r\n#b#L0#打开笔记本。#l\r\n#L1#以后再说吧。#l")
            } else {
                if (status === a++) {
                    if (selectionLog[2] == 0) {
                        cm.updateInfoQuest(59744, "map=" + cm.getMapId());
                        cm.forceStartQuest(59702, "");
                        cm.warp(867111000)
                    }
                    cm.dispose()
                } else {
                    if (status == a++) {
                        cm.dispose()
                    }
                }
            }
        }
    }
}

function end(d, c, b) {
    (d == 1) ? status++ : status--;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            cm.dispose()
        }
    }
};