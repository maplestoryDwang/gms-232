var status = -1;

function start(c, b, a) {
    if (c == 1) {
        status++
    } else {
        status--
    }
    if (status == 0) {
        cm.forceStartQuest();
        cm.dispose()
    }
}

function end(c, b, a) {
    if (c == 1) {
        status++
    } else {
        status--
    }
    if (status == 0) {
        cm.sendNext("找到#b#t4033825##k了吗？")
    } else {
        if (status == 1) {
            cm.sendNextPrev("太好咯。这样就能使用魔法了。稍等哦……")
        } else {
            if (status == 2) {
                cm.removeAll(4033824);
                cm.removeAll(4033825);
                cm.warp(101070010, 0);
                cm.gainExp(4748);
                cm.forceCompleteQuest();
                cm.dispose()
            }
        }
    }
};