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
            cm.forceStartQuest(34468);
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
            cm.sendNormalTalk_Bottom("#face1#你收集到了爆炸尖叫啊！那，现在就在这棵树的反方向……", 37, 3003301, false, true)
        } else {
            if (status === a++) {
                cm.forceCompleteQuest(34490);
                cm.forceCompleteQuest(34468);
                cm.setInGameDirectionMode(true, false, true);
                cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
                cm.inGameDirectionEvent_AskAnswerTime(600)
            } else {
                if (status === a++) {
                    cm.gainItem(4036100, -50);
                    cm.effect_Voice("Mob.img/8644006/Die", 100);
                    cm.onSetMapObjectCreateLayerMore("tree00", 2, "die", 0);
                    cm.inGameDirectionEvent_AskAnswerTime(1500)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face2#很好，树的方向已经改变，若是洒下星光，这次可真是……", 37, 3003301, false, true)
                    } else {
                        if (status === a++) {
                            cm.inGameDirectionEvent_AskAnswerTime(1000)
                        } else {
                            if (status === a++) {
                                cm.onSetMapObjectCreateLayerMore("tree00", 2, "die_stand", 1);
                                cm.sendNormalTalk_Bottom("#face0#居，居然如此胡来！", 37, 3003309, false, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("#face0#够了！", 37, 3003309, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("#face1#啊，因为刚刚的那声巨响，树精灵们……", 37, 3003301, true, true)
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
        }
    }
};