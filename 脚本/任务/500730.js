var status = -1;
var selectionLog = [];

function start(e, c, b) {
    if (status == 0 && e == 0) {
        cm.dispose();
        return
    }(e == 1) ? status++ : status--;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            cm.askYesNo_Bottom("\r\n完成该任务后，可以消耗#b300个新复古币#k领取以下物品，#r每个世界限领1次#k。\r\n\r\n#b#i2630509:# <#t2630509:#>#k#n\r\n#e#b#i2630507:# <#t2630507:#>#k#n\r\n\r\n确定要用这个角色进行吗？", 128, 9062172, 3)
        } else {
            if (status === a++) {
                var d = cm.getNumberFromQuestInfo(100246, "point");
                if (d < 300) {
                    cm.sendOk_Bottom("\r\n需要#b300个新复古币#k才能进行升级。你现在只有#b" + d + "个新复古币#k啊。", 128, 9062172, 3);
                    cm.dispose();
                    return
                }
                cm.addNumberForQuestInfo(500728, "lv", 1);
                cm.setStringForQuestInfo(500728, "last", cm.getNowTimeString("yyMMdd"));
                cm.addNumberForQuestInfo(100246, "lv", 1);
                cm.addNumberForQuestInfo(100246, "point", -300);
                cm.forceCompleteQuest(500730);
                cm.teachSkill(80000586, 1, 0);
                cm.teachSkill(80000586, 2, 4);
                cm.gainItem(2630509, 1);
                cm.gainItem(2630507, 1);
                cm.dispose();
                cm.warp(993110500, 0, false)
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/500730.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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