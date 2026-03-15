var status = -1;

function start(d, c, b) {
    (d == 1) ? status++ : status--;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            cm.askAcceptDecline("请帮我清理玫瑰花园吧！\r\n\r\n#e玫瑰花园：每日任务#n\r\n - 消灭普通怪物：3分\n - 绽放玫瑰花/解放灵魂：10分\n - 消灭黄金蜜蜂：25分\n - 消灭城堡石头人王：50分\r\n#r目标分数：1000分#k")
        } else {
            if (status == a++) {
                cm.forceStartQuest();
                cm.dispose()
            }
        }
    }
}

function end(d, c, b) {
    (d == 1) ? status++ : status--;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            cm.sendNormalTalk("你出色地完成了今天的最后一个每日任务。做好领取奖励的准备了吗？\r\n\r\n #b#i2432206##t2432206#5个#k", 0, 2162000, false, true)
        } else {
            if (status === a++) {
                cm.forceCompleteQuest(31046);
                cm.finishAchievement(1175);
                cm.updateInfoQuest(31046, "complete=1");
                cm.gainExp(1257144);
                cm.setNumberForQuestInfo(31035, "score", 0);
                cm.setNumberForQuestInfo(31035, "state", 0);
                cm.addNumberForQuestInfo(31035, "total", 1);
                cm.sendNormalTalk("今天的任务全部结束了……嗯，你明天还会来吧？", 0, 2162000, true, false);
                cm.gainItem(2432206, 5)
            } else {
                if (status === a++) {
                    cm.dispose()
                }
            }
        }
    }
};