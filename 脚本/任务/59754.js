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
            cm.sendNormalTalk_Bottom("笔记本的最后一页恢复了……！", 57, 9400031, false, true)
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
                        cm.inGameDirectionEvent_Monologue("[事件日志14]", 0)
                    } else {
                        if (status === a++) {
                            cm.inGameDirectionEvent_Monologue("陈……失去了重要的朋友，非常伤心……", 0)
                        } else {
                            if (status === a++) {
                                cm.inGameDirectionEvent_Monologue("灵灵在痛苦又孤独的时候，肯定希望能有谁来拯救自己吧……", 0)
                            } else {
                                if (status === a++) {
                                    cm.inGameDirectionEvent_Monologue("居然绑架无辜的动物，干出这么残忍的事情……！", 0)
                                } else {
                                    if (status === a++) {
                                        cm.inGameDirectionEvent_Monologue("APORD……我们橡果侦探团绝对不会放过你们！", 0)
                                    } else {
                                        if (status === a++) {
                                            cm.inGameDirectionEvent_Monologue("我们要把之前抓住的家伙们全部交给宇宙警察！", 1)
                                        } else {
                                            if (status === a++) {
                                                cm.inGameDirectionEvent_AskAnswerTime(1200)
                                            } else {
                                                if (status === a++) {
                                                    cm.forceCompleteQuest(59754);
                                                    cm.fieldEffect_KinesisEXP(Math.pow(cm.getLevel(), 3) / 2);
                                                    cm.gainExp(Math.pow(cm.getLevel(), 3) / 2);
                                                    cm.updateInfoQuest(59760, "1=1;2=1;3=1");
                                                    cm.inGameDirectionEvent_AskAnswerTime(2200)
                                                } else {
                                                    if (status === a++) {
                                                        cm.effect_Voice("Field.img/masteryBook/EnchantSuccess", 100);
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