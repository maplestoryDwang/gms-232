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
            cm.sendNextSNoESC_Bottom("笔记本的第十一页写满了……！")
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
                        cm.inGameDirectionEvent_Monologue("[事件日志11]", 0)
                    } else {
                        if (status === a++) {
                            cm.inGameDirectionEvent_Monologue("我们找到了APORD的秘密基地！那就是他们的宇宙飞船！", 0)
                        } else {
                            if (status === a++) {
                                cm.inGameDirectionEvent_Monologue("居然藏在了森林深处……如果不是我们橡果侦探团……", 0)
                            } else {
                                if (status === a++) {
                                    cm.inGameDirectionEvent_Monologue("那些动物就会消失在宇宙中，再也见不到了……！", 0)
                                } else {
                                    if (status === a++) {
                                        cm.inGameDirectionEvent_Monologue("嘟嘟、奈奈、灵灵！我们得快点找到我们重要的朋友！", 1)
                                    } else {
                                        if (status === a++) {
                                            cm.inGameDirectionEvent_AskAnswerTime(1200)
                                        } else {
                                            if (status === a++) {
                                                cm.forceCompleteQuest(59727);
                                                cm.fieldEffect_KinesisEXP(Math.pow(cm.getLevel(), 3) / 2);
                                                cm.gainExp(Math.pow(cm.getLevel(), 3) / 2);
                                                cm.updateInfoQuest(59763, "1=1;2=1;3=1;4=1;5=1;6=1;7=1;8=1");
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