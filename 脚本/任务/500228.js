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
            cm.sendNormalTalk("#e第三课#n是#b<保罗&普利托兄弟>#k。", 16, 0, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("#b保罗&普利托！#k\r\n好像是#b非常美味的料理名称#k！是吃的吗？", 4, 9062056, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("虽然名字听上去很美味，但#b保罗和利托#k其实是消灭怪物的#b赏金猎人#k兄弟。\r\n\r\n哥哥#r保罗#k喜欢直接消灭怪物，而弟弟#b普利托#k则喜欢用各种法术消灭怪物。\r\n\r\n消灭#b等级范围内的怪物#k时，偶尔会有#b黄色传送口#k出现。通过那种传送口，可以见到两兄弟中的一个。", 16, 0, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("在和#r保罗#k一起执行的#e3种任务#n中，可以获得#b大量的经验值#k。\r\n根据#b自己所在地区#k的怪物水平，登场的怪物各不相同。", 16, 0, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("在和#r普利托#k一起执行的#e3种任务#n中，可以获得#b经验值和道具#k。\r\n如果在限定时间内出色地完成指定任务，可以获得#b猎人包#k。在#b猎人包#k中可以获得包括#i1142910:##i1142909:#在内的各种道具。", 16, 0, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("#b赏金猎人保罗&普利托！\r\n黄色传送口！\r\n哥哥大量经验值！弟弟经验值&道具！#k\r\n我已经输入到脑子里了！", 4, 9062056, true, true)
                            } else {
                                if (status === a++) {
                                    cm.askYesNo("老师！现在马上开始#b<3学时>完成1次保罗&普利托#k\r\n#r示范课程#k吧？", 4, 9062056)
                                } else {
                                    if (status === a++) {
                                        cm.forceStartQuest(500228, "");
                                        cm.sendNormalTalk("我一定会好好学习！", 4, 9062056, false, true)
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
            cm.askYesNo("老师的#b精彩示范#k我全都看到了！\r\n#b<3学时>完成1次保罗&普利托#k\r\n你想完成#r课程#k吗？\r\n\r\n#b#e<课程完成奖励>#n#k\r\n#i2049447:# #b#t2049447:# 1个#k", 4, 9062056)
        } else {
            if (status === a++) {
                cm.askText("老师！在课程结束之前，#b我还有一个问题！#k\r\n\r\n在冒险岛中最喜欢的#bNPC#k是谁？", "", 9330627, 0, 1000)
            } else {
                if (status === a++) {
                    cm.forceCompleteQuest(500228);
                    cm.sendNormalTalk("#b老师#k，谢谢！\r\n老师，多亏了你，我好像#e又成长#n了！\r\n\r\n#b#e<课程完成奖励>#n#k\r\n#i2049447:# #b#t2049447:# 1个#k", 4, 9062057, false, true);
                    cm.gainItem(2049447, 1)
                } else {
                    if (status === a++) {
                        cm.dispose()
                    }
                }
            }
        }
    }
};