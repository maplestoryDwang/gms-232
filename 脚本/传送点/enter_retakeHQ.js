function enter() {
    if (cm.isQuestActive(31802)) {
        cm.openNpc("赫里希安_守卫营地")
    } else {
        if (cm.getQuestStatus(31800) > 0 && !cm.isQuestFinished(31802)) {
            cm.openScriptNpc()
        } else {
            cm.warp(401000000, "left00")
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
            cm.sendOkS("这里好像情况不妙！先了解下情况吧？")
        } else {
            cm.dispose()
        }
    }
};