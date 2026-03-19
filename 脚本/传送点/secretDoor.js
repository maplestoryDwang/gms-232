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
            if (cm.isQuestFinished(3360)) {
                cm.dispose();
                cm.warp(261030000, 1, false)
            } else {
                cm.askText("请输入密码。\r\n", "", 2111024, 0, 10, 0)
            }
        } else {
            if (status === a++) {
                if (cm.getText() == "4ZDEOV25A1") {
                    cm.forceStartQuest(7062, "11");
                    cm.forceCompleteQuest(3360);
                    cm.forceCompleteQuest(7062);
                    cm.forceCompleteQuest(7061);
                    cm.playerMessage(5, "保安装置已解除。已登记到出入许可名单上。");
                    cm.dispose();
                    cm.warp(261030000, 1, false)
                } else {
                    cm.playerMessage(-1, "密码错误没有反应。");
                    cm.dispose();
                    return
                }
                cm.dispose()
            }
        }
    }
};