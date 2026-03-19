function enter() {
    if (!cm.isQuestFinished(64084)) {
        cm.openScriptNpc()
    }
}

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
            cm.inGameDirectionEvent_AskAnswerTime(500)
        } else {
            if (status === a++) {
                cm.sendNewEffects(17, [3000, 1000, 2000, -540, 400])
            } else {
                if (status === a++) {
                    cm.inGameDirectionEvent_AskAnswerTime(3000)
                } else {
                    if (status === a++) {
                        cm.inGameDirectionEvent_ForcedFlip10(1, 200);
                        cm.inGameDirectionEvent_AskAnswerTime(2000)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#b(……艾丽卡抓这个会滑下去的吧……) ", 57, 0, false, true)
                        } else {
                            if (status === a++) {
                                cm.inGameDirectionEvent_AskAnswerTime(250)
                            } else {
                                if (status === a++) {
                                    cm.inGameDirectionEvent_ForcedFlip(1);
                                    cm.inGameDirectionEvent_AskAnswerTime(500)
                                } else {
                                    if (status === a++) {
                                        cm.inGameDirectionEvent_ForcedFlip(-1);
                                        cm.inGameDirectionEvent_AskAnswerTime(500)
                                    } else {
                                        if (status === a++) {
                                            cm.inGameDirectionEvent_ForcedFlip(1);
                                            cm.addPopupSay(9400580, 3000, "#face0##h0#，你还在那儿吧？", "", 0);
                                            cm.inGameDirectionEvent_AskAnswerTime(2000)
                                        } else {
                                            if (status === a++) {
                                                cm.inGameDirectionEvent_ForcedFlip(-1);
                                                cm.sendNormalTalk_Bottom("#b(没办法了，只有先用这个…… ", 57, 0, false, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.inGameDirectionEvent_ForcedFlip(1);
                                                    cm.inGameDirectionEvent_ForcedFlip10(1, 100);
                                                    cm.updateInfoQuest(64084, "chk1=1");
                                                    cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNewEffects(19, [1000])
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
                }
            }
        }
    }
};