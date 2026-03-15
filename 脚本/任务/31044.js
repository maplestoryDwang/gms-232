var status = -1;

function start(d, c, b) {
    (d == 1) ? status++ : status--;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            cm.askAcceptDecline("来，已经准备好开始今天的第一个每日任务了吗？在玫瑰花园里的所有行为都会累计为分数。\r\n\r\n#r-目标分数：300分\r\n-奖励：玫瑰花园箱子1个#k", 0, 2162000)
        } else {
            if (status === a++) {
                cm.forceStartQuest(31044, "");
                cm.setNumberForQuestInfo(31035, "score", 0);
                cm.setStringForQuestInfo(31035, "date", cm.getNowTimeString(3));
                cm.sendNormalTalk("我在这里等着你。加油！\r\n\r\n#b(到玫瑰花园去吧。)#k", 0, 2162000, false, false)
            } else {
                if (status === a++) {
                    cm.dispose()
                }
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
            cm.sendNormalTalk("你出色地完成了第一个每日任务。做好领取奖励的准备了吗？\r\n\r\n #b#i2432206##t2432206#1个#k", 0, 2162000, false, true)
        } else {
            if (status === a++) {
                cm.forceCompleteQuest(31044);
                cm.updateInfoQuest(31044, "complete=1");
                cm.gainExp(655901);
                cm.setNumberForQuestInfo(31035, "score", 0);
                cm.addNumberForQuestInfo(31035, "total", 1);
                cm.forceStartQuest(31045, "");
                cm.sendNormalTalk("第二个每日任务的目标为500分。注意，如果今天结束，便无法继续完成了。\r\n\r\n#r - 目标分数：500分\r\n - 奖励：2个玫瑰花园箱子#k", 0, 2162000, true, false);
                cm.gainItem(2432206, 1)
            }
        }
    }
};