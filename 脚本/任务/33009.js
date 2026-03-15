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
            cm.sendNormalTalk_Bottom("现在发生了十分惊人的事情。什么事情？\r\n你到阅览室来，就知道发生什么事了。", 37, 1530030, false, true)
        } else {
            if (status === a++) {
                cm.askYesNo_Bottom("快来阅览室，我在这里等你。\r\n#b（接受时自动移动到阅览室。）#k", 37, 1530030)
            } else {
                if (status === a++) {
                    cm.forceStartQuest(33009, "");
                    cm.dispose();
                    cm.warp(330001200, 0)
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
            cm.sendNormalTalk_Bottom("这次一下子出现了3个尘土地带。", 37, 1530030, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("你很吃惊吧？没想到实习老师来了之后，学校里会出现如此巨大的感情能量。这就是所谓的爱的力量吗？", 37, 1530030, true, true)
            } else {
                if (status === a++) {
                    cm.forceCompleteQuest(33009);
                    cm.gainExp(Math.pow(cm.getLevel(), 3));
                    cm.dispose()
                }
            }
        }
    }
};