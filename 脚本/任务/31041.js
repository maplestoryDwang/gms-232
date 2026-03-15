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
    if (status == 0 && d == 0) {
        cm.dispose();
        return
    }(d == 1) ? status++ : status--;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            cm.sendOk("谢谢你。这样一来, 孩子们应该会感觉更舒适吧?")
        } else {
            if (status == a++) {
                cm.forceCompleteQuest();
                cm.removeAll(4030033);
                cm.dispose()
            }
        }
    }
};