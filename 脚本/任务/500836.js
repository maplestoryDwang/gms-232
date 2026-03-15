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
            cm.sendNormalTalk("你吸收到了日蚀的气息吗？看样子你似乎一直都在参与庆典，累积的#b日冕积分#k也有不少呢。", 4, 9400965, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("你的#b日冕积分#k#b已经累积到1200积分#k，可达到#b日冕2级#k。\r\n今后你参加的所有主要活动的效果将得到#b进一步强化#k，就能更加享受庆典的气氛了。", 4, 9400965, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("没错没错……而且，虽然不知道你是否还记得，我曾经说过，#b根据日冕等级将获得特殊福利#k。", 4, 9400965, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("#r特别福利#k？", 2, 9400965, true, true)
                    } else {
                        if (status === a++) {
                            cm.askYesNo("没错，达到#b日冕2级#k的福利就是日月圣所的进入资格！", 4, 9400965)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("好好享用吧！但是#b日冕庆典的特殊福利#k可不止这些哦！", 4, 9400965, false, true);
                                cm.gainItem(2534000, 1)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("当然，如果你想要获得#b更强的活动效果#k和#b更珍贵的特别福利#k，就必须提高#b日冕等级#k。\r\n原来如此……如果你#b累积获得3000分#k就能达到下个日冕等级了！", 4, 9400965, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk("怎么样？如果你想要更多的福利和奖励，那就努力积攒#b日冕积分#k吧！\r\n如果你觉得你准备好了，那就再来找我吧！", 4, 9400965, true, true)
                                    } else {
                                        if (status === a++) {
                                            var d = 3;
                                            cm.setNumberForQuestInfo(500834, "grade", d);
                                            cm.setNumberForQuestInfo(500833, "" + (d - 1), 1);
                                            if (d > 1) {
                                                cm.forceCompleteQuest(500833 + d)
                                            }
                                            cm.coronaSkillMenu(6, d - 1, d - 1, 1);
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