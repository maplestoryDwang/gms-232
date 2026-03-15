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
                        cm.inGameDirectionEvent_Monologue("[事件日志15]", 0)
                    } else {
                        if (status === a++) {
                            cm.inGameDirectionEvent_Monologue("我们把APORD绑架的动物全都放了出来！", 0)
                        } else {
                            if (status === a++) {
                                cm.inGameDirectionEvent_Monologue("现在大家都能回到家人和朋友的身边，重新过上幸福的生活了吧？", 0)
                            } else {
                                if (status === a++) {
                                    cm.inGameDirectionEvent_Monologue("虽然这段旅程又累又可怕……但是因为有着可靠的伙伴，我才能战胜重重困难！", 0)
                                } else {
                                    if (status === a++) {
                                        cm.inGameDirectionEvent_Monologue("橡果侦探团……今后我们会怎么样呢？！", 1)
                                    } else {
                                        if (status === a++) {
                                            cm.inGameDirectionEvent_AskAnswerTime(1200)
                                        } else {
                                            if (status === a++) {
                                                cm.forceCompleteQuest(59755);
                                                cm.fieldEffect_KinesisEXP(Math.pow(cm.getLevel(), 3) / 2);
                                                cm.gainExp(Math.pow(cm.getLevel(), 3) / 2);
                                                cm.updateInfoQuest(59760, "1=1;2=1;3=1;4=1");
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