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
            cm.askYesNo("今天完成 <组队任务 : 侏儒怪皇帝的复活>5次就给你好东西。\r\n#i2614000# #b#t2614000##k，全新最火热的道具哦。嘿嘿，怎么样，要试试吗？", 0, 2022003)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("想的好，做满5次再来吧，嘿嘿", 0, 2022003, false, true)
            } else {
                if (status === a++) {
                    cm.forceStartQuest(56331, "");
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
            cm.forceCompleteQuest();
            cm.dispose()
        }
    }
};