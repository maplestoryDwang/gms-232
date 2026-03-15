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
            cm.askMenu_Bottom("#face2#如果你有时间，要不要和我一起去广场？我可以给你介绍一下其他邻居！\r\n#L0##b好的。#l\r\n#L1#今天很忙。#l", 37, 9400921)
        } else {
            if (status === a++) {
                if (b == 0) {
                    cm.OnStartNavigation(cm.getMapId(), 0, "out00", 0);
                    cm.forceStartQuest(64595, "");
                    cm.sendNormalTalk_Bottom("#face2#好极了，那你就跟我来吧！", 37, 9400921, false, true)
                } else {
                    cm.sendNormalTalk_Bottom("#face2#没关系，等你什么时候有空了再来吧！", 37, 9400921, false, true)
                }
                cm.dispose()
            } else {
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