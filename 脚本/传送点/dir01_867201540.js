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
            if (cm.getInfoQuest(64078).contains("chk1=2")) {
                cm.dispose();
                return
            }
            cm.onTeleport(0, 3, cm.getPlayer().getId(), 1700, -695);
            cm.inGameDirectionEvent_AskAnswerTime(250)
        } else {
            if (status === a++) {
                cm.inGameDirectionEvent_ForcedFlip10(1, 150);
                cm.inGameDirectionEvent_AskAnswerTime(1000)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#b要下去……这也太高了吧……？", 57, 0, false, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face0#那边也有风！只要从那边的树上跳下去应该就可以了哦？", 37, 9400580, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNewEffects(12, [2000, 1400, -250, 0, 0])
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#b艾丽卡……你还好吗？", 57, 0, false, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("#face0#我紧紧地跟着#h0#呢！", 37, 9400580, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNewEffects(19, [0])
                                    } else {
                                        if (status === a++) {
                                            cm.setInGameDirectionMode(false, true, false);
                                            cm.updateInfoQuest(64078, "chk1=2");
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