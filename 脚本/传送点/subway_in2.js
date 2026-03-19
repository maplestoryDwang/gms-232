function enter() {
    cm.openScriptNpc()
}
var status = -1;
var selectionLog = [];

function start() {
    action(1, 0, 0)
}

function action(e, c, b) {
    if (status == 0 && e == 0) {
        cm.dispose();
        return
    }(e == 1) ? status++ : status--;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status === a++) {
            var d = "请选择目的地。\r\n#b#e#L0#废都地铁#r(注意：栖息有蝙蝠、幽灵等)#b#n#l";
            if (cm.getQuestStatus(1600) > 0 && !cm.isQuestFinished(1602)) {
                d += "\r\n#e#L10#维修中的地铁#l#n"
            }
            if (cm.isQuestFinished(34400)) {
                d += "\r\n#e#L1#废都塔#l#n"
            }
            cm.askMenu(d, 0, 1052007)
        } else {
            if (status === a++) {
                switch (b) {
                    case 0:
                        cm.dispose();
                        cm.warp(103020100, 2, false);
                        break;
                    case 1:
                        cm.dispose();
                        cm.warp(103041000, 3, false);
                        break;
                    case 10:
                        cm.dispose();
                        cm.warp(931050400, 0);
                        cm.forceStartQuest(1640, "");
                        break
                }
            }
        }
    }
};