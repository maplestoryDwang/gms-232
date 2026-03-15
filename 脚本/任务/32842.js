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
            cm.openNpc("副本_好友故事_Act3_天煞孤星闹事者")
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
            cm.sendNormalTalk_Bottom("看样子是长时间独自生活所积聚的孤独之心造就了这样的闹事者啊。", 56, 0, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("啊，怎么眼睛突然冒汗了……", 56, 0, true, true)
            } else {
                if (status === a++) {
                    cm.forceCompleteQuest(32823);
                    cm.forceCompleteQuest(32842);
                    cm.gainExp(Math.pow(cm.getLevel(), 3));
                    cm.forceForfeitQuest(33036);
                    cm.dispose();
                    cm.warp(330002318, 1)
                }
            }
        }
    }
};