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
            cm.sendNormalTalk("#e第二课#n是#b<精英怪物>#k。", 16, 0, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("#b精英怪物！#k\r\n只有像老师一样#e聪明、帅气#n的人才称得上是#b精英！#k\r\n这么说，精英怪物一定也很聪明、帅气！", 4, 9062055, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("是的～没错。\r\n消灭#b等级范围内的怪物#k时，偶尔会出现#b又大又强#k的怪物。我们把那种怪物叫做#b精英怪物#k。", 16, 0, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("老师充满自信的样子，真是太帅了！", 4, 9062055, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("#b精英怪物#k不仅个头大，#r血量、攻击力#k也比普通怪物高得多，还拥有#b强大的技能#k。\r\n\r\n因此消灭掉#b精英怪物#k时，可以获得#b很高的经验值#k和#b制作和强化道具#k所需的各种材料。", 16, 0, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("#b精英怪物#k出现的时候，总是会伴随着#b黑暗的气息#k，所以马上就能知道。", 16, 0, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("#r强大的力量！#k #b丰厚的奖励！#k\r\n我会记住的，老师！", 4, 9062055, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.askYesNo("老师！现在马上开始#b<2学时>消灭15个精英怪物#k\r\n#r示范课程#k吧？", 4, 9062055)
                                    } else {
                                        if (status === a++) {
                                            cm.forceStartQuest(500227, "");
                                            cm.sendNormalTalk("我一定会好好学习！", 4, 9062055, false, true)
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
            cm.askYesNo("老师的#b精彩示范#k我全都看到了！\r\n#b<2学时>消灭15个精英怪物#k\r\n你想完成#r课程#k吗？\r\n\r\n#b#e<课程完成奖励>#n#k\r\n#i4001832:# #b#t4001832:# 500个#k", 4, 9062055)
        } else {
            if (status === a++) {
                cm.askText("老师！在课程结束之前，#b我还有一个问题！#k\r\n\r\n提到冒险岛，最先想到的#b怪物#k是什么？", "", 9330627, 0, 1000)
            } else {
                if (status === a++) {
                    cm.forceCompleteQuest(500227);
                    cm.sendNormalTalk("#b老师#k，谢谢！\r\n老师，多亏了你，我好像#e又成长#n了！\r\n\r\n#b#e<课程完成奖励>#n#k\r\n#i4001832:# #b#t4001832:# 500个#k", 4, 9062056, false, true);
                    cm.gainItem(4001832, 500);
                    cm.dispose()
                }
            }
        }
    }
};