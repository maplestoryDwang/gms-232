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
    if (cm.getMapId() != 940500000) {
        cm.dispose();
        return
    }
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status === a++) {
            cm.getMap().getReactorByName("exit00").forceHitReactor(cm.getPlayer(), 1);
            cm.curNodeEventEnd(true);
            cm.setInGameDirectionMode(true, false, true);
            cm.setStandAloneMode(true);
            cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
            cm.updateInfoQuest(16926, "date=20/03/01;clearCount=0;missionClearCount=1");
            cm.inGameDirectionEvent_AskAnswerTime(2000)
        } else {
            if (status === a++) {
                cm.curNodeEventEnd(true);
                cm.inGameDirectionEvent_AskAnswerTime(500)
            } else {
                if (status === a++) {
                    cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                    cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                    cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 2147483647, 2147483647, 2147483647)
                } else {
                    if (status === a++) {
                        cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0)
                    } else {
                        if (status === a++) {
                            cm.inGameDirectionEvent_AskAnswerTime(300)
                        } else {
                            if (status === a++) {
                                cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0)
                            } else {
                                if (status === a++) {
                                    cm.setStandAloneMode(false);
                                    cm.setInGameDirectionMode(false, true, false);
                                    cm.updateInfoQuest(16925, "");
                                    cm.npc_ChangeController(3003802, "oid=2332484", 500, 100, 12, 450, 550, 1, false, 0, false);
                                    cm.npc_SetSpecialAction("oid=2332484", "summon", 0, 0);
                                    cm.getWeatherEffectNotice("看到了一个点着几根蜡烛的烛台。", 253, 7000, 1);
                                    cm.lightUpCandle(1, 56228, 3, 1, 9);
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