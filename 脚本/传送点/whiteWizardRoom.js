function enter() {
    if (!cm.isQuestFinished(32637)) {
        cm.sendNormalTalk("#b(这是白魔法师的研究室。门紧锁着。)#k", 17, 0, false, false);
        return
    } else {
        if (cm.isQuestFinished(32637) && cm.isQuestActive(32638)) {
            cm.openScriptNpc()
        } else {
            cm.warp(302040020, 1)
        }
    }
}
var status = -1;
var selectionLog = [];

function start() {
    action(1, 0, 0)
}

function action(d, c, b) {
    status++;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status === a++) {
            cm.sendNormalTalk("这是白魔法师的研究室……", 17, 0, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("白魔法师不在这里啊。看来是出去了。问问别人去了哪里。", 17, 0, true, true)
            } else {
                if (status === a++) {
                    cm.updateInfoQuest(32628, "nothere =1;arin=1;bang1=1;guard1=1");
                    cm.dispose()
                }
            }
        }
    }
};