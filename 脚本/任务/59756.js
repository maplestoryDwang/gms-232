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
                        cm.inGameDirectionEvent_Monologue("[最后的事件日志]", 0)
                    } else {
                        if (status === a++) {
                            cm.inGameDirectionEvent_Monologue("我们把抓住的APORD那些家伙都交给了杰特的同伴！", 0)
                        } else {
                            if (status === a++) {
                                cm.inGameDirectionEvent_Monologue("对柔弱的动物做出残忍行为的家伙……全部都关进监狱吧！哼！", 0)
                            } else {
                                if (status === a++) {
                                    cm.inGameDirectionEvent_Monologue("不过，他们究竟为什么要绑架那些动物呢？", 0)
                                } else {
                                    if (status === a++) {
                                        cm.inGameDirectionEvent_Monologue("而且，这可怕的宇宙飞船队长又是谁？！", 0)
                                    } else {
                                        if (status === a++) {
                                            cm.inGameDirectionEvent_Monologue("有许多APORD团员藏在宇宙飞船内，已经逃跑了！", 0)
                                        } else {
                                            if (status === a++) {
                                                cm.inGameDirectionEvent_Monologue("我们橡果侦探团的旅程已经结束了，但是作为勇士，我们的任务还没完！", 1)
                                            } else {
                                                if (status === a++) {
                                                    cm.inGameDirectionEvent_AskAnswerTime(1200)
                                                } else {
                                                    if (status === a++) {
                                                        cm.forceCompleteQuest(59756);
                                                        cm.gainExp(Math.pow(cm.getLevel(), 3) / 2);
                                                        cm.fieldEffect_KinesisEXP(Math.pow(cm.getLevel(), 3) / 2);
                                                        cm.updateInfoQuest(59760, "1=1;2=1;3=1;4=1;5=1");
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