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
            if (cm.isQuestActive(35712)) {
                cm.warp(450011510, 1);
                cm.sendNormalTalk_Bottom("咳……那是什么东西？挡在了前面！", 57, 0, false, true)
            } else {
                if (!cm.isQuestFinished(35712)) {
                    cm.playerMessage(-1, "先检查下任务吧！");
                    cm.dispose()
                } else {
                    cm.dispose();
                    cm.warp(450011510, 1)
                }
            }
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("先把挡路的#b绝望之翼#k和#b绝望之刃#k各消灭#r50只#k吧！", 57, 0, true, true)
            } else {
                if (status === a++) {
                    cm.updateInfoQuest(35712, "dir=end;enterinfo=end");
                    cm.gainExp(3523595);
                    cm.dispose()
                }
            }
        }
    }
};