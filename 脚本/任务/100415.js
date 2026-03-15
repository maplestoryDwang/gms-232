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
            cm.dispose();
            if (!cm.getNowTimeString("yyMMdd").equals(cm.getStringFromQuestInfo(500885, "date"))) {
                cm.setStringForQuestInfo(100417, "date", cm.getNowTimeString("yyMMdd"));
                cm.setStringForQuestInfo(500885, "date", cm.getNowTimeString("yyMMdd"));
                cm.updateInfoQuest(500886, "s1=0;s2=0;s3=0");
                cm.updateInfoQuest(500887, "s4=0;s5=0;s6=0");
                cm.updateInfoQuest(500888, "s7=0;s8=0;s9=0");
                cm.updateInfoQuest(500889, "s1=0;s2=0;s3=0;s4=0;s5=0;s6=0;s7=0;s8=0;s9=0");
                cm.updateInfoQuest(500890, "s1=0;s2=0;s3=0;s4=0;s5=0;s6=0;s7=0;s8=0;s9=0");
                cm.updateInfoQuest(500904, "cName=0;CID=0");
                cm.setNumberForQuestInfo(500885, "state", 0);
                cm.setNumberForQuestInfo(500885, "current", 1);
                for (var a = 100418; a <= 100426; a++) {
                    cm.forceForfeitQuest(a)
                }
            }
            cm.openUI(1209)
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/100415.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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