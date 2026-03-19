function enter() {
    cm.openScriptNpc()
}
var status = -1;
var selectionLog = [];

function start() {
    action(1, 0, 0)
}

function action(f, d, c) {
    if (status == 0 && f == 0) {
        cm.dispose();
        return
    }(f == 1) ? status++ : status--;
    selectionLog[status] = c;
    var b = -1;
    if (status <= b++) {
        cm.dispose()
    } else {
        if (status === b++) {
            var e = [20881];
            pass = false;
            for (var b = 0; b < e.length; b++) {
                if (cm.isQuestActive(e[b]) || (cm.isQuestFinished(e[b]) && !cm.isQuestFinished(20883))) {
                    pass = true
                }
                break
            }
            if (pass) {
                if (cm.getPlayerCount(922030400) == 0) {
                    var a = cm.getEventManager("骑士团_3转任务");
                    a.startInstance(cm.getPlayer(), cm.getMap());
                    cm.playerMessage(5, "进入秘密书库。")
                } else {
                    cm.getTopMsgFont("等一会，里面好像有动静。", 3, 20, 4, 0, 0)
                }
            } else {
                cm.playerMessage(-1, "接受骑士团考验的人才有资格进入。")
            }
            cm.dispose()
        }
    }
};