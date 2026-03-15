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
            cm.askYesNo("今天完成5次 <组队任务 : 逃脱>就送你 #i2614000# #b#t2614000##k作为谢礼。要试试看吗？", 0, 9020005)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("你果然是勇敢的人。帮满5次后再和我对话吧。", 0, 9020005, false, true)
            } else {
                if (status === a++) {
                    cm.forceStartQuest(56333, "");
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
            cm.sendNormalTalk("嗯？好像还没满5次啊？", 0, 9020005, false, false)
        } else {
            if (status == a++) {
                cm.dispose()
            }
        }
    }
};