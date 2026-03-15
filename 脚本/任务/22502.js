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
            cm.askAcceptDecline("可能和蜥蜴一样，可以喂它吃#b#t4032452##k。这里有很多#b草垛#k，你可以喂给它试试。如果不吃的话，就再看看吃不吃别的。", 0, 1013103)
        } else {
            if (status === a++) {
                cm.forceStartQuest(22502, "");
                cm.onScriptMessage_显示教程引导图片(["UI/tutorial/evan/12/0"])
            } else {
                if (status === a++) {
                    cm.getMap().spawnReactorIfNotExist(1002008, 0, 824, -650, 0, "");
                    cm.getMap().spawnReactorIfNotExist(1002008, 0, 733, -647, 0, "");
                    cm.getMap().spawnReactorIfNotExist(1002008, 0, 640, -648, 0, "");
                    cm.getMap().spawnReactorIfNotExist(1002008, 0, 549, -647, 0, "");
                    cm.getMap().spawnReactorIfNotExist(1002008, 0, 460, -649, 0, "");
                    cm.updateInfoQuest(56551, "PICK=15");
                    cm.updateInfoQuest(56552, "MOB=64");
                    cm.dispose()
                }
            }
        }
    }
}

function stage0(d, c, b) {
    if (status == 0 && d == 0) {
        cm.dispose();
        return
    }
    status++;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            var e = cm.getQuest();
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/22502.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
        } else {
            if (status == a++) {
                cm.forceStartQuest();
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