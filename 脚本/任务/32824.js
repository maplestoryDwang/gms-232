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
            cm.sendNormalTalk_Bottom("原来我和埃尔文不在期间，发生了那种事情啊。天煞孤星……真是令人悲伤的字眼。", 37, 1530040, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("总之，这次也辛苦你了。没想到即便没有我们，你也能将事情处理得这么好，真是可靠呢。以后也要请你多多帮忙了。", 37, 1530040, true, true)
            } else {
                if (status === a++) {
                    cm.forceCompleteQuest(32824);
                    cm.forceCompleteQuest(32703);
                    cm.finishAchievement(1208);
                    cm.gainItem(4310125, 2);
                    cm.dispose();
                    cm.warp(330002327, 0)
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
            cm.sendNormalTalk_Bottom("看样子是长时间独自生活所积聚的孤独之心造就了这样的闹事者啊。", 56, 0, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("啊，怎么眼睛突然冒汗了……", 56, 0, true, true)
            } else {
                if (status === a++) {
                    cm.forceCompleteQuest(32823);
                    cm.gainExp(Math.pow(cm.getLevel(), 3));
                    cm.forceCompleteQuest(32842);
                    cm.forceForfeitQuest(33036);
                    cm.dispose();
                    cm.warp(330002318, 1)
                }
            }
        }
    }
};