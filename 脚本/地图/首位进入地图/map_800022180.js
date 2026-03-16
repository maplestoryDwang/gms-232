var status = -1;
var selectionLog = [];

function start() {
    action(1, 0, 0)
}

function action(e, c, b) {
    if (status == 0 && e == 0) {
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
            cm.curNodeEventEnd(true);
            cm.eventSKill(0);
            cm.setInGameDirectionMode(true, false, true);
            cm.npc_ChangeController(9112009, "oid=3631048", 200, -154, 39, 150, 250, 1, false, 0, false);
            cm.npc_SetSpecialAction("oid=3631048", "summon", 0, 0);
            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
            cm.inGameDirectionEvent_AskAnswerTime(1200)
        } else {
            if (status === a++) {
                cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                cm.inGameDirectionEvent_AskAnswerTime(1400)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("噢噢噢噢噢！！！这就是黑色圣水！\r\n谢谢你，我一定会重谢！", 37, 9112009, false, true)
                } else {
                    if (status === a++) {
                        cm.inGameDirectionEvent_AskAnswerTime(1500)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("爽！味道真好！", 37, 9112009, false, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("嗯？这感觉……", 37, 9112009, true, true)
                            } else {
                                if (status === a++) {
                                    cm.inGameDirectionEvent_AskAnswerTime(1500)
                                } else {
                                    if (status === a++) {
                                        cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotionBalloon/exclamation3", "oid=3631048"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                        cm.sendNormalTalk_Bottom("……浑身，浑身充满了力量啊？！", 37, 9112009, false, true)
                                    } else {
                                        if (status === a++) {
                                            cm.npc_LeaveField("oid=3631048");
                                            cm.npc_LeaveField("oid=3631048");
                                            cm.eventSKill(0);
                                            cm.setInGameDirectionMode(false, true, false);
                                            var d = em.getMonster(9400036);
                                            d.setSize(500);
                                            cm.getMap().spawnMonsterOnGroundBelow(d, new java.awt.Point(200, -148));
                                            cm.forceCompleteQuest(58744);
                                            cm.gainItem(4034857, -1);
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