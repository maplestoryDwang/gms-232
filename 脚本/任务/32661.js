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
            cm.sendNormalTalk("现在立刻终止诅咒，黑魔女。", 16, 2530004, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("呼呼，不要这样，趁这个机会你也改变一下想法吧。究竟什么想法呢？比如说如果黑魔法师复活的话，你们肯定打不过他啊。", 0, 2530004, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("就此放弃吧。冒险岛世界一定会落入他的手心的。", 0, 2530004, true, true)
                } else {
                    if (status === a++) {
                        cm.askMenu("呃……话说回来你怎么长得这么可爱？是我的菜。如果你现在愿意加入黑色之翼的话，我黑魔女埃雷奥诺尔给你推荐怎么样？\r\n#b#L0#拒绝，快点终止诅咒！#k#l", 0, 2530004)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("要和我打架？啊哈哈，好啊。两个一起上！", 1, 2530004, false, true)
                        } else {
                            if (status === a++) {
                                cm.forceStartQuest(32661, "");
                                cm.curNodeEventEnd(true);
                                cm.eventSKill(0);
                                cm.setInGameDirectionMode(true, true, true);
                                cm.fieldEffect_InsertCanvas(1, 200, 0, 0, 0, 1300, 0);
                                cm.inGameDirectionEvent_AskAnswerTime(1600)
                            } else {
                                if (status === a++) {
                                    cm.inGameDirectionEvent_Monologue("#fs30#\r\n\r\n#fNpc/2500001.img/stand/0#    Final Mission : 消灭黑魔女\r\n\r\n\r\n#fs18##fn黑体#                  阻止和消灭黑魔女埃雷奥诺尔吧. \r\n                  注意状态异常攻击！", 1);
                                    cm.effect_Voice("Voice.img/Library/Knight/M/0", 100)
                                } else {
                                    if (status === a++) {
                                        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1300, 0);
                                        cm.inGameDirectionEvent_AskAnswerTime(1600);
                                        cm.effect_Voice("Voice.img/Library/Knight/M/9", 100)
                                    } else {
                                        if (status === a++) {
                                            cm.eventSKill(0);
                                            cm.setInGameDirectionMode(false, true, false);
                                            cm.playerMessage(5, "消灭黑魔女埃雷奥诺尔！");
                                            cm.dispose();
                                            cm.warp(304070100, 0, false)
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/32661.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk("击退黑魔女。", 17, 0, false, true)
        } else {
            if (status === a++) {
                cm.dispose();
                cm.warp(304070200, 0, false)
            }
        }
    }
};