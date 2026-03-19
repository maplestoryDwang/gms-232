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
            if (!cm.isQuestFinished(questReq[3])) {
                cm.sendNext("航海士，现在还不能进入这里耶。", 1510006);
                cm.dispose();
                return
            }
            cm.askYesNo("航海士，你要停靠在#b第3观测站#k吗？", 4, 1510006)
        } else {
            if (status === a++) {
                switch (cm.rand(1, 3)) {
                    case 1:
                        cm.sendNormalTalk("好的！我最喜欢陆地了。", 5, 1510006, false, true);
                        break;
                    case 2:
                        cm.sendNormalTalk("好的，航海士。我就让你瞧瞧我高超的停靠技术！", 5, 1510006, false, true);
                        break;
                    case 3:
                        cm.sendNormalTalk("好的，航海士。就按你说的做！", 5, 1510006, false, true);
                        break
                }
            } else {
                if (status === a++) {
                    cm.dispose();
                    cm.dispelBuff(80001346);
                    cm.warp(141030000, 0, false)
                }
            }
        }
    }
};