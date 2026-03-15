var status = -1;

function start() {
    action(1, 0, 0)
}

function start(d, c, b) {
    status++;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            cm.forceStartQuest(34467);
            cm.dispose()
        }
    }
}

function end(d, c, b) {
    status++;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            cm.npc_ChangeController(3003330, "oid=200980", 300, 79, 8, 250, 350, 1, false, false);
            cm.npc_ChangeController(3003328, "oid=200981", 642, 79, 12, 592, 692, 1, false, false);
            cm.npc_ChangeController(3003327, "oid=200982", 490, 79, 10, 440, 540, 5, true, false);
            cm.npc_ChangeController(3003325, "oid=200983", -346, 79, 2, -396, -296, 5, true, false);
            cm.sendNormalTalk_Bottom("#face1#你收集到了致命尖叫啊！那，那现在就用这个在树生长的反方向……", 37, 3003301, false, true)
        } else {
            if (status === a++) {
                cm.forceCompleteQuest(34467);
                cm.forceCompleteQuest(34490);
                cm.setInGameDirectionMode(true, false, true);
                cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
                cm.inGameDirectionEvent_AskAnswerTime(600)
            } else {
                if (status === a++) {
                    cm.gainItem(4036099, -50);
                    cm.effect_Voice("Mob.img/8644005/Die", 100);
                    cm.onSetMapObjectCreateLayerMore("tree00", 2, "hit", 0);
                    cm.inGameDirectionEvent_AskAnswerTime(1500)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face6#……", 37, 3003301, false, true)
                    } else {
                        if (status === a++) {
                            cm.inGameDirectionEvent_AskAnswerTime(1000)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#face6#啊，不行，看来光靠致命尖叫似乎还不够。", 37, 3003301, false, true)
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