var status = -1;

function start(c, b, a) {
    cm.dispose()
}

function end(c, b, a) {
    if (c == -1) {
        cm.dispose()
    } else {
        if (c == 1) {
            status++
        } else {
            status--
        }
        if (status == 0) {
            cm.sendNext("绑架小女孩的人一定就是劈坏曼陀罗田的元凶。说不定他的实力很强。")
        } else {
            cm.gainExp(6814);
            cm.forceCompleteQuest();
            cm.dispose()
        }
    }
};