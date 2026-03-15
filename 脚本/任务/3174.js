var status = -1;

function start(d, c, b) {
    (d == 1) ? status++ : status--;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            cm.forceStartQuest();
            cm.dispose()
        }
    }
}

function end(d, c, b) {
    (d == 1) ? status++ : status--;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            cm.sendNext("啊，对不起。我太沉迷于回忆了。我马上去玫瑰花园把记忆的东西拿回来。请稍等一下。")
        } else {
            if (status == a++) {
                cm.dispose();
                cm.forceCompleteQuest()
            }
        }
    }
};