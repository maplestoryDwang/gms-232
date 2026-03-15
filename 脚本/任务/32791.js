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
            cm.sendNormalTalk_Bottom("结果，弗朗西斯的单相思以失败而告终了。唉，这不是常有的事嘛。怎么说呢，应该是命里有时终须有，命里无时莫强求吧？", 37, 1530040, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("不管怎样，这次还是辛苦你了，#h0#。以后在学校里还要多多帮忙啊。", 37, 1530040, true, true)
            } else {
                if (status === a++) {
                    cm.forceStartQuest(32791, "");
                    cm.forceCompleteQuest(32791);
                    cm.forceCompleteQuest(32702);
                    cm.finishAchievement(1207);
                    cm.updateInfoQuest(32720, "sms=94");
                    cm.gainItem(4310125, 2);
                    cm.dispose();
                    cm.warp(330002218, 0)
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