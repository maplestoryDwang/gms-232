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
            cm.dispose();
            cm.openNpc("副本_好友故事_Act1_怒拳闹事者")
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
            cm.sendNormalTalk_Bottom("呃呃……不要无视我……我可是这所学校的老大……", 37, 1530232, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("……你还好吗？", 56, 1530232, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("……妈妈，这汤太咸了……（嘟哩嘟囔）……\r\n#b（身上没有受伤，估计过一会儿自己就会醒过来了。）#k", 37, 1530232, true, true)
                } else {
                    if (status === a++) {
                        cm.forceCompleteQuest(32716);
                        cm.forceCompleteQuest(32755);
                        cm.gainExp(Math.pow(cm.getLevel(), 3));
                        cm.forceForfeitQuest(33036);
                        cm.dispose();
                        cm.warp(330001600, 0)
                    }
                }
            }
        }
    }
};