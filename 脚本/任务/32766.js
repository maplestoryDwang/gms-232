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
            cm.askYesNo_Bottom("采集指纹所需的材料，应该是#b6个铝粉和1个刷子#k就可以了。只要将科学室的怪物消灭，就可以获得了。", 37, 1530030)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("那就辛苦你了。\r\n\r\n#b（搜集6个铝粉和1个刷子后，拿给奥兹吧。）#k", 37, 1530030, false, true)
            } else {
                if (status === a++) {
                    cm.forceStartQuest(32766, "");
                    cm.updateInfoQuest(32720, "sms=54");
                    cm.updateInfoQuest(32719, "sms=1;gal=0;add=0");
                    cm.dispose()
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
            cm.sendNormalTalk_Bottom("#face0#你把采集指纹所需的材料带回来了吗？", 37, 1530110, false, true)
        } else {
            if (status === a++) {
                cm.forceStartQuest(32766, "");
                cm.forceCompleteQuest(32766);
                cm.sendNormalTalk_Bottom("哇，你带回来这么多啊。谢谢你啦。多亏有你帮忙，现在可以采集指纹了。", 37, 1530110, true, false);
                cm.gainItem(4034165, -6);
                cm.gainItem(4034166, -1)
            } else {
                if (status == a++) {
                    cm.dispose()
                }
            }
        }
    }
};