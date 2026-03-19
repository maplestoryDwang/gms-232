function enter() {
    if (cm.getMap().getNumMonsters() == 0) {
        cm.openScriptNpc()
    } else {
        cm.playerMessage(5, "还有怪物没有消灭干净。")
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
            cm.inGameDirectionEvent_AskAnswerTime(1000)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#啊啊啊啊啊！", 37, 9400580, false, true)
            } else {
                if (status === a++) {
                    cm.inGameDirectionEvent_ForcedFlip(100);
                    cm.sendNormalTalk_Bottom("#b惨叫声？！", 57, 0, true, true);
                    cm.effect_OnUserEff("Effect/OnUserEff.img/emotionBalloon/exclamation3")
                } else {
                    if (status === a++) {
                        cm.playerMessage(-1, "前往发出惨叫声的地方。");
                        cm.inGameDirectionEvent_ForcedFlip10(2, 2000);
                        cm.inGameDirectionEvent_AskAnswerTime(1500)
                    } else {
                        if (status === a++) {
                            cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0)
                        } else {
                            if (status === a++) {
                                cm.warp(867201280, 0);
                                cm.setInGameDirectionMode(false, true, false);
                                cm.dispose()
                            }
                        }
                    }
                }
            }
        }
    }
};