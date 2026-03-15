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
            cm.updateInfoQuest(35550, "q1=35564");
            cm.updateInfoQuest(35550, "q1=35564;q2=35575");
            cm.updateInfoQuest(35550, "q1=35564;q2=35575;q3=35594");
            cm.sendNormalTalk("噢，你好啊，#ho#。我来分配点任务给你吧？", 0, 0, 0, 1)
        } else {
            if (status === a++) {
                cm.askAcceptDecline("今天要交给#ho#的事情如下。\r\n\r\n#b#e#y35564##k#n\r\n#b#e#y35575##k#n\r\n#b#e#y35594##k#n\r\n\r\n你要现在立刻执行吗？", 0, 0)
            } else {
                if (status === a++) {
                    cm.forceCompleteQuest(35550);
                    cm.updateInfoQuest(35550, "q1=35564;q2=35575;q3=35594;lastDate=20/06/21");
                    cm.forceStartQuest(35564, "");
                    cm.forceStartQuest(35575, "");
                    cm.forceStartQuest(35594, "");
                    cm.sendNormalTalk("任务完成后来找我就行。一定要在今晚子夜之前来找我。再见。", 0, 0, 0, 0);
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b %SCRIPT_PATH%#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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