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
            if (cm.isQuestFinished(34107)) {
                cm.sendNormalTalk("……记忆之树…… 全部散开了…… 把珍贵的记忆还给我……", 4, 3003110, false, false);
                cm.dispose()
            } else {
                cm.askYesNo("…我正好要去死亡火焰地带…… 如果你也想要去的话，我可以带你一程……\r\n\r\n#b(接受时坐船，移动到忘却之湖。)#k", 4, 3003110)
            }
        } else {
            if (status === a++) {
                cm.sendNormalTalk("……那么，出发……", 4, 3003110, false, true)
            } else {
                if (status === a++) {
                    cm.dispose();
                    cm.warp(450001007, 1, false)
                }
            }
        }
    }
};