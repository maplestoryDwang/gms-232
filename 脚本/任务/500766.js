var status = -1;
var selectionLog = [];
var npcs = [9400920, 9400921, 9401160];

function start(f, e, d) {
    if (status == 0 && f == 0) {
        cm.dispose();
        return
    }(f == 1) ? status++ : status--;
    selectionLog[status] = d;
    var c = -1;
    var b = cm.getNumberFromQuestInfo(500773, "manager");
    var a = npcs[b];
    if (status <= c++) {
        cm.dispose()
    } else {
        if (status == c++) {
            cm.sendNormalTalk_Bottom("#face0##h0#，你的家似乎越来越漂亮了呢。你在装修的时候没有什么烦恼吗？那种时候看看别人的装修，说不定能有一定的帮助呢。", 37, a, false, true)
        } else {
            if (status == c++) {
                cm.sendNormalTalk_Bottom("#face0#如果你想参观别人的家，就在我的小屋菜单中点击#i3801394:#按键吧。还能遇到新的朋友呢！", 37, a, true, true)
            } else {
                if (status == c++) {
                    cm.setNumberForQuestInfo(500767, "6", 1);
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