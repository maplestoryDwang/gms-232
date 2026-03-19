function enter() {
    if (cm.getMap().getNumMonsters() == 0) {
        var a = Math.floor((cm.getMapId() - 867200200) / 20) + 1;
        if (cm.getNumberFromQuestInfo(64014, "scene" + a) == 1) {
            cm.openScriptNpc()
        } else {
            cm.warp(867200281, 1)
        }
    } else {
        cm.onTeleport(0, 3, cm.getPlayer().getId(), -120, -893);
        cm.addPopupSay(9400588, 0, "勇士！这里还有怪物！", "", 0);
        cm.playerMessage(5, "消灭区域里的所有怪物再下去。")
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
            cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
            cm.inGameDirectionEvent_PushMoveInfo(1, 5000, 0, 0)
        } else {
            if (status === a++) {
                cm.npc_ChangeController(9400675, "oid=2277968", -445, 125, 2, -495, -395, 0, true, false);
                cm.npc_SetSpecialAction("oid=2277968", "summon", 0, 0);
                cm.inGameDirectionEvent_AskAnswerTime(500)
            } else {
                if (status === a++) {
                    cm.inGameDirectionEvent_PushScaleInfo(1000, 2000, 2000, -200, 90)
                } else {
                    if (status === a++) {
                        cm.inGameDirectionEvent_AskAnswerTime(500)
                    } else {
                        if (status === a++) {
                            cm.npc_SetSpecialAction("oid=2277968", "regen", 0, 1);
                            cm.inGameDirectionEvent_AskAnswerTime(800)
                        } else {
                            if (status === a++) {
                                cm.inGameDirectionEvent_ForcedFlip(-1);
                                cm.npc_SetSpecialAction("oid=2277968", "skill1", 0, 1);
                                cm.inGameDirectionEvent_AskAnswerTime(2000)
                            } else {
                                if (status === a++) {
                                    cm.effect_Voice("Mob.img/9402244/skill1", 100);
                                    cm.playerMessage(-1, "消灭区域内的所有怪物再下去。");
                                    cm.inGameDirectionEvent_AskAnswerTime(1000)
                                } else {
                                    if (status === a++) {
                                        cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0)
                                    } else {
                                        if (status === a++) {
                                            cm.npc_LeaveField("oid=2277968");
                                            cm.setInGameDirectionMode(false, true, false);
                                            cm.spawnMob(9402244, 2, -173, -254);
                                            cm.spawnMob(9402242, 6, -173, -254);
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