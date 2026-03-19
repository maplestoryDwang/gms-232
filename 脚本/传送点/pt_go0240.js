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
            cm.inGameDirectionEvent_AskAnswerTime(500)
        } else {
            if (status === a++) {
                cm.inGameDirectionEvent_AskAnswerTime(500)
            } else {
                if (status === a++) {
                    cm.effect_OnUserEff("Effect/OnUserEff.img/emotionBalloon/exclamation3");
                    cm.inGameDirectionEvent_ForcedFlip10(2, 400);
                    cm.sendNewEffects(17, [2000, 1000, 2000, 3420, -120])
                } else {
                    if (status === a++) {
                        cm.inGameDirectionEvent_AskAnswerTime(3000)
                    } else {
                        if (status === a++) {
                            cm.sendNewEffects(17, [1000, 2000, 3000, 3650, -160])
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#b那个是……什么东西？", 57, 0, false, true)
                            } else {
                                if (status === a++) {
                                    cm.inGameDirectionEvent_AskAnswerTime(2000)
                                } else {
                                    if (status === a++) {
                                        cm.fieldEffect_PlayFieldSound("Sound/PL_MONAD.img/EP1/ACT1/ullan", 128);
                                        cm.sendNormalTalk_Bottom("哇啊啊啊！！！！！！", 37, 9400588, false, true)
                                    } else {
                                        if (status === a++) {
                                            cm.inGameDirectionEvent_AskAnswerTime(500)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("#b惊叫声？在下面！", 57, 0, false, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.npc_ChangeController(9400674, "oid=2277602", 2240, -180, 31, 2190, 2290, 0, true, false);
                                                    cm.npc_SetSpecialAction("oid=2277602", "summon", 0, 0);
                                                    cm.npc_ChangeController(9400642, "oid=2277603", 1985, -180, 30, 1935, 2035, 0, true, false);
                                                    cm.npc_SetSpecialAction("oid=2277603", "summon", 0, 0);
                                                    cm.npc_ChangeController(9400642, "oid=2277604", 2115, -180, 31, 2065, 2165, 0, true, false);
                                                    cm.npc_SetSpecialAction("oid=2277604", "summon", 0, 0);
                                                    cm.sendNewEffects(17, [500, 3000, 1000, 2500, -170])
                                                } else {
                                                    if (status === a++) {
                                                        cm.inGameDirectionEvent_AskAnswerTime(500)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.npc_SetSpecialAction("oid=2277602", "regen", 0, 1);
                                                            cm.npc_SetSpecialAction("oid=2277603", "regen", 0, 1);
                                                            cm.npc_SetSpecialAction("oid=2277604", "regen", 0, 1);
                                                            cm.inGameDirectionEvent_AskAnswerTime(800)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.inGameDirectionEvent_ForcedFlip(-1);
                                                                cm.npc_SetSpecialAction("oid=2277602", "skill1", 0, 1);
                                                                cm.fieldEffect_PlayFieldSound("Sound/Mob.img/9402243/skill1", 128);
                                                                cm.inGameDirectionEvent_AskAnswerTime(2500)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.sendNewEffects(19, [0])
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.playerMessage(5, "消灭区域里的所有怪物再下去。");
                                                                        cm.npc_LeaveField("oid=2277602");
                                                                        cm.npc_LeaveField("oid=2277603");
                                                                        cm.npc_LeaveField("oid=2277604");
                                                                        cm.setInGameDirectionMode(false, true, false);
                                                                        cm.spawnMob(9402242, 1, 1985, -173);
                                                                        cm.spawnMob(9402242, 1, 2115, -173);
                                                                        cm.spawnMob(9402243, 1, 2240, -171);
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
                            }
                        }
                    }
                }
            }
        }
    }
};