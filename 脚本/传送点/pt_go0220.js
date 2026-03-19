function enter() {
    if (cm.getMap().getNumMonsters() == 0) {
        var a = Math.floor((cm.getMapId() - 867200200) / 20) + 1;
        if (cm.getNumberFromQuestInfo(64014, "scene" + a) == 1) {
            cm.openScriptNpc()
        } else {
            cm.warp(cm.getMapId() + 20, 0)
        }
    } else {
        cm.playerMessage(5, "消灭区域里的所有怪物再下去。")
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
            cm.setInGameDirectionMode(true, false, true);
            cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
            cm.npc_ChangeController(9400686, "oid=2277262", 2025, -180, 21, 1975, 2075, 0, false, false);
            cm.npc_SetSpecialAction("oid=2277262", "summon", 0, 0);
            cm.inGameDirectionEvent_AskAnswerTime(300)
        } else {
            if (status === a++) {
                cm.npc_SetSpecialAction("oid=2277262", "regen", 0, 1);
                cm.inGameDirectionEvent_AskAnswerTime(800)
            } else {
                if (status === a++) {
                    cm.npc_LeaveField("oid=2277262");
                    cm.npc_ChangeController(9400642, "oid=2277275", 2025, -180, 21, 1975, 2075, 0, true, false);
                    cm.npc_SetSpecialAction("oid=2277275", "summon", 0, 0);
                    cm.inGameDirectionEvent_ForcedFlip(-1);
                    cm.inGameDirectionEvent_AskAnswerTime(500)
                } else {
                    if (status === a++) {
                        cm.effect_OnUserEff("Effect/OnUserEff.img/emotionBalloon/exclamation3");
                        cm.npc_SetSpecialAction("oid=2277275", "skill1", 0, 1);
                        cm.fieldEffect_PlayFieldSound("Sound/Mob.img/9402242/Attack1", 128);
                        cm.inGameDirectionEvent_AskAnswerTime(2000)
                    } else {
                        if (status === a++) {
                            cm.playerMessage(5, "消灭区域里的所有怪物再下去。");
                            cm.inGameDirectionEvent_AskAnswerTime(500)
                        } else {
                            if (status === a++) {
                                cm.npc_LeaveField("oid=2277275");
                                cm.setInGameDirectionMode(false, true, false);
                                cm.spawnMob(9402242, 1, 2000, -170);
                                cm.dispose()
                            }
                        }
                    }
                }
            }
        }
    }
};