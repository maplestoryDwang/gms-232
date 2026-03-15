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
            var b = 39003,
                h = 39012,
                d = 6;
            var e = cm.randArray(b, h, d);
            for (var c = 1; c <= d; c++) {
                cm.setNumberForQuestInfo(39002, "q" + c, e[c - 1])
            }
            var k = "这个世界#b最强的战士#k，本周需要你帮忙的事情如下。\r\n\r\n";
            for (var c = 1; c <= 6; c++) {
                var a = cm.getNumberFromQuestInfo(39002, "q" + c);
                k += "#b#e#y" + a + "##k#n\r\n"
            }
            k += "\r\n#e你想现在去帮助净化堕落世界树吗？#n\r\n如果不满意，可以重新来我这里领取。";
            cm.askYesNo(k, 0, 1540895)
        } else {
            if (status === c++) {
                cm.forceCompleteQuest(39002);
                for (var c = 1; c <= 6; c++) {
                    var a = cm.getNumberFromQuestInfo(39002, "q" + c);
                    cm.forceStartQuest(a)
                }
                cm.sendNormalTalk("任务全部完成之后，请回到我这里来。\r\n所有任务在#e#r周日午夜#k#n之前有效。如果想从我这里领取奖励，请在这之前回来找我。", 0, 1540895, true, false)
            } else {
                if (status === c++) {
                    cm.dispose()
                }
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