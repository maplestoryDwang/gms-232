function enter() {
    cm.openScriptNpc()
}
var status = -1;
var selectionLog = [];

function start() {
    action(1, 0, 0)
}

function action(d, c, b) {
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
            cm.setInGameDirectionMode(true, false, true);
            cm.inGameDirectionEvent_AskAnswerTime(200)
        } else {
            if (status === a++) {
                cm.npc_setForceFlip("oid=287793753", -1);
                cm.npc_setForceFlip("oid=287793754", -1);
                cm.npc_setForceFlip("oid=287793755", -1);
                cm.npc_setForceFlip("oid=287793756", -1);
                cm.fieldEffect_PlayFieldSound("Sound/Field.img/quest2251/yes", 100);
                cm.fieldEffect_PlayFieldSound("Sound/Field.img/quest2251/no1", 100);
                cm.inGameDirectionEvent_AskAnswerTime(300)
            } else {
                if (status === a++) {
                    cm.setNpcSpecialActionReset("oid=287793753");
                    cm.setNpcSpecialActionReset("oid=287793754");
                    cm.setNpcSpecialActionReset("oid=287793755");
                    cm.setNpcSpecialActionReset("oid=287793756");
                    cm.npc_SetForceMove("oid=287793753", 1, 500, 150);
                    cm.npc_SetForceMove("oid=287793754", 1, 500, 100);
                    cm.npc_SetForceMove("oid=287793755", 1, 500, 200);
                    cm.npc_SetForceMove("oid=287793756", 1, 500, 150);
                    cm.inGameDirectionEvent_AskAnswerTime(2000)
                } else {
                    if (status === a++) {
                        cm.npc_LeaveField("oid=287793753");
                        cm.npc_LeaveField("oid=287793753");
                        cm.npc_LeaveField("oid=287793754");
                        cm.npc_LeaveField("oid=287793754");
                        cm.npc_LeaveField("oid=287793755");
                        cm.npc_LeaveField("oid=287793755");
                        cm.npc_LeaveField("oid=287793756");
                        cm.npc_LeaveField("oid=287793756");
                        cm.sendNormalTalk_Bottom("#face2#额啊，等一下！", 37, 1540805, false, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("刚刚那是什么？", 37, 1540807, true, true)
                        } else {
                            if (status === a++) {
                                cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0)
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