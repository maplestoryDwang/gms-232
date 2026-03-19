function enter() {
    cm.openScriptNpc()
}
var status = -1;
var selectionLog = [];
var npcs = [9400920, 9400921, 9401160];

function start() {
    action(1, 0, 0)
}

function action(e, d, c) {
    (e == 1) ? status++ : status--;
    var b = -1;
    if (status <= b++) {
        cm.dispose()
    } else {
        if (status === b++) {
            var a = cm.getNumberFromQuestInfo(500773, "manager");
            cm.askMenu_Bottom("#face1#你想去哪里呢？\r\n#L0#前往我的小屋#l\r\n#L9#离开我的小屋#l", 36, npcs[a])
        } else {
            if (status === b++) {
                cm.dispose();
                if (c == 0) {
                    cm.updateInfoQuest(64590, "rMap=" + cm.getMapId());
                    cm.dispose();
                    if (cm.getPlayer().getQuestStatus(64591) == 1) {
                        cm.warp(871000011)
                    } else {
                        if (cm.getNpc() == cm.getPlayer().getAccountId()) {
                            cm.enterHome(0)
                        } else {
                            cm.enterHome(cm.getNpc())
                        }
                    }
                } else {
                    cm.warp(cm.getNumberFromQuestInfo(64590, "rMap"))
                }
            }
        }
    }
};