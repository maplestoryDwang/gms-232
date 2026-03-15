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
                cm.forceStartQuest(59704, "");
                cm.warp(867111002);
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
            var e = cm.getQuest();
            cm.askYesNo("这个任务的结束脚本还没有修复哦。它的脚本位于： #b /脚本/任务/#e" + e + "#n.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻完成这个任务吗？")
        } else {
            if (status == a++) {
                cm.forceCompleteQuest();
                cm.dispose()
            }
        }
    }
};