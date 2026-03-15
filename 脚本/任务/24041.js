var status = -1;

function start(d, c, b) {
    status++;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status === a++) {
            cm.forceStartQuest(24041, "");
            cm.curNodeEventEnd(true);
            cm.setInGameDirectionMode(true, true, true);
            cm.inGameDirectionEvent_OneTimeAction(5, 0);
            cm.sendNormalTalk("左手可以动……", 17, 0, true, true)
        } else {
            if (status === a++) {
                cm.inGameDirectionEvent_OneTimeAction(6, 0);
                cm.sendNormalTalk("右手也没问题……", 17, 0, true, true)
            } else {
                if (status === a++) {
                    cm.inGameDirectionEvent_OneTimeAction(15, 0);
                    cm.sendNormalTalk("腿也没事。", 17, 0, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("伤全都好了。只是等级……呃呃呃……好想哭……", 17, 0, true, true)
                    } else {
                        if (status === a++) {
                            cm.setInGameDirectionMode(false, true, false);
                            cm.forceCompleteQuest(24041);
                            cm.dispose()
                        } else {
                            cm.dispose()
                        }
                    }
                }
            }
        }
    }
}

function end(d, c, b) {
    status++;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status === a++) {
            cm.forceStartQuest(24041, "");
            cm.curNodeEventEnd(true);
            cm.setInGameDirectionMode(true, true, true);
            cm.inGameDirectionEvent_OneTimeAction(5, 0);
            cm.sendNormalTalk("左手可以动……", 17, 0, true, true)
        } else {
            if (status === a++) {
                cm.inGameDirectionEvent_OneTimeAction(6, 0);
                cm.sendNormalTalk("右手也没问题……", 17, 0, true, true)
            } else {
                if (status === a++) {
                    cm.inGameDirectionEvent_OneTimeAction(15, 0);
                    cm.sendNormalTalk("腿也没事。", 17, 0, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("伤全都好了。只是等级……呃呃呃……好想哭……", 17, 0, true, true)
                    } else {
                        if (status === a++) {
                            cm.setInGameDirectionMode(false, true, false);
                            cm.forceCompleteQuest(24041);
                            cm.dispose()
                        } else {
                            cm.dispose()
                        }
                    }
                }
            }
        }
    }
};