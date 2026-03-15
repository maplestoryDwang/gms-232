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
            cm.sendNormalTalk("刚才那些怪物是怎么回事？跟平时见到的怪物好像不太一样。看上去更强、更可怕……。", 4, 1013401, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("跟平时不一样？", 2, 1013401, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("一定是那些#r不祥的人#k造成的。这可怎么办呢？这可怎么办呢？？", 4, 1013401, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("（看来莫里好像看到了#r黑魔法师们#k。）", 2, 1013401, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("什么？他们去了哪里？呃呃……好可怕……但是你也许可以打败他们……。", 4, 1013401, true, true)
                        } else {
                            if (status === a++) {
                                cm.askYesNo("跟，跟我来。我来给你带路。", 4, 1013401)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("必须到#b#m100051020##k去。", 4, 1013401, false, true)
                                } else {
                                    if (status === a++) {
                                        cm.forceStartQuest(35956, "");
                                        cm.updateInfoQuest(35950, "00=h1;01=h0");
                                        cm.updateInfoQuest(35950, "00=h1;01=h0;02=h1");
                                        cm.OnStartNavigation(100051020, 1, "1013402", 35956);
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
            cm.sendNormalTalk("就在这附近。", 4, 1013401, false, true)
        } else {
            if (status === a++) {
                cm.forceCompleteQuest(35956);
                cm.gainExp(713849);
                cm.dispose()
            }
        }
    }
};