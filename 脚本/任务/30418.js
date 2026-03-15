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
            cm.sendNormalTalk_Bottom("哎哟，我说，还打算要多做年糕啊？\r\n你们能找到两倍的食材吗？\r\n这个嘛，只要你们能做到，那就找#b20个米粉#k过来就是……", 37, 2074120, false, true)
        } else {
            if (status === a++) {
                cm.forceStartQuest(30418, "");
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
            cm.curNodeEventEnd(true);
            cm.setInGameDirectionMode(true, false, true);
            cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
            cm.sendNormalTalk_Bottom("哼，真的找到了吗？\r\n算了，你们应该也饿了，随你们吃不吃吧。\r\n我这就去做年糕，别来找我了。", 37, 2074120, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#哇！又是年糕！伯母！谢谢您的款待", 37, 2074100, true, true)
            } else {
                if (status === a++) {
                    cm.forceStartQuest(30912, "1");
                    cm.forceCompleteQuest(30912);
                    cm.forceForfeitQuest(30912);
                    cm.updateInfoQuest(30912, "");
                    cm.sendNormalTalk_Bottom("#face2#啊呜啊呜，哇！真的！厉害。\r\n小日啊，你要不要也吃点？", 37, 2074100, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("嗯……我，我就算了。", 37, 2074119, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face2#我说，你为什么要拒绝这么美味的年糕啊？\r\n你为什么不吃呢？我实在是没法理解啊，真的。", 37, 2074100, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("我只是，没关系，\r\n因为我见过它们是怎么被做出来的……", 37, 2074119, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("#face1#啊呜啊呜，啊呜！\r\n嗯？你说什么？你刚刚说什么？", 37, 2074100, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("没，没什么。\r\n你们多吃点。", 37, 2074119, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                            cm.inGameDirectionEvent_AskAnswerTime(500)
                                        } else {
                                            if (status === a++) {
                                                cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                                                cm.inGameDirectionEvent_AskAnswerTime(1200)
                                            } else {
                                                if (status === a++) {
                                                    cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                                                    cm.inGameDirectionEvent_AskAnswerTime(1400)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk_Bottom("啊呜！ 大婶！", 37, 2074114, false, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.forceStartQuest(30918, "1");
                                                            cm.updateInfoQuest(30418, "gExpCheck=1");
                                                            cm.gainExp(369355);
                                                            cm.forceCompleteQuest(30418);
                                                            cm.inGameDirectionEvent_AskAnswerTime(400);
                                                            cm.gainItem(4034634, -20);
                                                            cm.effect_Voice("Field.img/masteryBook/EnchantSuccess", 100)
                                                        } else {
                                                            if (status === a++) {
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
                }
            }
        }
    }
};