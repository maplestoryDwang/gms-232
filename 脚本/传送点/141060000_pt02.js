var questReq = [32162, 32166, 32172, 32181, 32176, 32186];

function enter() {
    cm.openScriptNpc()
}
var status = -1;
var selectionLog = [];

function start() {
    action(1, 0, 0)
}

function action(d, c, b) {
    if (status == 0 && d == 0) {
        cm.dispose();
        return
    }(d == 1) ? status++ : status--;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status === a++) {
            if (!cm.isQuestFinished(questReq[2])) {
                cm.sendNext("航海士，现在还不能进入这里耶。", 1510006);
                cm.dispose();
                return
            }
            cm.askYesNo("航海士，你要停靠在#b第2观测站#k吗？", 4, 1510006)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("我要停船啦。你没晕船吧？哈哈哈。", 5, 1510006, false, true)
            } else {
                if (status === a++) {
                    cm.dispose();
                    cm.dispelBuff(80001346);
                    cm.warp(141020000, 0, false)
                }
            }
        }
    }
};