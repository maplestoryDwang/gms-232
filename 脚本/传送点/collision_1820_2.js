function enter() {
    if (cm.getNumberFromQuestInfo(64088, "coll2") < 1) {
        cm.openScriptNpc()
    }
}
var status = -1;
var selectionLog = [];

function start() {
    action(1, 0, 0)
}

function action(d, c, b) {
    status++;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status === a++) {
            cm.curNodeEventEnd(true);
            cm.setInGameDirectionMode(true, false, true);
            cm.updateInfoQuest(64088, "coll1=1;coll2=1");
            cm.sendNewEffects(17, [2000, 1000, 2000, 1450, -490])
        } else {
            if (status === a++) {
                cm.inGameDirectionEvent_AskAnswerTime(2000)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#b(这里太远了，很难跳过去……", 57, 0, false, true)
                } else {
                    if (status === a++) {
                        cm.sendNewEffects(17, [2000, 2000, 2000, 1600, -490])
                    } else {
                        if (status === a++) {
                            cm.inGameDirectionEvent_AskAnswerTime(2000)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#b(踩着那个跳过去吧。) ", 57, 0, false, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNewEffects(14, [0, 2000, 1000, 0, 0])
                                } else {
                                    if (status === a++) {
                                        cm.sendNewEffects(19, [0])
                                    } else {
                                        if (status === a++) {
                                            cm.setPartner(0, 9400646, 0, 0);
                                            cm.npc_ChangeController(9400580, "oid=7621003", 1690, -500, 117, 1640, 1740, 1, true, false);
                                            cm.npc_SetSpecialAction("oid=7621003", "summon", 0, 0);
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
};