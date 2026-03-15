var status = -1;
var selectionLog = [];

function start(f, g, j) {
    if (status == 0 && f == 0) {
        cm.dispose();
        return
    }(f == 1) ? status++ : status--;
    selectionLog[status] = j;
    var c = -1;
    if (status <= c++) {
        cm.dispose()
    } else {
        if (status == c++) {
            if (getYearWeek() != cm.getNumberFromQuestInfo(39100, "week")) {
                cm.setStringForQuestInfo(39100, "startDate", cm.getNowTimeString(3));
                cm.setNumberForQuestInfo(39100, "week", getYearWeek());
                var b = 39101,
                    h = 39155,
                    d = 4;
                var e = cm.randArray(b, h, d);
                for (var c = 1; c <= d; c++) {
                    cm.setNumberForQuestInfo(39100, "q" + c, e[c - 1])
                }
                cm.addNumberForQuestInfo(39165, "start", 1)
            }
            var k = "本周需要拜托你的事情如下。\r\n";
            for (var c = 1; c <= 4; c++) {
                var a = cm.getNumberFromQuestInfo(64789, "q" + c);
                k += "\r\n#b#e#y" + a + "##k#n"
            }
            k += "\r\n\r\n#e你想现在执行吗？";
            cm.askYesNo(k, 0, 2155000)
        } else {
            if (status === c++) {
                for (var c = 1; c <= 4; c++) {
                    var a = cm.getNumberFromQuestInfo(64789, "q" + c);
                    cm.addNumberForQuestInfo(a, "start", 1);
                    cm.forceStartQuest(a, "")
                }
                cm.forceStartQuest(39165, "");
                cm.forceCompleteQuest(39165);
                cm.addNumberForQuestInfo(39100, "dow", 4);
                cm.sendNormalTalk("一定要记住，必须在#e#r周日午夜#k#n前完成任务。好了，祝你一切顺利。", 0, 2155000, true, false)
            } else {
                if (status === c++) {
                    cm.dispose()
                }
            }
        }
    }
}

function getYearWeek() {
    var g = new Date();
    var f = g.getYear(),
        e = g.getMonth(),
        k = g.getDate();
    var i = new Date(f, parseInt(e) - 1, k),
        h = new Date(f, 0, 1),
        j = Math.round((i.valueOf() - h.valueOf()) / 86400000);
    return Math.ceil((j + ((h.getDay() + 1) - 1)) / 7)
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/39165.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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