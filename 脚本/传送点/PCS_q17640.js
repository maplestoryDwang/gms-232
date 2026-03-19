function enter() {
    var b = cm.getPortal().getId();
    var a = cm.getPortal().getName();
    if (cm.isQuestActive(17639)) {
        cm.openScriptNpc()
    }
}
var status = -1;
var selectionLog = [];

function start() {
    action(1, 0, 0)
}

function action(d, c, b) {
    if (status == 0 && d == 0) {
        cm.dispose();
        return
    }(d == 1) ? status++ : status--;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status === a++) {
            cm.sendNormalTalk("快请进！", 5, 9390211, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("我是达尼尔拉商团的。听说这有莱文预定的东西。", 17, 0, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("啊是的，你说的是这些吧。这个和这个还有这个……", 5, 9390211, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("(呃，比预想的要多呢，) 那个，你能帮我把这些东西送到码头吗？", 17, 0, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("当然可以。马上帮你送过去。", 5, 9390211, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("那，谢谢了。(可以叫人送的东西，莱文干嘛让我来呢。)", 17, 0, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("嗯？你是……！！", 57, 0, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("哎呀，又是那个人呢。", 37, 9390204, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("到这儿有何贵干啊？你还没有忘记自己是个罪犯吧？", 57, 0, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("哎呀，那天要不是我的话你就不在这儿了，你没忘吧？", 37, 9390204, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk_Bottom("呃……好吧。今天就当我们没碰见过。那么我就告辞了……", 57, 0, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk_Bottom("看来你这是要乘船远行啊？", 37, 9390204, true, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk_Bottom("海盗们惹事，我这就要去讨伐他们。你这是什么意思？", 57, 0, true, true)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.sendNormalTalk_Bottom("啊没什么，只是……没什么特别的意思。那我就告辞了。", 37, 9390204, true, true)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.sendNormalTalk_Bottom("那女孩干嘛的。先回莱文那里吧。", 57, 0, true, true)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.forceCompleteQuest(17639);
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
        }
    }
};