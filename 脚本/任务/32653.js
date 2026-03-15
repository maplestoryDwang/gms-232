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
            cm.sendNormalTalk("什么？有没有见过一个被抓到这儿的骑士？你是说下巴像石头一样厚实的金发骑士吗？", 0, 2530001, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("嗯……我要不要告诉你他在哪里呢？如果你能帮我个忙的话，我可以考虑告诉你。", 0, 2530001, true, true)
            } else {
                if (status === a++) {
                    cm.askAcceptDecline("这附近的 #b矿石吞噬者#k吃掉了我最爱的女儿的照片。这照片可是我唯一的念想……你能替我把照片找回来吗？", 0, 2530001)
                } else {
                    if (status === a++) {
                        cm.forceStartQuest(32653, "");
                        cm.curNodeEventEnd(true);
                        cm.eventSKill(0);
                        cm.setInGameDirectionMode(true, true, true);
                        cm.fieldEffect_InsertCanvas(1, 200, 0, 0, 0, 1300, 0);
                        cm.inGameDirectionEvent_AskAnswerTime(1600)
                    } else {
                        if (status === a++) {
                            cm.inGameDirectionEvent_Monologue("#fs30#\r\n\r\n#fNpc/2500001.img/stand/0#    Mission : 寻找物品\r\n\r\n\r\n#fs18##fn黑体#                 为了寻找杜纳米斯的线索, 需要大爹的帮助. \r\n                 消灭地下的矿石吞噬者, 寻找爱女照片吧. ", 1);
                            cm.effect_Voice("Voice.img/Library/Knight/M/0", 100)
                        } else {
                            if (status === a++) {
                                cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1300, 0);
                                cm.inGameDirectionEvent_AskAnswerTime(1600);
                                cm.effect_Voice("Voice.img/Library/Knight/M/2", 100)
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/32653.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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