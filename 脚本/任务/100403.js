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
            cm.sendNormalTalk("你来了，#b#h0##k！\r\n我这就给你约定好的礼物！\r\n\r\n\r\n#e<章节完成奖励>#n\r\n#b#e\r\n#i2631137:# #i2631138:# #i2631134:# 万圣节伤害皮肤（选1）#n", 0, 9062257, false, true)
        } else {
            if (status === a++) {
                cm.askMenu("\r\n琪琪！选一个想要的礼物吧！\r\n#L1##b#e#i2631137:# #t2631137:##n#l\r\n#L2##b#e#i2631138:# #t2631138:##n#l\r\n#L3##b#e#i2631134:# #t2631134:##n#l", 0, 9062257)
            } else {
                if (status === a++) {
                    switch (b) {
                        case 1:
                            cm.gainItem(2631137, 1);
                            break;
                        case 2:
                            cm.gainItem(2631138, 1);
                            break;
                        case 3:
                            cm.gainItem(2631134, 1);
                            break
                    }
                    cm.forceCompleteQuest(100403);
                    cm.sendNormalTalk("礼物已发放，快去看看背包吧！\r\n", 0, 9062257, false, false)
                } else {
                    if (status === a++) {
                        cm.dispose()
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
    }
    status++;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            var e = cm.getQuest();
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/100403.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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