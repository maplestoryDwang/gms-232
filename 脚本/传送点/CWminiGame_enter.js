function enter() {
    var b = cm.getPortal().getId();
    var a = cm.getPortal().getName();
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
            if (cm.getQuestStatus(31259) > 0) {
                cm.askMenu("如果你已经准备好要找出这里面的#r某样特别的东西#k，就确定要进去的地方吧。\r\n\r\n#b#L0#小游戏：消灭幽灵#l#k\r\n#b#L1#小游戏：攀爬城墙#l#k\r\n#b#L2#小游戏：通过陷阱#l#k\r\n", 4, 2134012)
            } else {
                cm.sendNormalTalk("这里暂时无事可做。", 16, 0, false, false);
                cm.dispose()
            }
        } else {
            cm.dispose();
            if (b == 0) {
                cm.openNpc("副本_克林逊森林城堡_消灭幽灵")
            } else {
                if (b == 1) {
                    cm.warp(301050200, 3, false)
                } else {
                    cm.warp(301050300, 0, false)
                }
            }
        }
    }
};