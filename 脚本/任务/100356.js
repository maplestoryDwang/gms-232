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
            cm.askMenu("#b#e<挑战任务：攻城战车歼灭战>#n#k\r\n那帮翼人军准备了非常厉害的#r攻城战车#k。只要摧毁他们的#r攻城战车#k，就可以扭转战况！\r\n#L1# #b开展攻城战车歼灭战。#k#l\r\n#L2# #b聆听攻城战车歼灭战介绍。#k#l\r\n#L3# #b查看我的最高纪录。#k#l", 4, 3004204)
        } else {
            var reactor = "action分支" + selectionLog[1];
            eval(reactor)(mode, type, selection, i)
        }
    }
}

function action分支1(d, c, b, a) {
    if (status <= a++) {
        cm.setNumberForQuestInfo(100356, "rMap", cm.getMapId());
        cm.warp(993111600, 0, false);
        cm.dispose()
    }
}

function action分支2(d, c, b, a) {
    if (status <= a++) {
        cm.sendNormalTalk("#b#e<攻城战车歼灭战>#n#k\r\n\r\n#b攻城战车歼灭战#k是迎战进攻塞尔提乌的#r翼人军#k和#r攻城战车#k，将其击退的任务。", 4, 3004204, false, true)
    } else {
        if (status === a++) {
            cm.sendNormalTalk("#b#e<攻城战车歼灭战>#n#k\r\n\r\n进入战场时，可以看到#b攻城战车#k朝城门猛冲过来。\r\n摧毁攻城战车后，车上的#r5个翼人军#k就会下车发动攻击。\r\n你可以根据给他们#b造成的伤害量#k获得#b分数#k，并基于该得分获得#b荣耀币#k。", 4, 3004204, true, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("#b#e<攻城战车歼灭战>#n#k\r\n\r\n总共会出现10台#b攻城战车#k。破坏#b攻城战车#k进入下一关，将有更强大的攻城战车等着你。", 4, 3004204, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("#b#e<攻城战车歼灭战>#n#k\r\n\r\n#r攻城战车和翼人军将经过#k总共10个关卡#k提高#b防御率#k和#b等级#k。\r\n随着敌人越来越强，获得1分所需造成的伤害量也会增加。", 4, 3004204, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("#b#e<攻城战车歼灭战>#n#k\r\n\r\n根据在#b限制时间2分钟#k内造成的伤害量，可以#b最多获得1200分#k，#b每10分可以换成1个荣耀币#k。\r\n如果在限制时间结束之前先达到#b1200分#k，则任务结束。", 4, 3004204, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("#b#e<攻城战车歼灭战>#n#k\r\n\r\n挑战虽然不限次数，但#r每个世界一天只能获得1次#k#b荣耀币#k，这个你要注意哦。", 4, 3004204, true, true)
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

function action分支3(d, c, b, a) {
    if (status <= a++) {
        cm.sendNormalTalk("你在攻城战车歼灭战里获得的最高纪录得分为#b#e440分#n#k。#k", 4, 3004204, false, false)
    } else {
        if (status === a++) {
            cm.dispose()
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/100356.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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