function enter() {
    if (cm.getNumberFromQuestInfo(64088, "coll4") < 1) {
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
            cm.updateInfoQuest(64088, "coll1=1;coll2=1;coll3=1;coll4=1");
            cm.inGameDirectionEvent_AskAnswerTime(900)
        } else {
            if (status === a++) {
                cm.setPartner(0, 9400646, 0, 0);
                cm.Hidden_background("alika02", 257);
                cm.sendNormalTalk_Bottom("#face3#啊啊！", 37, 9400580, false, true)
            } else {
                if (status === a++) {
                    cm.inGameDirectionEvent_AskAnswerTime(1500)
                } else {
                    if (status === a++) {
                        cm.Hidden_background("alika02", 0);
                        cm.npc_ChangeController(9400580, "oid=7621332", 135, -690, 129, 85, 185, 1, true, false);
                        cm.npc_SetSpecialAction("oid=7621332", "summon", 0, 0);
                        cm.sendNormalTalk_Bottom("#face0#这里也有风……", 37, 9400580, false, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face2#看来风是站在我们这边的啊！", 37, 9400580, true, true)
                        } else {
                            if (status === a++) {
                                cm.npc_SetForceMove("oid=7621332", -1, 150, 30);
                                cm.inGameDirectionEvent_AskAnswerTime(1000)
                            } else {
                                if (status === a++) {
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
};