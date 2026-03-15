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
            cm.askYesNo_Bottom("喏，这是本月最畅销的爱情小说目录。你把阅览室的怪物消灭之后就可以获得了。", 37, 1530030)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("那么就辛苦你了！一共有5本书。\r\n#b（消灭尘土怪，并获得爱情小说吧。）#k", 37, 1530030, false, true)
            } else {
                if (status === a++) {
                    cm.forceStartQuest(32770, "");
                    cm.updateInfoQuest(32720, "sms=62");
                    cm.dispose()
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
            cm.sendNormalTalk_Bottom("你把爱情小说找回来了吗？", 37, 1530140, false, true);
            cm.gainItem(4034167, -1);
            cm.gainItem(4034168, -1);
            cm.gainItem(4034169, -1);
            cm.gainItem(4034170, -1);
            cm.gainItem(4034171, -1)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("谢谢你，#h0#！还是你最好了！\r\n这回我一定要参考这些小说，写出最棒的情书！", 37, 1530140, true, true)
            } else {
                if (status === a++) {
                    cm.dispose();
                    cm.warp(330002205, 0)
                }
            }
        }
    }
};