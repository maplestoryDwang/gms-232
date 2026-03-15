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
            cm.askYesNo("#e周日冒险岛见！周日冒险岛！#n\r\n确定以#b当前登录的角色#k领取礼物吗？\r\n#r每个账号#k仅能领取1次礼物！\r\n\r\n#fUI/UIWindow2.img/Quest/quest_info/summary_icon/reward#\r\n#b#i2437760:# #t2437760:# 4个#k\r\n", 4, 9010000)
        } else {
            if (status == a++) {
                cm.sendNormalTalk("周日冒险岛礼物已经发放给你了！\r\n祝你度过一个快乐的周日！\r\n\r\n#fUI/UIWindow2.img/QuestIcon/4/0#\r\n#b#i2437760:# #t2437760:# 4个#k\r\n", 4, 9010000, false, false);
                cm.gainItem(2437760, 1);
                cm.gainItem(2437760, 1);
                cm.gainItem(2437760, 1);
                cm.gainItem(2437760, 1)
            } else {
                if (status === a++) {
                    cm.forceCompleteQuest();
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