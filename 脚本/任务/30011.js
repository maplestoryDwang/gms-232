var status = -1;

function start(d, c, b) {
    status++;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status === a++) {
            cm.sendNextNoESC("我在画着王冠的门外感觉到了很强的气息。绝对不能放松警惕！", 1064001)
        } else {
            if (status === a++) {
                cm.updateInfoQuest(30011, "");
                cm.forceStartQuest();
                cm.dispose()
            } else {
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
        if (status === a++) {
            cm.forceCompleteQuest();
            cm.dispose()
        } else {
            cm.dispose()
        }
    }
};