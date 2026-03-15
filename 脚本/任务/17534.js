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
            cm.sendNormalTalk("我可以给你挑战强大的贝勒德的机会。", 0, 9390120, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("我每天最多可以送你三把入场时所需的钥匙。", 0, 9390120, true, true)
            } else {
                if (status === a++) {
                    cm.askYesNo("你想领取3把入场钥匙吗？", 0, 9390120)
                } else {
                    if (status === a++) {
                        cm.forceStartQuest(17535, "19/12/08");
                        cm.forceStartQuest(17534, "");
                        cm.forceCompleteQuest(17534);
                        cm.gainItemPeriod(4033981, 3, 1);
                        cm.dispose()
                    }
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
            cm.sendNormalTalk("我在你的灵魂中注入了可以净化贝勒德的气息。", 0, 9390120, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("总有一天他心脏中的灵魂一定会得到净化。", 0, 9390120, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("现在我该消失了。通过我为你打开的这条路，你可以随时再见到我。", 0, 9390120, true, true)
                } else {
                    if (status === a++) {
                        cm.forceCompleteQuest(17523);
                        cm.dispose()
                    }
                }
            }
        }
    }
};