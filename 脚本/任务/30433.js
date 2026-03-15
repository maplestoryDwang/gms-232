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
            cm.sendNormalTalk_Bottom("#face0#嗯……好像是缺了点什么……\r\n果然还是得有一头超像鬼的耷拉着的长假发才行。", 37, 2074100, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("果真如此吧？\r\n假发的话……有20个#b#t4034651##k应该就可以做出来了。", 37, 2074127, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face0##b#t4034651##k，那去抓#b#o5100103##k就可以了吧？\r\n好吧，赶紧去收集20个吧。", 37, 2074100, true, true)
                } else {
                    if (status === a++) {
                        cm.forceStartQuest(30433, "");
                        cm.OnStartNavigation(224000120, 0, "", 0);
                        cm.dispose()
                    }
                }
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
            cm.sendNormalTalk_Bottom("好吧，这些应该可以做出假发吧……\r\n稍等一下。", 37, 2074127, false, true)
        } else {
            if (status === a++) {
                cm.curNodeEventEnd(true);
                cm.setInGameDirectionMode(true, false, true);
                cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
                cm.gainExp(568239);
                cm.updateInfoQuest(30433, "gExpCheck=1");
                cm.forceCompleteQuest(30433);
                cm.inGameDirectionEvent_AskAnswerTime(400);
                cm.gainItem(4034651, -20);
                cm.effect_Voice("Field.img/masteryBook/EnchantSuccess", 100)
            } else {
                if (status === a++) {
                    cm.setInGameDirectionMode(false, true, false);
                    cm.dispose()
                }
            }
        }
    }
};