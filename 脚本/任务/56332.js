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
            cm.askYesNo("今天完成 <组队任务 : 陷入危险的肯特>5次就给你 #i2614000# #b#t2614000##k。能帮帮我吗？", 0, 9020003)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("谢谢你。帮我5次后再跟我对话吧。", 0, 9020003, false, true)
            } else {
                if (status === a++) {
                    cm.forceStartQuest(56332, "");
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