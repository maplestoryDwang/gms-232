function enter() {
    cm.openScriptNpc()
}
var status = -1;
var selectionLog = [];

function start() {
    action(1, 0, 0)
}
var npcs = [9400920, 9400921, 9401160];

function action(e, d, c) {
    (e == 1) ? status++ : status--;
    var b = -1;
    if (status <= b++) {
        cm.dispose()
    } else {
        if (status === b++) {
            var a = cm.getNumberFromQuestInfo(500773, "manager");
            cm.askMenu_Bottom("#face1#你想去哪里呢？\r\n#L0#前往广场#l\r\n#L9#离开我的小屋#l", 36, npcs[a])
        } else {
            if (status === b++) {
                cm.dispose();
                if (c == 0) {
                    if (cm.getQuestStatus(64595) == 1) {
                        cm.warp(871000012, 1)
                    } else {
                        cm.warp(871000000, 3)
                    }
                } else {
                    cm.warp(cm.getNumberFromQuestInfo(64590, "rMap"))
                }
            }
        }
    }
};