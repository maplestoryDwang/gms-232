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
            cm.sendNext("#b(告诉巴缇博士这期间发生的事情。)#k\r\n竟然有这样的事……你等一下。说不定我这里有你需要的东西。")
        } else {
            cm.gainExp(6814);
            cm.forceCompleteQuest();
            cm.dispose()
        }
    }
};