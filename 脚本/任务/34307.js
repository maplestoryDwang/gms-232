var status = -1;
var selectionLog = [];

function start() {
    action(1, 0, 0)
}

function start(d, c, b) {
    status++;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            cm.dispose()
        }
    }
}

function stage0(d, c, b) {
    if (status == 0 && d == 0) {
        cm.dispose();
        return
    }(d == 1) ? status++ : status--;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            cm.sendNormalTalk("吃是幸福的事，不停地吃代表着无尽的幸福。我在幸福中不停地吃。那是我的幸福，无尽的幸福。", 4, 3003228, false, true);
            cm.updateInfoQuest(34307, "NpcSpeech=30032281");
            cm.dispose()
        }
    }
}

function stage1(d, c, b) {
    if (status == 0 && d == 0) {
        cm.dispose();
        return
    }(d == 1) ? status++ : status--;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            cm.sendNormalTalk("舞动吧，世界。舞动吧，人生。那就是幸福。没有烦恼与忧虑的世界，就是幸福的世界。", 4, 3003229, false, true);
            cm.updateInfoQuest(34307, "NpcSpeech=30032281/30032292");
            cm.dispose()
        }
    }
}

function stage2(d, c, b) {
    if (status == 0 && d == 0) {
        cm.dispose();
        return
    }(d == 1) ? status++ : status--;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            cm.sendNormalTalk("(咳！) 我，我很幸福。因为我可以吃得饱饱的。", 4, 3003215, false, true);
            cm.updateInfoQuest(34307, "NpcSpeech=30032281/30032292/30032153");
            cm.dispose()
        }
    }
}

function stage3(d, c, b) {
    status++;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            cm.forceCompleteQuest();
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
        if (status == a++) {
            cm.forceCompleteQuest();
            cm.dispose()
        }
    }
};