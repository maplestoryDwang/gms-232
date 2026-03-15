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
            cm.sendNormalTalk_Bottom("#h0#，你这次也做成了一件大事啊？", 37, 1530020, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("既消灭了尘土，演出又很帅气啊。", 37, 1530020, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("不是吗，莉莉？", 37, 1530020, true, true)
                } else {
                    if (status === a++) {
                        cm.forceStartQuest(33527, "");
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
            cm.sendNormalTalk_Bottom("有一点……帅气吧？", 37, 1530040, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("总之，这次也辛苦你了。", 37, 1530040, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("嗯……我要给你蕴含着所有回忆的礼物。", 37, 1530040, true, true)
                } else {
                    if (status === a++) {
                        cm.forceCompleteQuest(33530);
                        cm.finishAchievement(1211);
                        cm.gainExp(Math.pow(cm.getLevel(), 3));
                        cm.forceCompleteQuest(33533);
                        cm.forceCompleteQuest(33536);
                        cm.updateInfoQuest(32720, "sms=199");
                        cm.updateInfoQuest(32719, "sms=1;gal=1;add=0");
                        cm.forceCompleteQuest(33527);
                        cm.gainItem(4310125, 2);
                        cm.gainItem(3015119, 1);
                        cm.dispose()
                    }
                }
            }
        }
    }
};