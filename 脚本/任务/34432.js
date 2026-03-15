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
            cm.askYesNo("#h0#，多亏了你，我才能来到这里。真的非常感谢。为了表示感谢，我想送你一样东西，希望你能收下。", 0, 1052221)
        } else {
            if (status === a++) {
                cm.forceStartQuest(34432, "");
                cm.forceCompleteQuest(34432);
                cm.finishAchievement(1164);
                cm.playerMessage(5, "你获得了大火娱乐共同代表勋章。");
                cm.playerMessage(-1, "你获得了大火娱乐共同代表勋章");
                cm.sendNormalTalk("你为我们大火娱乐做出了不小的牺牲，我为你准备了一点礼物，日后也请多多关照！", 0, 1052221, false, false);
                cm.gainItem(1143005, 1)
            } else {
                if (status === a++) {
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