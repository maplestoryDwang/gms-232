var status = -1;

function start() {
    action(1, 0, 0)
}

function start(c, b, a) {
    if (cm.getNumberFromQuestInfo(34266, "enter") > 0 && cm.getNumberFromQuestInfo(34266, "book") > 0) {
        start1(c, b, a)
    } else {
        start2(c, b, a)
    }
}

function start1(d, c, b) {
    status++;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            cm.sendNormalTalk_Bottom("#face0##b夏伊#k大人，仪式马上开始了。", 36, 3003408, false, true)
        } else {
            if (status === a++) {
                cm.askYesNo_Bottom("准备好了吗？", 36, 3003408)
            } else {
                if (status === a++) {
                    cm.dispose();
                    cm.warp(940204010, 0)
                }
            }
        }
    }
}

function start2(d, c, b) {
    status++;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            cm.sendOkS_Bottom("好像还有事情没有做完。先去#b封锁区4#k找#b江#k吧。")
        } else {
            if (status === a++) {
                cm.dispose()
            }
        }
    }
}

function end(d, c, b) {
    status++;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            var e = cm.getQuest();
            cm.askYesNo("它的脚本位于： #b /脚本/任务/#e" + e + "#n.js#k你要立刻完成这个任务吗？")
        } else {
            if (status == a++) {
                cm.forceCompleteQuest();
                cm.dispose()
            }
        }
    }
};