var status = -1;
var selectionLog = [];

function start() {
    action(1, 0, 0)
}

function action(d, c, b) {
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
            if (cm.isQuestFinished(32209)) {
                cm.fieldEffect_ScreenMsg("maplemap/enter/10000");
                cm.dispose();
                return
            } else {
                cm.setSessionValue("kill_count", "0");
                cm.forceStartQuest(32217, "1");
                cm.curNodeEventEnd(true);
                cm.setInGameDirectionMode(true, true, false);
                cm.fieldEffect_ScreenMsg("maplemap/enter/10000");
                cm.inGameDirectionEvent_AskAnswerTime(1000)
            }
        } else {
            if (status === a++) {
                cm.npc_ChangeController(10300, "oid=1194624", -240, 220, 6, -290, -190, 1, true, 0, false);
                cm.npc_SetSpecialAction("oid=1194624", "summon", 0, 0);
                cm.inGameDirectionEvent_头顶图片(["Effect/Direction12.img/effect/tuto/BalloonMsg1/1", "oid=1194624"], [900, 0, -120, 1, 0, 1, 0, 0, 0]);
                cm.inGameDirectionEvent_AskAnswerTime(1800)
            } else {
                if (status === a++) {
                    cm.npc_SetForceMove("oid=1194624", 1, 1000, 100);
                    cm.inGameDirectionEvent_PushMoveInfo(0, 200, 200, 200)
                } else {
                    if (status === a++) {
                        cm.inGameDirectionEvent_AskAnswerTime(4542)
                    } else {
                        if (status === a++) {
                            cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0)
                        } else {
                            if (status === a++) {
                                cm.inGameDirectionEvent_AskAnswerTime(0)
                            } else {
                                if (status === a++) {
                                    cm.inGameDirectionEvent_AskAnswerTime(900)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk("刚刚那个女孩是谁呢？为什么一见到我就逃走了呢？", 17, 0, false, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk("我也朝着那个方向过去看看吧。", 17, 0, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.npc_LeaveField("oid=1194624");
                                                cm.forceCompleteQuest(32202);
                                                cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                                cm.setInGameDirectionMode(false, true, false);
                                                cm.teachSkill(80002323, 0, -1);
                                                cm.teachSkill(80002323, 1, 1);
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
};