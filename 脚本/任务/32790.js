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
            cm.sendNormalTalk_Bottom("#h0#吗？我们现在都在医务室呢。", 37, 1530110, false, true)
        } else {
            if (status === a++) {
                cm.askYesNo_Bottom("弗朗西斯没事了。可能因为遭受的打击太大，所以才会昏迷不醒的。你不来医务室安慰安慰他吗？", 37, 1530110)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("我们在医务室等你。\r\n\r\n#b（前往医务室和弗朗西斯对话吧。）#k", 37, 1530110, false, true)
                } else {
                    if (status === a++) {
                        cm.dispose();
                        cm.warp(330002215, 1)
                    }
                }
            }
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