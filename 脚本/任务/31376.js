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
            cm.forceCompleteQuest(31376);
            cm.updateInfoQuest(31389, "ex=2");
            cm.sendNormalTalk("真的找到了吗？哇，你们实在是太厉害了呢？", 1, 2192012, false, true);
            cm.gainItem(4036094, -1)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("真是万幸，一收到这个礼物就被我弄丢了，你都不知道我有多难堪呢，谢谢。", 1, 2192012, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("那什么，这点小事嘛，哈哈哈哈。", 5, 2192004, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("哈哈哈哈。", 5, 2192004, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("#b(小声嘀咕)#k如果多檀智的心跳再次攀升，说不定就能表白了！！我会告诉你下一个计划，来找我吧。", 5, 2192004, true, false)
                        } else {
                            if (status === a++) {
                                cm.dispose()
                            }
                        }
                    }
                }
            }
        }
    }
};