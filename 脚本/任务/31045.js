var status = -1;

function start(d, c, b) {
    (d == 1) ? status++ : status--;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            cm.askAcceptDecline("请帮我清理玫瑰花园吧！\r\n\r\n#e玫瑰花园：每日任务#n\r\n - 消灭普通怪物：3分\n - 绽放玫瑰花/解放灵魂：10分\n - 消灭黄金蜜蜂：25分\n - 消灭城堡石头人王：50分\r\n#r目标分数：500分#k")
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
            cm.sendNormalTalk("你出色地完成了第二个每日任务。做好领取奖励的准备了吗？\r\n\r\n #b#i2432206##t2432206#2个#k", 0, 2162000, false, true)
        } else {
            if (status === a++) {
                cm.forceCompleteQuest(31045);
                cm.updateInfoQuest(31045, "complete=1");
                cm.gainExp(874535);
                cm.setNumberForQuestInfo(31035, "score", 0);
                cm.addNumberForQuestInfo(31035, "total", 1);
                cm.forceStartQuest(31046, "");
                cm.sendNormalTalk("最后一个每日任务的目标是1000分，今天过去后就无法完成，一定要注意。\r\n\r\n#r-目标分数：1000分\r\n -奖励：玫瑰花园箱子5个#k", 0, 2162000, true, false);
                cm.gainItem(2432206, 2)
            }
        }
    }
};