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
            cm.sendNormalTalk_Bottom("#face0#好了，让我们来制作魔法肥料吧。", 36, 3002110, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#首先，我需要#t4036317#！", 36, 3002110, true, true)
            } else {
                if (status === a++) {
                    cm.askAcceptDecline_Bottom("#face0#你去#b#m410000115##k消灭#o2400254#，搜集50个#b#i4036317# #t4036317##k！", 36, 3002110)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#b（虽然不太相信，但还是先去搜集材料吧。）#k", 56, 0, false, true)
                    } else {
                        if (status === a++) {
                            cm.forceStartQuest(34753, "");
                            cm.OnStartNavigation(410000115, 0, "", 0);
                            cm.dispose()
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
            cm.sendNormalTalk_Bottom("#face0#很好！这么多足够了！", 36, 3002110, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#制作高手玛鲁又要出马了！\r\n等一下！我马上来制作肥料！", 36, 3002110, true, true)
            } else {
                if (status === a++) {
                    cm.gainExp(48338098);
                    cm.forceCompleteQuest(34753);
                    cm.updateInfoQuest(34753, "exp=1");
                    cm.gainItem(4036317, -50);
                    cm.dispose()
                }
            }
        }
    }
};