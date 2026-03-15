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
                        cm.inGameDirectionEvent_Monologue("[事件日志13]", 0)
                    } else {
                        if (status === a++) {
                            cm.inGameDirectionEvent_Monologue("我们找到和嘟嘟一样被宝石操纵的奈奈了！", 0)
                        } else {
                            if (status === a++) {
                                cm.inGameDirectionEvent_Monologue("虽然要伤害朋友，这让人心痛……", 0)
                            } else {
                                if (status === a++) {
                                    cm.inGameDirectionEvent_Monologue("但是我们这是为了让它恢复，大家都能理解吧？！", 0)
                                } else {
                                    if (status === a++) {
                                        cm.inGameDirectionEvent_Monologue("我们能找到陈的朋友灵灵吗？已经过去了很久，灵灵会发生什么事呢……", 0)
                                    } else {
                                        if (status === a++) {
                                            cm.inGameDirectionEvent_Monologue("请你一定要平安无事啊，灵灵……！不仅是陈，我们也在一起祈祷……！", 1)
                                        } else {
                                            if (status === a++) {
                                                cm.inGameDirectionEvent_AskAnswerTime(1200)
                                            } else {
                                                if (status === a++) {
                                                    cm.forceCompleteQuest(59753);
                                                    cm.fieldEffect_KinesisEXP(Math.pow(cm.getLevel(), 3) / 2);
                                                    cm.gainExp(Math.pow(cm.getLevel(), 3) / 2);
                                                    cm.updateInfoQuest(59760, "1=1;2=1");
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