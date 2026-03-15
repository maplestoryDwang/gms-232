var status = -1;

function start(d, c, b) {
    if (d == 1) {
        status++
    } else {
        status--
    }
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status === a++) {
            cm.sendNext("唉……好吧……#h #，那我来告诉你……为什么要叫你过来……", 1012110)
        } else {
            if (status === a++) {
                cm.sendNext("那一天似乎和平常没什么不同……", 1012110)
            } else {
                if (status === a++) {
                    cm.sendNext("那一天，我还跟往常一样折纸飞机玩……", 1012110)
                } else {
                    if (status === a++) {
                        cm.warp(910143000, 0);
                        cm.forceStartQuest();
                        cm.dispose()
                    }
                }
            }
        }
    }
}

function end(c, b, a) {
    status++;
    cm.dispose()
};