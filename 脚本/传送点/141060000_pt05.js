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
            if (!cm.isQuestFinished(questReq[5])) {
                cm.sendNext("航海士，现在还不能进入这里耶。", 1510006);
                cm.dispose();
                return
            }
            cm.askYesNo("航海士，你要停靠在#b冰川破坏者的巢穴#k吗？", 4, 1510006)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("谢谢光顾，亲爱的客人。使用费为#b500万金币#k。", 5, 1510006, false, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("…………", 17, 0, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("跟你开玩笑的，航海士。你别那么一本正经的嘛，哈哈哈！我要停船喽。", 5, 1510006, true, true)
                    } else {
                        if (status === a++) {
                            cm.dispose();
                            cm.dispelBuff(80001346);
                            cm.warp(141050000, 0, false)
                        }
                    }
                }
            }
        }
    }
};