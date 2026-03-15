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
            cm.sendNormalTalk_Bottom("#face0#将以前进行过的训练重来一次，感觉还真挺麻烦的吧。下一场训练可以提高练习强度了。", 37, 9130006, true, true)
        } else {
            if (status === a++) {
                cm.askAcceptDecline_Bottom("#face0#虽然拖着沉重的身体训练已经让我变得疲惫不堪，但现在并没有时间去好好休息。好了，快点开始接下来的训练课程吧。", 37, 9130006)
            } else {
                if (status === a++) {
                    cm.forceStartQuest(57405, "");
                    cm.OnStartNavigation(807030100, 0, "", 0);
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
            cm.sendNormalTalk_Bottom("#face0#感觉如何呢？", 37, 9130006, false, true)
        } else {
            if (status === a++) {
                cm.forceCompleteQuest(57405);
                cm.updateInfoQuest(15710, "lasttime=19/11/27/16/24");
                cm.gainExp(1242);
                cm.dispose()
            }
        }
    }
};