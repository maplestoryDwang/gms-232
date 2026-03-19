function enter() {
    if (cm.isQuestActive(32973) && cm.getNumberFromQuestInfo(32973, "s") == 0) {
        cm.openScriptNpc()
    } else {
        if (cm.isQuestActive(32977)) {
            cm.warp(307000110)
        } else {
            cm.openScriptNpc()
        }
    }
}
var status = -1;
var selectionLog = [];

function start() {
    action(1, 0, 0)
}

function action(d, c, b) {
    if (!cm.isQuestActive(32973) || cm.getNumberFromQuestInfo(32973, "s") > 0) {
        cm.sendNormalTalk_Bottom("（好像还有别的事要做……）", 57, 0, false, true);
        cm.dispose();
        return
    }
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
            cm.curNodeEventEnd(true);
            cm.eventSKill(0);
            cm.setInGameDirectionMode(true, false, true);
            cm.sendNormalTalk_Bottom("糟了，糟了……", 57, 0, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("该不会是被诅咒了吧？", 57, 0, true, true)
            } else {
                if (status === a++) {
                    cm.inGameDirectionEvent_SetHideEffect(1);
                    cm.inGameDirectionEvent_PushScaleInfo(2000, 0, 2000, 2000, -840, 0)
                } else {
                    if (status === a++) {
                        cm.inGameDirectionEvent_AskAnswerTime(2000)
                    } else {
                        if (status === a++) {
                            cm.npc_ChangeController(2560006, "oid=3569669", -855, -60, 138, -905, -805, 1, false, 700, false);
                            cm.npc_SetSpecialAction("oid=3569669", "summon", 0, 0);
                            cm.sendNormalTalk_Bottom("#face0#喂，影牙！喂！切，我还想让他帮我拿杯果汁呢。", 37, 2560006, false, true)
                        } else {
                            if (status === a++) {
                                cm.npc_ChangeController(2560003, "oid=3569773", -675, -16, 137, -725, -625, 1, true, 300, false);
                                cm.npc_SetSpecialAction("oid=3569773", "summon", 0, 0);
                                cm.npc_SetForceMove("oid=3569773", -1, 250, 100);
                                cm.inGameDirectionEvent_AskAnswerTime(3000);
                                cm.effect_NormalSpeechBalloon("#fn黑体##fs20#哼唱～哼唱～", 1, 0, 0, 3000, 1, 0, 0, 0, 4, 2560003, null, cm.getPlayer().getId())
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("#face0#喂，艾特，你现在有空吧？", 37, 2560006, false, true)
                                } else {
                                    if (status === a++) {
                                        cm.npc_setForceFlip("oid=3569773", 1);
                                        cm.sendNormalTalk_Bottom("#face0#嗯？", 37, 2560003, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("#face0#帮我泡杯柠檬茶。", 37, 2560006, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("#face0#嗯……", 37, 2560003, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk_Bottom("#face4#没问题。", 37, 2560003, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.updateInfoQuest(32973, "s=1");
                                                        cm.eventSKill(0);
                                                        cm.dispose();
                                                        cm.warp(307000110, 0, true);
                                                        cm.setInGameDirectionMode(false, true, false);
                                                        cm.npc_LeaveField("oid=3569669");
                                                        cm.npc_LeaveField("oid=3569669");
                                                        cm.npc_LeaveField("oid=3569773");
                                                        cm.npc_LeaveField("oid=3569773")
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