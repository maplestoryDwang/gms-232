var status = -1;
var selectionLog = [];

function start(e, d, c) {
    if (cm.getPlayer().getGender() == 0) {
        var a = 1531000
    } else {
        var a = 1531052
    }
    if (status == 0 && e == 0) {
        cm.dispose();
        return
    }(e == 1) ? status++ : status--;
    selectionLog[status] = c;
    var b = -1;
    if (status <= b++) {
        cm.dispose()
    } else {
        if (status == b++) {
            cm.sendNormalTalk_Bottom("难道已经获得亚乌认可了。", 37, 1531012, false, true)
        } else {
            if (status === b++) {
                cm.sendNormalTalk_Bottom("在我看来，你的力量也已经算是稳定了不少了。\r\n你这样回去，应该也不会再助长#b陷坑#k扩大了。", 37, 1531012, true, true)
            } else {
                if (status === b++) {
                    cm.curNodeEventEnd(true);
                    cm.eventSKill(0);
                    cm.setInGameDirectionMode(true, false, true);
                    cm.setStandAloneMode(true);
                    cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
                    cm.sendNormalTalk_Bottom("现在我就给你开启回去的道路，\r\n这和#b陷坑#k不同，是#b安全之门#k。", 37, 1531012, true, true)
                } else {
                    if (status === b++) {
                        cm.inGameDirectionEvent_AskAnswerTime(500)
                    } else {
                        if (status === b++) {
                            cm.forceCompleteQuest(22751);
                            cm.inGameDirectionEvent_AskAnswerTime(500)
                        } else {
                            if (status === b++) {
                                cm.setStandAloneMode(false);
                                cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                cm.eventSKill(0);
                                cm.setInGameDirectionMode(false, true, false);
                                cm.sendNormalTalk_Bottom("我们魔法协会会继续对那个#b白魔法师#k和#b陷坑#k进行研究的。\r\n#b内罗#k就会成为我们的联络方式。", 37, 1531012, false, true)
                            } else {
                                if (status === b++) {
                                    cm.sendNormalTalk_Bottom("#face2#啊……我的名字现在就算确定是内罗了吗……？", 37, 1531003, true, true)
                                } else {
                                    if (status === b++) {
                                        cm.sendNormalTalk_Bottom("那我得先走了，我们能见面也算是种缘分，我就教你能够在空间内瞬移的技能。\r\n#b(日后你只要使用回归技能，就可以瞬移到据点。)#k", 37, 1531012, true, true)
                                    } else {
                                        if (status === b++) {
                                            cm.sendNormalTalk_Bottom("还有……你就当这是来到这个世界的纪念品。\r\n\r\n#b#i3015244#  #t3015244#", 37, 1531012, true, true)
                                        } else {
                                            if (status === b++) {
                                                cm.teachSkill(140001290, 0, -1);
                                                cm.teachSkill(140001290, 1, 1);
                                                cm.forceCompleteQuest(22749);
                                                cm.forceCompleteQuest(22749);
                                                cm.gainExp(5500);
                                                cm.gainItem(3015244, 1);
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/22748.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
        } else {
            if (status == a++) {
                cm.forceStartQuest();
                cm.dispose()
            }
        }
    }
}

function end(e, d, c) {
    if (cm.getPlayer().getGender() == 0) {
        var a = 1531000
    } else {
        var a = 1531052
    }
    if (status == 0 && e == 0) {
        cm.dispose();
        return
    }(e == 1) ? status++ : status--;
    selectionLog[status] = c;
    var b = -1;
    if (status <= b++) {
        cm.dispose()
    } else {
        if (status == b++) {
            cm.sendNormalTalk_Bottom("#face1#你都收集齐了吗？给我吧。", 36, 1531003, false, true)
        } else {
            if (status === b++) {
                cm.sendNormalTalk_Bottom("#face1#哦！冰独眼兽的尾巴，给我吧。\r\n我给你换成亚乌的料理。\r\n\r\n#b#i2010045#  #t2010045#", 36, 1531003, true, true)
            } else {
                if (status === b++) {
                    cm.forceCompleteQuest(22748);
                    cm.gainExp(12500);
                    cm.sendNormalTalk_Bottom("#face0#现在超能力者好像成长了一些呢，\r\n不过得到#b30级#k才行。", 36, 1531003, true, false);
                    cm.gainItem(2010045, 10);
                    cm.gainItem(4000023, -10)
                } else {
                    if (status === b++) {
                        cm.dispose()
                    }
                }
            }
        }
    }
};