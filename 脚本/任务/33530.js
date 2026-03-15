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
            cm.askYesNo_Bottom("开始进行#b章节6：转学生戴米安和火热的Rock Soul#k吗？", 36, 1530020)
        } else {
            if (status === a++) {
                cm.dispose();
                cm.warp(330002601, 0)
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
            cm.sendNormalTalk_Bottom("刚刚……看他那样子明明就是有意识召唤闹事者的啊。", 56, 0, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("这事情很不寻常。看来必须得回去问问才行。", 56, 0, true, true)
            } else {
                if (status === a++) {
                    cm.forceCompleteQuest(33027);
                    cm.forceCompleteQuest(33038);
                    cm.forceForfeitQuest(33036);
                    cm.dispose();
                    cm.warp(100000004, 0)
                }
            }
        }
    }
};