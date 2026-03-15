var status = -1;
var selectionLog = [];

function start() {
    action(1, 0, 0)
}

function action(d, c, b) {
    if (cm.isQuestFinished(32311)) {
        cm.npc_ChangeController(1520022, "oid=1683669", 600, -310, 31, 550, 650, 1, false, 0, false);
        cm.npc_SetSpecialAction("oid=1683669", "summon", 0, 0);
        cm.npc_ChangeController(1520023, "oid=1683670", 360, -520, 1, 310, 410, 1, false, 0, false);
        cm.npc_SetSpecialAction("oid=1683670", "summon", 0, 0);
        cm.npc_ChangeController(1520024, "oid=1683671", -360, -520, 2, -410, -310, 1, false, 0, false);
        cm.npc_SetSpecialAction("oid=1683671", "summon", 0, 0);
        cm.npc_ChangeController(1520025, "oid=1683672", -600, -310, 38, -650, -550, 1, false, 0, false);
        cm.npc_SetSpecialAction("oid=1683672", "summon", 0, 0);
        cm.npc_ChangeController(1520026, "oid=1683673", 0, -80, 39, -50, 50, 1, false, 0, false);
        cm.npc_SetSpecialAction("oid=1683673", "summon", 0, 0);
        cm.npc_ChangeController(1520028, "oid=1683674", 22, -500, 11, -28, 72, 1, false, 0, false);
        cm.npc_SetSpecialAction("oid=1683674", "summon", 0, 0);
        cm.setSessionValue("void", "1683674");
        cm.dispose();
        return
    }
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
        if (status === a++) {
            cm.npc_ChangeController(1520022, "oid=1678098", 600, -310, 31, 550, 650, 1, false, 0, false);
            cm.npc_SetSpecialAction("oid=1678098", "summon", 0, 0);
            cm.npc_ChangeController(1520023, "oid=1678099", 360, -520, 1, 310, 410, 1, false, 0, false);
            cm.npc_SetSpecialAction("oid=1678099", "summon", 0, 0);
            cm.npc_ChangeController(1520024, "oid=1678100", -360, -520, 2, -410, -310, 1, false, 0, false);
            cm.npc_SetSpecialAction("oid=1678100", "summon", 0, 0);
            cm.npc_ChangeController(1520025, "oid=1678101", -600, -310, 38, -650, -550, 1, false, 0, false);
            cm.npc_SetSpecialAction("oid=1678101", "summon", 0, 0);
            cm.npc_ChangeController(1520026, "oid=1678102", 0, -80, 39, -50, 50, 1, false, 0, false);
            cm.npc_SetSpecialAction("oid=1678102", "summon", 0, 0);
            cm.npc_ChangeController(1520028, "oid=1678103", 22, -500, 11, -28, 72, 1, false, 0, false);
            cm.npc_SetSpecialAction("oid=1678103", "summon", 0, 0);
            cm.setSessionValue("void", "1678103");
            cm.curNodeEventEnd(true);
            cm.setInGameDirectionMode(true, true, false);
            cm.inGameDirectionEvent_头顶图片(["Effect/Direction12.img/effect/story/BalloonMsg1/0"], [1200, 0, -120, 0, 0, 0, 0, 0, 0]);
            cm.inGameDirectionEvent_PushMoveInfo(0, 200, 0, -500)
        } else {
            if (status === a++) {
                cm.curNodeEventEnd(true);
                cm.inGameDirectionEvent_AskAnswerTime(5064)
            } else {
                if (status === a++) {
                    cm.inGameDirectionEvent_AskAnswerTime(2000)
                } else {
                    if (status === a++) {
                        cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0)
                    } else {
                        if (status === a++) {
                            cm.inGameDirectionEvent_AskAnswerTime(0)
                        } else {
                            if (status === a++) {
                                cm.inGameDirectionEvent_头顶图片(["Effect/Direction3.img/effect/story/BalloonMsg0/0"], [1200, 300, -120, 0, 0, 0, 0, 0, 0]);
                                cm.inGameDirectionEvent_AskAnswerTime(2000)
                            } else {
                                if (status === a++) {
                                    cm.gainExp(125000);
                                    cm.forceCompleteQuest(32308);
                                    cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                    cm.setInGameDirectionMode(false, true, false);
                                    cm.forceStartQuest(39320, "");
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