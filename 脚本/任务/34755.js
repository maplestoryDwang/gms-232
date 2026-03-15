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
            cm.sendNormalTalk_Bottom("#face0#必须制作更强效的肥料！", 36, 3002110, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#材料可以从周围的#o2400255#身上获得！", 36, 3002110, true, true)
            } else {
                if (status === a++) {
                    cm.askAcceptDecline_Bottom("#face0#你快去#b#m410000117##k消灭#o2400255#，搜集50个#b#i4036319# #t4036319##k！", 36, 3002110)
                } else {
                    if (status === a++) {
                        cm.forceStartQuest(34755, "");
                        cm.OnStartNavigation(410000117, 0, "", 0);
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
            cm.sendNormalTalk_Bottom("#face0#拿来啦！那就开始制作魔法肥料吧！", 36, 3002110, false, true)
        } else {
            if (status === a++) {
                cm.gainExp(48338098);
                cm.forceCompleteQuest(34755);
                cm.updateInfoQuest(34755, "exp=1");
                cm.gainItem(4036319, -50);
                cm.dispose()
            }
        }
    }
};