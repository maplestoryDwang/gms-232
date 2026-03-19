function enter() {
    cm.openScriptNpc()
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
            cm.onTeleport(0, 3, cm.getPlayer().getId(), 510, -610);
            cm.sendNewEffects(12, [1000, 217, -420, 0, 0])
        } else {
            if (status === a++) {
                cm.inGameDirectionEvent_AskAnswerTime(1000)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face0#这可怎么办……？", 37, 9400580, false, true)
                } else {
                    if (status === a++) {
                        cm.inGameDirectionEvent_AskAnswerTime(1000)
                    } else {
                        if (status === a++) {
                            cm.inGameDirectionEvent_ForcedFlip10(1, 140);
                            cm.inGameDirectionEvent_AskAnswerTime(1000)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#b抓住我！", 57, 0, false, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNewEffects(19, [0])
                                } else {
                                    if (status === a++) {
                                        cm.inGameDirectionEvent_MoveAction(5);
                                        cm.updateInfoQuest(64078, "chk1=3");
                                        cm.addPopupSay(9400580, 3000, "#face0#唔哇哇哇哇哇哇哇！", "", 0);
                                        cm.addPopupSay(9400595, 3000, "#face0#啪嗒！啪嗒！", "", 0);
                                        cm.inGameDirectionEvent_AskAnswerTime(1000)
                                    } else {
                                        if (status === a++) {
                                            cm.warp(867201550, 0, true);
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