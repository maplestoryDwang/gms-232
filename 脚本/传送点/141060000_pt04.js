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
            if (!cm.isQuestFinished(questReq[4])) {
                cm.sendNext("航海士，现在还不能进入这里耶。", 1510006);
                cm.dispose();
                return
            }
            cm.askYesNo("航海士，你要停靠在#b魔女芭芭拉的家#k吗？", 4, 1510006)
        } else {
            if (status === a++) {
                switch (cm.rand(1, 2)) {
                    case 1:
                        cm.sendNormalTalk("好的，航海士！就按你说的做！", 5, 1510006, false, true);
                        break;
                    case 2:
                        cm.sendNormalTalk("我要停船啦。你没晕船吧？哈哈哈。", 5, 1510006, false, true);
                        break
                }
            } else {
                if (status === a++) {
                    cm.dispose();
                    cm.dispelBuff(80001346);
                    cm.warp(141040000, 0, false)
                }
            }
        }
    }
};