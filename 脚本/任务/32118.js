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
            cm.sendNext("#b(跟#p1032101#说了这期间发生的事情。)#k\r\n竟然有这样的事情？这可怎么办啊……请给我点时间让我想一想。")
        } else {
            cm.gainExp(6814);
            cm.forceCompleteQuest();
            cm.dispose()
        }
    }
};