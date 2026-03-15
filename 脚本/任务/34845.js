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
            cm.sendNormalTalk_Bottom("#face0#主人，水晶……好像有些不对劲。", 37, 3001300, false, true, 1)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#哇！该不会是出故障了吧？", 37, 3001312, true, true, 1)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face0#嗯……看来要先返回据点确认一下。", 37, 3001354, true, true, 1)
                } else {
                    if (status === a++) {
                        cm.askAcceptDecline_Bottom("#face0#你打算马上前往吗？\r\n#b（接受时将自动移动。）", 37, 3001300, 1)
                    } else {
                        if (status === a++) {
                            cm.forceStartQuest(34845, "");
                            cm.dispose();
                            cm.warp(940202000, 0, false)
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
    }
    status++;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            var e = cm.getQuest();
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/34845.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            if (cm.getMapId() != 940202000) {
                cm.warp(940202000, 0, false);
                cm.dispose()
            }
            cm.curNodeEventEnd(true);
            cm.setInGameDirectionMode(true, false, false);
            cm.setStandAloneMode(true);
            cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
            cm.sendNormalTalk_Bottom("#face0#额！", 37, 3001354, false, true, 1)
        } else {
            if (status === a++) {
                cm.fieldEffect_InsertCanvas(1, 255, 240, 240, 240, 1300, 0);
                cm.inGameDirectionEvent_AskAnswerTime(1600)
            } else {
                if (status === a++) {
                    cm.inGameDirectionEvent_AskAnswerTime(1600)
                } else {
                    if (status === a++) {
                        cm.fieldEffect_InsertCanvas(1, 255, 240, 240, 240, 0, 0);
                        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1300, 0);
                        cm.teachSkill(150001005, 1, 1);
                        cm.forceCompleteQuest(34845);
                        cm.sendNormalTalk_Bottom("#face0#刚才，是怎么回事？（由于水晶的力量，获得了新技能。）", 37, 3001354, false, true, 1)
                    } else {
                        if (status === a++) {
                            cm.gainItem(1143082, 1);
                            cm.forceStartQuest(34828, "");
                            cm.forceCompleteQuest(34828);
                            cm.sendNormalTalk_Bottom("#face0#全新技能……也就是我水晶主人的身份获得认可喽？", 37, 3001354, true, true, 1)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#face0#如果阿加特大人还在……就能一起享受这份喜悦了……", 37, 3001354, true, true, 1)
                            } else {
                                if (status === a++) {
                                    cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0)
                                } else {
                                    if (status === a++) {
                                        cm.setStandAloneMode(false);
                                        cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
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
};