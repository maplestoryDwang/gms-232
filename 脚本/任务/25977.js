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
            cm.sendNormalTalk("你好，#e#b#h0##k#n。\r\n在[BOSS内容等候队列]之后，我想再为你说明一下#b#e[BOSS练习模式]#k#n。", 1, 9000159, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("#b#e[BOSS练习模式]#k#n是指在不消耗各个BOSS的入场及完成次数或入场材料的情况下，也可以通过相同的战斗熟悉BOSS怪物的多种战斗方式的模式。", 1, 9000159, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("但由于是练习模式，因此只有需要练习的#b#e每周可完成1次的BOSS怪物#k#n会提供此功能。#b#e无法获得经验值和奖励#k#n，先行任务等入场条件和现有BOSS怪物相同。", 1, 9000159, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("此外，与BOSS怪物的种类无关，[BOSS练习模式]#b#e每天只能使用5次#k#n。", 1, 9000159, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("使用方法非常简单。只要在挑战BOSS怪物时选择练习模式即可。", 1, 9000159, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("希望经过努力练习后，能看到你轻松击败BOSS怪物的样子！好了，祝你今天度过愉快的一天！", 1, 9000159, true, true)
                            } else {
                                if (status === a++) {
                                    cm.forceCompleteQuest(25977);
                                    cm.dispose()
                                }
                            }
                        }
                    }
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