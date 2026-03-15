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
            cm.sendNormalTalk("我是这里的研究员。虽然我没有反抗黑色之翼的勇气……但我不能装作没看到这种情况。", 0, 2530002, false, true)
        } else {
            if (status === a++) {
                cm.askAcceptDecline("要想解除关押装置，需要几种材料。请从 AF型智能机器人处弄来20个安全存储芯片，再从出故障的DF型机器人那里弄来20个间接启动装置。", 0, 2530002)
            } else {
                if (status === a++) {
                    cm.forceStartQuest(32655, "");
                    cm.curNodeEventEnd(true);
                    cm.eventSKill(0);
                    cm.setInGameDirectionMode(true, true, true);
                    cm.fieldEffect_InsertCanvas(1, 200, 0, 0, 0, 1300, 0);
                    cm.inGameDirectionEvent_AskAnswerTime(1600)
                } else {
                    if (status === a++) {
                        cm.inGameDirectionEvent_Monologue("#fs30#\r\n\r\n#fNpc/2500001.img/stand/0#    Mission : 解除监禁装置\r\n\r\n\r\n#fs18##fn黑体#                  从AF型智能机器人身上搜集安全存储芯片, \r\n                 从DF型智能机器人身上搜集间接启动装置吧. ", 1);
                        cm.effect_Voice("Voice.img/Library/Knight/M/0", 100)
                    } else {
                        if (status === a++) {
                            cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1300, 0);
                            cm.inGameDirectionEvent_AskAnswerTime(1600);
                            cm.effect_Voice("Voice.img/Library/Knight/M/4", 100)
                        } else {
                            if (status === a++) {
                                cm.eventSKill(0);
                                cm.setInGameDirectionMode(false, true, false);
                                cm.dispose()
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
    }(d == 1) ? status++ : status--;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            var e = cm.getQuest();
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/32655.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk("安全存储芯片和间接启动装置都收集到了吗？", 0, 2530002, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("好……关押装置已经解开。不要和别人说是我帮你的哦。绝对不可以说，不然就出大事了。", 1, 2530002, true, true)
            } else {
                if (status === a++) {
                    cm.forceCompleteQuest(32655);
                    cm.gainExp(272663);
                    cm.gainItem(4033976, -20);
                    cm.gainItem(4033977, -20);
                    cm.dispose();
                    cm.warp(304020010, 0, false)
                }
            }
        }
    }
};