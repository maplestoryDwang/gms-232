function enter() {
    if (cm.getNumberFromQuestInfo(64088, "coll3") < 1) {
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
            cm.updateInfoQuest(64088, "coll1=1;coll2=1;coll3=1");
            cm.sendNormalTalk_Bottom("#b艾丽卡，像我一样踩着那个跳过来！", 57, 0, false, true)
        } else {
            if (status === a++) {
                cm.npc_SetForceMove("oid=7621003", -1, 50, 100);
                cm.inGameDirectionEvent_AskAnswerTime(500)
            } else {
                if (status === a++) {
                    cm.npc_LeaveField("oid=7621003");
                    cm.npc_LeaveField("oid=7621003");
                    cm.Hidden_background("alika01", 257);
                    cm.inGameDirectionEvent_AskAnswerTime(2000)
                } else {
                    if (status === a++) {
                        cm.Hidden_background("alika01", 0);
                        cm.setPartner(1, 9400646, 80011692, 0);
                        cm.sendNormalTalk_Bottom("#face3#哈啊啊！", 37, 9400580, false, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#b做得好！", 57, 0, true, true)
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
};