function enter() {
    if (cm.isQuestFinished(65443)) {
        cm.playerMessage(5, "空空如也的凯尼斯的别馆。");
        cm.playerMessage(-1, "空空如也的凯尼斯的别馆。")
    } else {
        if (cm.isQuestFinished(65439)) {
            cm.warp(871000003, 1, false)
        } else {
            if (cm.isQuestFinished(65436)) {
                cm.warp(871000085, 1, false)
            } else {
                if (cm.isQuestActive(65436)) {
                    if ("94009251/94009242/94009233".equals(cm.getStringFromQuestInfo(65436, "NpcSpeech"))) {
                        cm.warp(871000084, 0, false)
                    } else {
                        cm.sendOkS_Bottom("先通知其他人吧！")
                    }
                } else {
                    cm.playerMessage(5, "空空如也的凯尼斯的别馆。");
                    cm.playerMessage(-1, "空空如也的凯尼斯的别馆。")
                }
            }
        }
    }
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
            cm.sendOk("这个传送点的脚本尚未修复。\r\n脚本位于： 脚本/传送点/go_amyCafe.js ", 0)
        } else {
            cm.dispose()
        }
    }
};