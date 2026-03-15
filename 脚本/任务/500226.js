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
            cm.sendNormalTalk("好的，#e第一课#n是#b<等级范围内的怪物>#k。", 16, 0, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("哦，老师！听上去好像很好玩的样子！", 4, 9062054, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("嗯……好不好玩我不知道……\r\n但是#b等级范围内的怪物#k是在冒险岛世界中狩猎时必须知道的事情。", 16, 0, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("什么是#e#o9101025##n？就是以角色等级为基准，#r#e-20级到+20级范围#k#n内的怪物。\r\n比如如果角色等级是50级，30级～70级的怪物就是#e#o9101025##n。", 16, 0, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("如果超出等级范围，即使消灭该物，也只能获得#b很少的经验值和金币#k，也无法参加各种#b活动#k。", 16, 0, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("#b等级范围！\r\n-20～+20！\r\n惩罚！#k\r\n我要记下来，老师！", 4, 9062054, true, true)
                            } else {
                                if (status === a++) {
                                    cm.askYesNo("老师！现在马上开始#b<1学时>消灭1000个等级范围内的怪物#k\r\n#r示范课程#k吧？", 4, 9062054)
                                } else {
                                    if (status === a++) {
                                        cm.forceStartQuest(500226, "");
                                        cm.sendNormalTalk("我一定会好好学习！", 4, 9062054, false, true)
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
            cm.askYesNo("老师的#b精彩示范#k我全都看到了！\r\n#b<1学时>消灭1000个等级范围内的怪物#k\r\n你想完成#r课程#k吗？\r\n\r\n#b#e<课程完成奖励>#n#k\r\n#i1122215:# #b#t1122215:# 1个#k", 4, 9062054)
        } else {
            if (status === a++) {
                cm.askText("老师！在课程结束之前，#b我还有一个问题！#k\r\n\r\n在活动中获得的#b奖励#k中最喜欢什么？", "", 9330627, 0, 1000)
            } else {
                if (status === a++) {
                    cm.updateInfoQuest(500226, "");
                    cm.forceCompleteQuest(500226);
                    cm.sendNormalTalk("#b老师#k，谢谢！\r\n老师，多亏了你，我好像#e又成长#n了！\r\n\r\n#b#e<课程完成奖励>#n#k\r\n#i1122215:# #b#t1122215:# 1个#k", 4, 9062055, false, true)
                } else {
                    if (status === a++) {
                        cm.gainItem(1122215, 1);
                        cm.dispose()
                    }
                }
            }
        }
    }
};