function enter() {
    if (cm.getMap().getNumMonsters() == 0) {
        if (cm.getMapId() == 993131200) {
            cm.openScriptNpc()
        } else {
            cm.warp(cm.getMapId() + 50, 0)
        }
    } else {
        cm.playerMessage(5, "还有怪物没有消灭干净。");
        cm.playerMessage(-1, "还有怪物没有消灭干净。")
    }
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
            cm.eventSKill(0);
            cm.setInGameDirectionMode(true, false, true);
            cm.setStandAloneMode(true);
            cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
            cm.npc_ChangeController(3004322, "oid=2746946", 180, -2630, 32, 130, 230, 0, true, 0, false);
            cm.npc_SetSpecialAction("oid=2746946", "summon", 0, 0);
            cm.npc_ChangeController(3004323, "oid=2746947", 260, -2630, 123, 210, 310, 0, true, 0, false);
            cm.npc_SetSpecialAction("oid=2746947", "summon", 0, 0);
            cm.npc_ChangeController(3003251, "oid=2746948", 573, -2630, 34, 523, 623, 1, true, 0, false);
            cm.npc_SetSpecialAction("oid=2746948", "summon", 0, 0);
            cm.inGameDirectionEvent_ForcedFlip10(1, 5);
            cm.onTeleport(0, 3, cm.getPlayer().getId(), 482, -2630);
            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
            cm.inGameDirectionEvent_AskAnswerTime(1200)
        } else {
            if (status === a++) {
                cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                cm.inGameDirectionEvent_AskAnswerTime(1400)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face0#在追踪路西德的途中，我发现了一位面生的老魔法师。", 37, 3003251, false, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face0#我看他的模样很可疑就追了上去，结果不知不觉中来到了这里。", 37, 3003251, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face0#这是至今为止从未被发现的通道。", 37, 3003251, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#face0#好了，我们继续走吧。", 37, 3003251, true, true)
                            } else {
                                if (status === a++) {
                                    cm.fieldEffect_复合图片动画(["Map/Effect3.img/BossLucid/butterfly/005", "animation", "", ""], [1, 0, 0, 0, 0, 0, 0, 0]);
                                    cm.inGameDirectionEvent_AskAnswerTime(3000)
                                } else {
                                    if (status === a++) {
                                        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 2500, 0);
                                        cm.inGameDirectionEvent_AskAnswerTime(5000)
                                    } else {
                                        if (status === a++) {
                                            cm.warp(993135003, 0, false);
                                            cm.eventSKill(0);
                                            cm.setInGameDirectionMode(false, true, false);
                                            cm.setStandAloneMode(false);
                                            cm.npc_LeaveField("oid=2746946");
                                            cm.npc_LeaveField("oid=2746946");
                                            cm.npc_LeaveField("oid=2746947");
                                            cm.npc_LeaveField("oid=2746947");
                                            cm.npc_LeaveField("oid=2746948");
                                            cm.npc_LeaveField("oid=2746948");
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