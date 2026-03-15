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
            cm.sendNormalTalk("我们是卡鲁帕。就算你问我其他问题，我也不会回答。我们村禁止跟异邦人接触。", 4, 1013302, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("去问问其他卡鲁帕吧。", 2, 1013302, true, true)
            } else {
                if (status === a++) {
                    cm.forceStartQuest(35953, "");
                    cm.updateInfoQuest(35953, "");
                    cm.dispose()
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
            cm.sendNormalTalk("异邦人，没有人会跟你说话。我们不欢迎陌生人。", 4, 1013301, false, true)
        } else {
            if (status === a++) {
                cm.updateInfoQuest(35953, "NpcSpeech=10133011");
                cm.dispose()
            }
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
            cm.sendNormalTalk("对，对不起。因为村长禁止我们跟异邦人说话。", 4, 1013300, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("但，但是……。", 4, 1013300, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("（布里好像有什么话想说。）", 2, 1013300, true, true)
                } else {
                    if (status === a++) {
                        cm.gainExp(713849);
                        cm.forceCompleteQuest(35953);
                        cm.dispose()
                    }
                }
            }
        }
    }
};