var status = -1;
var selectionLog = [];

function start() {
    action(1, 0, 0)
}

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
            cm.sendNextSNoESC_Bottom("笔记本的第十页写满了……！")
        } else {
            if (status === a++) {
                cm.askMenuS_Bottom("要不要读一下？\r\n#b#L0#1. 读一下。#l\r\n#L1#2. 以后再读。#l")
            } else {
                if (status === a++) {
                    if (b == 1) {
                        cm.dispose();
                        return
                    }
                    cm.curNodeEventEnd(true);
                    cm.setInGameDirectionMode(true, false, true);
                    cm.fieldEffect_InsertCanvas(1, 200, 0, 0, 0, 1000, 0);
                    cm.inGameDirectionEvent_AskAnswerTime(2200)
                } else {
                    if (status === a++) {
                        cm.inGameDirectionEvent_Monologue("[事件日志10]", 0)
                    } else {
                        if (status === a++) {
                            cm.inGameDirectionEvent_Monologue("橡果侦探团!", 0)
                        } else {
                            if (status === a++) {
                                cm.inGameDirectionEvent_Monologue("代号剑斗和杰特虽然似乎不是很满意，不过我很喜欢！", 0)
                            } else {
                                if (status === a++) {
                                    cm.inGameDirectionEvent_Monologue("而且橡果真的很好吃，嘿嘿。", 0)
                                } else {
                                    if (status === a++) {
                                        cm.inGameDirectionEvent_Monologue("现在真的要去对付APORD了！跟着动物的毛发走吧！", 1)
                                    } else {
                                        if (status === a++) {
                                            cm.inGameDirectionEvent_AskAnswerTime(1200)
                                        } else {
                                            if (status === a++) {
                                                cm.forceCompleteQuest(59725);
                                                cm.fieldEffect_KinesisEXP(Math.pow(cm.getLevel(), 3) / 2);
                                                cm.gainExp(Math.pow(cm.getLevel(), 3) / 2);
                                                cm.updateInfoQuest(59763, "1=1;2=1;3=1;4=1;5=1;6=1");
                                                cm.inGameDirectionEvent_AskAnswerTime(2200)
                                            } else {
                                                if (status === a++) {
                                                    cm.effect_Voice("Field.img/masteryBook/EnchantSuccess");
                                                    cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                                                    cm.setInGameDirectionMode(false, false, false);
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
            cm.updateInfoQuest(59744, "map=" + cm.getMapId());
            cm.warp(867111019);
            cm.dispose()
        }
    }
};