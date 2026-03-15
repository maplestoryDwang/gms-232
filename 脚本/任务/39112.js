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
            var e = cm.getQuest();
            cm.askYesNo("这个任务的开始脚本还没有修复哦。它的脚本位于： #b 脚本/任务/39112.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
        } else {
            if (status == a++) {
                cm.forceStartQuest();
                cm.dispose()
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/39112.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.forceCompleteQuest();
            cm.forceForfeitQuest();
            cm.updateInfoQuest(39112, "");
            cm.gainExp(50000000);
            if (cm.getNumberFromQuestInfo(39200, "3q") == 1) {
                cm.setNumberForQuestInfo(39200, "4q", 1)
            } else {
                if (cm.getNumberFromQuestInfo(39200, "5q") == 1) {
                    cm.setNumberForQuestInfo(39200, "6q", 1)
                } else {
                    if (cm.getNumberFromQuestInfo(39200, "7q") == 1) {
                        cm.setNumberForQuestInfo(39200, "8q", 1)
                    }
                }
            }
            cm.addNumberForQuestInfo(39100, "FC", 1);
            cm.sendNormalTalk("感谢你消灭了#o8250004#。\r\n现在侦察工作应该会简单很多。\r\n这个委托可不是人人都能完成的，你真了不起！\r\n以后还要麻烦你多多帮忙，小软柿。", 0, 2155106, false, true)
        } else {
            if (status === a++) {
                cm.getTopMsgFont("获得了50000000经验值", 3, 20, 20, 0, 0);
                cm.dispose()
            }
        }
    }
};