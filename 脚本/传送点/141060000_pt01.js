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
            if (!cm.isQuestFinished(questReq[1])) {
                cm.sendNext("航海士，现在还不能进入这里耶。", 1510006);
                cm.dispose();
                return
            }
            cm.askYesNo("航海士，你要停靠在#b第1观测站#k吗？", 4, 1510006)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("办完事后，你就快点回来吧，航海士。拖拖拉拉的话，我要多收钱的哦？超时计价的钱可是水涨船高的", 5, 1510006, false, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("…………？", 17, 0, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("哈哈哈！我说笑的，你别放在心上。我要停船了。", 5, 1510006, true, true)
                    } else {
                        if (status === a++) {
                            cm.dispose();
                            cm.dispelBuff(80001346);
                            cm.warp(141010000, 0, false)
                        }
                    }
                }
            }
        }
    }
};