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
            if (cm.getNumberFromQuestInfo(500831, "tuto1") == 1 && cm.getNumberFromQuestInfo(500831, "tuto2") == 1 && cm.getNumberFromQuestInfo(500831, "tuto3") == 1) {
                cm.sendNormalTalk("哎呀呀……不要这么性急嘛。先听我们把话说完也不晚。\r\n#r※ 需要先了解日冕活动的信息", 4, 9400960, false, false);
                cm.dispose()
            } else {
                cm.sendNormalTalk("那么，你的选择是什么呢？\r\n#r※ 请从日冕庆典界面里选择方向。", 4, 9400960, false, false)
            }
        } else {
            if (status == a++) {
                cm.teachSkill(80011910, 1, 1);
                cm.teachSkill(80011876, 1, 1);
                cm.openNewUI(1, "UICoronaMain");
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