var status = -1;
var selectionLog = [];

function start(f, h, l) {
    if (status == 0 && f == 0) {
        cm.dispose();
        return
    }(f == 1) ? status++ : status--;
    selectionLog[status] = l;
    var c = -1;
    if (status <= c++) {
        cm.dispose()
    } else {
        if (status == c++) {
            var b = cm.getStringFromQuestInfo(500827, "accCheck").substring(0, 6);
            var j = cm.getNowTimeString(3).replaceAll("/", "");
            if (!b.equals(j)) {
                cm.setNumberForQuestInfo(500827, "start", 0);
                cm.setNumberForQuestInfo(500827, "MiniGameCount", 0);
                cm.setNumberForQuestInfo(500827, "accSum", 1810000);
                cm.setNumberForQuestInfo(500827, "accSum", 1810000);
                cm.setNumberForQuestInfo(500957, "instantPlayOver", 0);
                cm.setNumberForQuestInfo(500957, "instantPlayCount", 0);
                for (var c = 1; c <= 5; c++) {
                    cm.setNumberForQuestInfo(500827, "q" + c + "Set", 0)
                }
                var a = 1,
                    k = 5,
                    e = 3;
                var d = cm.randArray(a, k, e);
                for (var c = 1; c <= e; c++) {
                    cm.setNumberForQuestInfo(500827, "q" + d[c - 1] + "Set", 1)
                }
            }
            var g = 3 - cm.getNumberFromQuestInfo(500957, "instantPlayCount");
            if (g > 0) {
                cm.addPopupSay(1012116, 4000, "现在还有 " + g + " 次游戏机会。\r\n用完以后，在线每30分钟就可以再参与1次游戏。", "", 0)
            } else {
                cm.addPopupSay(1012116, 4000, "以后在线每30分钟就可以参与游戏1次.", "", 0)
            }
            cm.openNewUI(1, "CUIIsekaiQuartet");
            cm.dispose()
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/64674.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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