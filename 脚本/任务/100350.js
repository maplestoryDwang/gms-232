var status = -1;
var selectionLog = [];

function start(mode, type, selection) {
    if (status == 0 && mode == 0) {
        cm.dispose();
        return
    }(mode == 1) ? status++ : status--;
    selectionLog[status] = selection;
    var i = -1;
    if (status <= i++) {
        cm.dispose()
    } else {
        if (status == i++) {
            cm.askMenu("和机甲海马一同展开的水战训练！\r\n你愿意参加激战海洋吗？\r\n\r\n#L0#我想要#r#e参加激战海洋#n#k。#l\r\n\r\n#L1#我想要领取#b#e机甲海马骑宠#n#k。#l\r\n#L2#我想要了解#b#e激战海洋的说明#n#k。#l", 4, 3004213)
        } else {
            var reactor = "action分支" + selectionLog[1];
            eval(reactor)(mode, type, selection, i)
        }
    }
}

function action分支0(d, c, b, a) {
    if (status <= a++) {
        cm.sendNormalTalk("激战海洋训练场将形成#r#e对行动的限制#n#k，当前正在应用的#e#r增益效果#k#n也#e可能会消失#n，请慎重做出选择。", 4, 3004213, false, true)
    } else {
        if (status === a++) {
            cm.askYesNo("那现在就前往激战海洋训练场吗？", 4, 3004213)
        } else {
            if (status === a++) {
                cm.setNumberForQuestInfo(100351, "rMap", cm.getMapId());
                cm.warp(993122800, 0);
                cm.dispose()
            }
        }
    }
}

function action分支1(f, c, b, a) {
    var d = cm.getNumberFromQuestInfo(500824, "count");
    var e = cm.getNumberFromQuestInfo(500824, "reward");
    if (status <= a++) {
        if (e > 0) {
            cm.sendNormalTalk("你已经领取过#b#e水战机器人机甲海马#n#k了哦。", 4, 9062208, false, true);
            cm.dispose()
        } else {
            cm.sendNormalTalk("你在认真参加激战海洋训练吗？\r\n参加超过10天，我们将特别送给你#b#e水战机器人机甲海马#n#k。", 4, 9062208, false, true)
        }
    } else {
        if (status === a++) {
            if (d < 10) {
                cm.dispose()
            }
            cm.sendNormalTalk("迄今为止你参加了#b#e" + d + "天#n#k激战海洋呢。\r\n", 4, 9062208, true, true)
        } else {
            if (status === a++) {
                cm.askYesNo("要用当前角色领取吗？\r\n\r\n#e#b<游戏10天奖励>\r\n#i2630916:# #t2630916#\r\n#n#k\r\n#r#e※注意：每个世界只能领取1次“普通任务：激战海洋”的参与奖励。", 4, 9062208)
            } else {
                if (status === a++) {
                    cm.addNumberForQuestInfo(500824, "reward", 1);
                    cm.sendNormalTalk("机甲海马已发放，请查看背包！\r\n机甲海马存在使用期限，千万别忘了哦。", 4, 9062208, false, false);
                    cm.gainItem(2630916, 1);
                    cm.dispose()
                }
            }
        }
    }
}

function action分支2(d, c, b, a) {
    if (status <= a++) {
        cm.dispose();
        cm.openNpc("帮助_激战海洋")
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/100350.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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