var status = -1;
var selectionLog = [];

function start(c, b, a) {
    if (cm.getNumberFromQuestInfo(500827, "q1Count") > 0) {
        start1(c, b, a)
    } else {
        start0(c, b, a)
    }
}

function start0(d, c, b) {
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
            cm.sendNormalTalk("嗨，#b#h0##k！我是和真！", 4, 9100026, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("听说现在连冒险岛世界都出现了#b奇怪的按钮#k。我也是第一次见，所以不是很清楚。但如果真是个奇怪的开关，谁知道按下去会发生什么事情。", 4, 9100026, true, true)
            } else {
                if (status === a++) {
                    cm.askYesNo("#b据说怪物们携带着按钮。击杀等级范围怪回收按钮吧？\r\n\r\n#r※ 异世界四重奏每日任务每天每个服务器只有1个角色可以进行。#k", 4, 9100026)
                } else {
                    if (status === a++) {
                        cm.forceStartQuest(64666, "");
                        cm.sendNormalTalk("很好！拜托了。", 4, 9100026, false, true)
                    } else {
                        if (status === a++) {
                            cm.dispose()
                        }
                    }
                }
            }
        }
    }
}

function start1(d, c, b) {
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
            cm.askYesNo("听说开关不断地在出现，今天也麻烦你帮我收集开关了。找到50个就行！\r\n#r", 4, 9100026)
        } else {
            if (status == a++) {
                cm.sendNormalTalk("很好！今天也拜托你了。", 4, 9100026, false, false);
                cm.forceStartQuest(64666, "")
            } else {
                if (status === a++) {
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
        if (status === a++) {
            cm.dispose()
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
            cm.sendNormalTalk("哦哦！这么快就收集好50个了吗？", 4, 9100026, false, true)
        } else {
            if (status === a++) {
                cm.setNumberForQuestInfo(500827, "q1Set", 2);
                cm.addNumberForQuestInfo(500827, "q1Count", 1);
                cm.forceCompleteQuest();
                cm.sendNormalTalk("实力不赖嘛。辛苦了。#n\r\n\r\n#fUI/UIWindow2.img/QuestIcon/4/0#\r\n\r\n#b#i2630962:# #t2630962:##k", 4, 9100026, true, false);
                cm.gainItem(2630962, 1)
            } else {
                if (status === a++) {
                    cm.dispose()
                }
            }
        }
    }
};