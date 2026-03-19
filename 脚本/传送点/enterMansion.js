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
            if (cm.isQuestActive(23925)) {
                cm.warp(931010010, 0, false);
                cm.playerMessage(5, "警卫机器人守卫着住宅！消灭机器人，把嘉比的衣服拿出来吧。");
                cm.playerMessage(-1, "击退机器人，把嘉比的衣服拿出来。");
                cm.spawnMobLimit(9300419, 1, 0, -118, 100);
                cm.spawnMobLimit(9300419, 1, -391, -230, 100);
                cm.spawnMobLimit(9300419, 1, 421, -229, 100);
                cm.spawnMobLimit(9300419, 1, 130, 46, 100);
                cm.spawnMobLimit(9300419, 1, -35, 46, 100);
                cm.spawnMobLimit(9300419, 1, -173, 46, 100);
                cm.npc_ChangeController(2159301, "oid=248685", 226, 46, 2, 176, 276, 1, false, 0, false)
            } else {
                cm.warp(310000004, 1, false)
            }
            cm.dispose()
        }
    }
};