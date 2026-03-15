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
            cm.dispose();
            cm.openNpc("副本_好友故事_Act2_单恋闹事者")
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
            cm.sendNormalTalk_Bottom("呼……呼……", 37, 1530140, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("真不幸啊，竟然失去意识了。", 37, 1530050, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("好像只是睡着了吧……", 56, 0, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("单相思必定是充满苦楚的。不论在哪个世界都是如此。", 37, 1530030, true, true)
                    } else {
                        if (status === a++) {
                            cm.forceCompleteQuest(32789);
                            cm.forceCompleteQuest(32792);
                            cm.forceForfeitQuest(33036);
                            cm.dispose();
                            cm.warp(330000500, 0)
                        }
                    }
                }
            }
        }
    }
};