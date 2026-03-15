var status = -1;
var selectionLog = [];

function start() {
    action(1, 0, 0)
}

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
            cm.askYesNo("哇~终于可以得到#i3700350##t3700350#称号了！现在就立刻领取吗？", 4, 1540448)
        } else {
            if (status === a++) {
                cm.forceCompleteQuest(33934);
                cm.sendNormalTalk("称号已经发放！去确认看看吧！", 4, 1540448, false, false);
                cm.gainItem(3700350, 1);
                cm.dispose()
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
            cm.askYesNo("哇~终于可以得到#i3700350##t3700350#称号了！现在就立刻领取吗？", 4, 1540448)
        } else {
            if (status === a++) {
                cm.forceCompleteQuest(33934);
                cm.sendNormalTalk("称号已经发放！去确认看看吧！", 4, 1540448, false, false);
                cm.gainItem(3700350, 1);
                cm.dispose()
            }
        }
    }
};