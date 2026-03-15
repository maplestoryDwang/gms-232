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
            cm.askAcceptDecline("#b#h0##k！你能马上到圣地来一趟吗？我有紧急的事情想跟你说。情况非常紧急，请尽快过来。", 0, 1101002)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("#b#h3##k，我会用神兽的力量立即把你传送到圣地。", 1, 1101002, false, true)
            } else {
                if (status == a++) {
                    cm.forceStartQuest(30000);
                    cm.warp(913080000, 0);
                    cm.dispose()
                }
            }
        }
    }
};