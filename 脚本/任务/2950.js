var status = -1;

function start(c, b, a) {
    if (c == 1) {
        status++
    } else {
        status--
    }
    if (status == 0) {
        cm.askAcceptDecline("你好？我是大贸易商金利奇。我想给你一个特别的机会。冒险岛最好的度假胜地金海滩度假村即将开业，在开业之前我想给你次体验的机会。你想现在就去吗？")
    } else {
        if (status == 1) {
            cm.sendNext("好的，我现在就把你送到金海滩度假村去。")
        } else {
            if (status == 2) {
                cm.forceStartQuest();
                cm.warp(120040300, 0);
                cm.dispose();
                cm.forceCompleteQuest()
            }
        }
    }
}

function end(c, b, a) {
    cm.forceCompleteQuest();
    cm.dispose()
};