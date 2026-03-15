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
            cm.sendNormalTalk("谢谢你救了我！你好像也是骑士吧。", 0, 2531001, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("我为了抓捕黑魔女，跟踪了她。但是那居然是个陷阱。她比我想象中要强悍的多。", 0, 2531001, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("……她这么厉害，为什么不在一遇到我的时候，就用全力对付我呢。反而让我抢走了证据。", 0, 2531001, true, true)
                } else {
                    if (status === a++) {
                        cm.askAcceptDecline("这里面一定有什么阴谋。必须找出那个魔女在打什么主意，你愿意和我一起吗？", 0, 2531001)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("那边有升降机。回想被抓来时的记忆，往左边上去，好像是黑色之翼头目们的房间。请你前面开路吧，我马上跟来！", 1, 2531001, false, true)
                        } else {
                            if (status === a++) {
                                cm.forceStartQuest(32656, "");
                                cm.curNodeEventEnd(true);
                                cm.eventSKill(0);
                                cm.setInGameDirectionMode(true, true, true);
                                cm.fieldEffect_InsertCanvas(1, 200, 0, 0, 0, 1300, 0);
                                cm.inGameDirectionEvent_AskAnswerTime(1600)
                            } else {
                                if (status === a++) {
                                    cm.inGameDirectionEvent_Monologue("#fs30#\r\n\r\n#fNpc/2500001.img/stand/0#    Mission : 零碰撞通过\r\n\r\n\r\n#fs18##fn黑体#                  乘坐升降机, 潜入魔女的洞穴吧. \r\n                  注意中途不要和敌人碰撞！", 1);
                                    cm.effect_Voice("Voice.img/Library/Knight/M/0", 100)
                                } else {
                                    if (status === a++) {
                                        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1300, 0);
                                        cm.inGameDirectionEvent_AskAnswerTime(1600);
                                        cm.effect_Voice("Voice.img/Library/Knight/M/5", 100)
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/32656.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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