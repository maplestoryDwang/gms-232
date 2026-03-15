var status = -1;
var selectionLog = [];

function start(d, c, b) {
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
            cm.forceStartQuest();
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
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            cm.sendNormalTalk("治疗希纳斯病的药，拿回来了吗？", 5, 2520000, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("辛苦你了。这个季节的首要任务就是帮助希纳斯恢复身体。", 5, 2520000, true, true);
                cm.gainItem(4033969, -1)
            } else {
                if (status === a++) {
                    cm.dispose();
                    cm.warp(303090310, 0, false);
                    cm.forceCompleteQuest(32623)
                }
            }
        }
    }
};