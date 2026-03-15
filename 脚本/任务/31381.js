var status = -1;
var selectionLog = [];

function start(d, c, b) {
    if (status == 0 && d == 0) {
        cm.dispose();
        return
    }(d == 1) ? status++ : status--;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            cm.updateInfoQuest(31389, "ex=1");
            cm.sendNormalTalk("#b(小声嘀咕)#k #h0#，你看看多檀智的心跳。", 0, 2192009, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("好奇怪，好低啊？难道是传感器掉了吗？", 0, 2192009, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("是啊，要是传感器掉了，应该会干脆没有信号的，那这到底是……？", 0, 2192009, true, true)
                } else {
                    if (status === a++) {
                        cm.askAcceptDecline("这可不行，你能不能去帮忙看看#b多檀智#k的状态？", 0, 2192009)
                    } else {
                        if (status === a++) {
                            cm.forceStartQuest(31381, "");
                            cm.sendNormalTalk("要是没什么事情就回来。", 1, 2192009, false, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("#b(试着和多檀智对话)#k", 3, 2192009, true, false)
                            } else {
                                if (status === a++) {
                                    cm.updateInfoQuest(31381, "");
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

function stage0(d, c, b) {
    if (status == 0 && d == 0) {
        cm.dispose();
        return
    }(d == 1) ? status++ : status--;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            cm.updateInfoQuest(31381, "NpcSpeech=21920161");
            cm.dispose()
        }
    }
}

function end(d, c, b) {
    if (status == 0 && d == 0) {
        cm.dispose();
        return
    }(d == 1) ? status++ : status--;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            cm.dispose()
        }
    }
};