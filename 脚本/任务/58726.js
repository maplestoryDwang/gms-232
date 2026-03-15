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
            cm.updateInfoQuest(58726, "map7=0");
            cm.updateInfoQuest(58726, "map7=0;map8=0");
            cm.updateInfoQuest(58726, "map7=0;map8=0;map9=0");
            cm.updateInfoQuest(58726, "map7=0;map8=0;map9=0;map10=0");
            cm.sendNormalTalk_Bottom("#face0#……这事真令人难过……。", 36, 9111001, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#……为什么妖怪和人类总是互相伤害呢……？", 36, 9111001, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("你是……？", 56, 9112001, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face0##h0#，你好。\r\n我是#p9110002#的妹妹#p9111001#。\r\n因为我平时都待在神社里……所以今天是第一次见到你。", 36, 9111001, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("你是#p9110002#的妹妹？\r\n#b(气质上跟#p9110002#有点不一样啊……。)#k", 56, 9112001, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#face0#是的，我听姐姐说过#h0#你。", 36, 9111001, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("#face0#……本来我就很抱歉给你添乱……。\r\n……照这样下去，冤冤相报何时了啊。", 36, 9111001, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.askMenu_Bottom("#face0#你能不能帮我为可怜的狸猫们举行荐度斋？\r\n#L0# #b我得去找#b#p9110002#……。#l#k\r\n#L1# #b别客气，只要是我能帮得上忙的，尽管开口。#l#k", 37, 9111001)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("#face1#啊~姐姐那边你迟点儿过去也不要紧。\r\n你跟我一起回去就行。", 36, 9111001, false, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("#face1#首先，请你在周围的#e#r4个#k#n石灯里点香。\r\n我在#e#b#m800020007##k#等你。", 36, 9111001, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.forceStartQuest(58726, "");
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/58726.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk_Bottom("#face0#香都点上了吗？", 37, 9111001, false, true);
            if (cm.getNumberFromQuestInfo(58726, "state") < 4) {
                cm.dispose();
                return
            }
        } else {
            if (status === a++) {
                cm.fieldEffect_KinesisEXP(Math.pow(cm.getLevel(), 3) / 3);
                cm.gainExp(Math.pow(cm.getLevel(), 3) / 3);
                cm.sendNormalTalk_Bottom("#face0#你已经把所有石灯都点上香了啊。", 37, 9111001, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face0#那么……我们现在就开始吧。", 37, 9111001, true, true)
                } else {
                    if (status === a++) {
                        cm.dispose();
                        cm.forceCompleteQuest(58726);
                        cm.warp(800020012, 0, true)
                    }
                }
            }
        }
    }
};