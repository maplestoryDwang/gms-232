var status = -1;

function start(d, c, b) {
    status++;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status === a++) {
            cm.updateInfoQuest(30010, "");
            cm.forceStartQuest();
            cm.dispose()
        } else {
            cm.dispose()
        }
    }
}

function end(d, c, b) {
    status++;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status === a++) {
            cm.forceCompleteQuest();
            cm.dispose()
        } else {
            cm.dispose()
        }
    }
};