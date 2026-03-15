var status = -1;
var selectionLog = [];

function start(j, l, n) {
    if (status == 0 && j == 0) {
        cm.dispose();
        return
    }(j == 1) ? status++ : status--;
    selectionLog[status] = n;
    var d = -1;
    if (status <= d++) {
        cm.dispose()
    } else {
        if (status == d++) {
            if (!(cm.getNowTimeString(3).equals(cm.getStringFromQuestInfo(64789, "lastDay")))) {
                cm.setStringForQuestInfo(64789, "lastDay", cm.getNowTimeString(3));
                var c = cm.getNumberFromQuestInfo(64753, "rank");
                var b = 65363,
                    m = c >= 13 ? 65381 : c >= 10 ? 65377 : c >= 7 ? 65373 : c >= 4 ? 65370 : 65367,
                    g = 3;
                var f = cm.randArray(b, m, g);
                for (var d = 1; d <= g; d++) {
                    cm.setNumberForQuestInfo(64789, "q" + d, f[d - 1])
                }
            }
            var k = cm.getNumberFromQuestInfo(64789, "q1");
            var h = cm.getNumberFromQuestInfo(64789, "q2");
            var e = cm.getNumberFromQuestInfo(64789, "q3");
            var o = "#b#e[调查任务] #k#n\r\n今天的调查任务如下，接受任务，训练你的远征队吧。\r\n                                          - 芽芽- \n";
            if (cm.getQuestStatus(k) > 0 && cm.getQuestStatus(h) > 0 && cm.getQuestStatus(e) > 0) {
                o += "\r\n\r\n#b* 没有可执行的调查任务#k\r\n"
            } else {
                if (cm.getQuestStatus(k) == 0) {
                    o += "\r\n  #L0##b#e#y" + k + "##l#k#n"
                }
                if (cm.getQuestStatus(h) == 0) {
                    o += "\r\n  #L1##b#e#y" + h + "##l#k#n"
                }
                if (cm.getQuestStatus(e) == 0) {
                    o += "\r\n  #L2##b#e#y" + e + "##l#k#n"
                }
            }
            o += "\r\n  #L3#关闭公告栏#l";
            cm.askMenu(o, 4, 9401022)
        } else {
            if (status === d++) {
                switch (selectionLog[1]) {
                    case 0:
                    case 1:
                    case 2:
                        var a = cm.getNumberFromQuestInfo(64789, "q" + (selectionLog[1] + 1));
                        break;
                    case 3:
                        cm.dispose();
                        return
                }
                if (a <= 65367) {
                    var p = 2631532;
                    var g = 1
                } else {
                    if (a <= 65370) {
                        var p = 2631532;
                        var g = 2
                    } else {
                        if (a <= 65373) {
                            var p = 2631533;
                            var g = 1
                        } else {
                            if (a <= 65377) {
                                var p = 2631533;
                                var g = 2
                            } else {
                                var p = 2631534;
                                var g = 1
                            }
                        }
                    }
                }
                cm.askYesNo(" - 任务内容：#y" + a + "#\r\n - 报酬：#t" + p + "# " + g + "个#i" + p + ":#\r\n - 任务期限：#r今晚零点#k", 4, 9401022)
            } else {
                if (status == d++) {
                    var a = cm.getNumberFromQuestInfo(64789, "q" + (selectionLog[1] + 1));
                    cm.updateInfoQuest(a, "");
                    cm.forceStartQuest(a, "");
                    switch (selectionLog[1]) {
                        case 65365:
                            cm.gainItem(2270053, 5);
                            break;
                        case 65369:
                            cm.gainItem(2270055, 5);
                            break;
                        case 65372:
                            cm.gainItem(2270056, 5);
                            break;
                        case 65375:
                            cm.gainItem(2270057, 5);
                            break;
                        case 65379:
                            cm.gainItem(2270058, 5);
                            break;
                        case 65366:
                        case 65370:
                        case 65373:
                        case 65376:
                        case 65380:
                            cm.gainItem(2631556, 1);
                            break
                    }
                    cm.dispose();
                    if (cm.isQuestActive(64763)) {
                        cm.updateInfoQuest(64763, "chk=1;start=1")
                    }
                }
            }
        }
    }
}

function stage0(d, c, b) {
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/64788.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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