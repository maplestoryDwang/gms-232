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
            cm.forceStartQuest(41103, "");
            cm.updateInfoQuest(41103, "");
            cm.dispose()
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
            cm.updateInfoQuest(41103, "NpcSpeech=24300051");
            cm.dispose()
        }
    }
}

function stage1(d, c, b) {
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
            cm.updateInfoQuest(41103, "NpcSpeech=24300051/24300092");
            cm.dispose()
        }
    }
}

function stage2(d, c, b) {
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
            cm.updateInfoQuest(41103, "NpcSpeech=24300051/24300092/24300053");
            cm.dispose()
        }
    }
}

function stage3(d, c, b) {
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
            cm.updateInfoQuest(41103, "NpcSpeech=24300051/24300092/24300053/24300094");
            cm.dispose()
        }
    }
}

function stage4(d, c, b) {
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
            cm.updateInfoQuest(41103, "NpcSpeech=24300051/24300092/24300053/24300094/24300055");
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
            cm.sendNormalTalk("卡米拉说对不起？现在才说……你帮我转告她，现在为时已晚，让她快把我借给她的自动笔还给我。", 0, 2430009, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("差不多你们也该见面亲自解决了吧？到底要让我跑几趟啊？你们没有脚还是没有腿啊？我忍无可忍了……", 4, 2400005, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("阿尔法，希娜被你吓到了。", 4, 2400006, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("……所以说，你们见面亲自解决吧。我实在是做不下去了。", 4, 2400005, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("呜哇，我错了。", 0, 2430009, true, true)
                        } else {
                            if (status === a++) {
                                cm.forceCompleteQuest(41103);
                                cm.gainExp(810000);
                                cm.gainItem(4310085, 8);
                                cm.dispose()
                            }
                        }
                    }
                }
            }
        }
    }
};