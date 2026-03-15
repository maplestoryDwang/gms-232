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
            cm.sendNormalTalk_Bottom("#h0#，这真的是承载了我最后心意的信啊。", 37, 1530140, false, true)
        } else {
            if (status === a++) {
                cm.askYesNo_Bottom("可是，如果还是我去送信的话，一定又会被汗水浸湿的。所以你可以替我把信送去吗？替我把我的心意转达给她。我会在屋顶紧握双手等着她的。", 37, 1530140)
            } else {
                if (status === a++) {
                    cm.forceStartQuest(32786, "");
                    cm.sendNormalTalk_Bottom("那就拜托你了。\r\n\r\n#b（前往2年级教室去找奥尔卡吧。）#k", 37, 1530140, false, true);
                    cm.gainItem(4030041, 1)
                } else {
                    if (status === a++) {
                        cm.dispose();
                        cm.warp(330000200, 0)
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
            cm.sendNormalTalk_Bottom("我们最近经常见面呢，转校生。你有什么事吗？", 37, 1530180, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("又找奥尔卡？她自言自语说‘得去练习唱歌’，就往音乐室那边去了。", 37, 1530180, true, true)
            } else {
                if (status === a++) {
                    cm.forceStartQuest(32786, "");
                    cm.forceCompleteQuest(32786);
                    cm.dispose()
                }
            }
        }
    }
};