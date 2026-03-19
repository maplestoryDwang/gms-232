function enter() {
    var b = cm.getPortal().getId();
    var a = cm.getPortal().getName();
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
            cm.userSetFieldFloating(350063003, 0, 0, 20);
            cm.updateInfoQuest(33266, "save=2;or=1;he=1");
            cm.curNodeEventEnd(true);
            cm.setInGameDirectionMode(true, false, true);
            cm.inGameDirectionEvent_MoveAction(1);
            cm.inGameDirectionEvent_AskAnswerTime(1000)
        } else {
            if (status === a++) {
                cm.inGameDirectionEvent_PushScaleInfo(1000, 2000, 1000, 1900, 0)
            } else {
                if (status === a++) {
                    cm.npc_ChangeController(1540453, "oid=286739050", 1500, 2, 7, 1450, 1550, 0, true, 0, false);
                    cm.npc_SetSpecialAction("oid=286739050", "summon", 0, 0);
                    cm.npc_SetForceMove("oid=286739050", 1, 200, 130);
                    cm.inGameDirectionEvent_AskAnswerTime(1000)
                } else {
                    if (status === a++) {
                        cm.inGameDirectionEvent_MoveAction(0);
                        cm.inGameDirectionEvent_AskAnswerTime(3000)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("奥尔卡……你怎么会搀扶着#h0#？", 45, 1540453, false, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("不要误会，我没有救他。", 45, 1540490, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("好重啊，快帮帮忙。", 45, 1540490, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.inGameDirectionEvent_AskAnswerTime(1000)
                                    } else {
                                        if (status === a++) {
                                            cm.npc_SetForceMove("oid=286739050", 1, 50, 130);
                                            cm.inGameDirectionEvent_AskAnswerTime(300)
                                        } else {
                                            if (status === a++) {
                                                cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                cm.inGameDirectionEvent_AskAnswerTime(500)
                                            } else {
                                                if (status === a++) {
                                                    cm.dispose();
                                                    cm.warp(350063004, 0, true);
                                                    cm.setInGameDirectionMode(false, true, false);
                                                    cm.npc_LeaveField("oid=286739050");
                                                    cm.npc_LeaveField("oid=286739050");
                                                    cm.dispelBuff(80001630)
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