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
            cm.sendNormalTalk_Bottom("喂？弗朗西斯？ ", 56, 1530140, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("May Day！May Day！Bravo！Charlie #ho#！！我现在在神兽国际学校旧楼吱吱吱吱~可怕的精灵~救我~吱吱吱吱~！！", 37, 1530140, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("不要发出那种怪声，好好说话！", 56, 1530140, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("…………", 37, 1530140, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("弗朗西斯？！弗朗西斯！！", 56, 1530140, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("电话挂断了……他好像说了神兽国际学校旧楼？究竟发生了什么事情呢？快去看看吧。", 56, 1530140, true, true)
                            } else {
                                if (status === a++) {
                                    cm.updateInfoQuest(32720, "sms=201");
                                    cm.forceStartQuest(33105, "");
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