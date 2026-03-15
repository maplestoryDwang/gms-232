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
            cm.sendNormalTalk_Bottom("嗯？你们来工地有什么事吗？", 37, 1530639, false, true)
        } else {
            if (status === a++) {
                cm.dispose();
                cm.warp(330002612, 0)
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
            cm.sendNormalTalk_Bottom("你们是谁？", 37, 1530639, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("哦哦，就是这个？", 37, 1530100, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("谢谢，南哈特~", 37, 1530110, true, true)
                } else {
                    if (status === a++) {
                        cm.forceCompleteQuest(33513);
                        cm.dispose()
                    }
                }
            }
        }
    }
};