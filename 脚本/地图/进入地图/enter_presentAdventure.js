var status = -1;
var selectionLog = [];

function start() {
    action(1, 0, 0)
}

function action(d, c, b) {
    if (cm.isQuestFinished(32308)) {
        cm.dispose();
        return
    }
    if (status == 0 && d == 0) {
        cm.dispose();
        return
    }
    status++;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status === a++) {
            cm.sendNormalTalk("是走廊吗？明明应该是时间神殿，可这里为何一片昏暗。而且连呼吸都很困难。", 17, 0, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("不过，既然来了，不能就这么回去。往前走到底试试吧。", 17, 0, true, true)
            } else {
                if (status === a++) {
                    if (!cm.isQuestFinished(32308)) {
                        cm.forceStartQuest(32308, "")
                    }
                    cm.dispose()
                }
            }
        }
    }
};