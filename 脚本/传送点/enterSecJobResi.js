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
            if (cm.isQuestActive(23121)) {
                cm.warp(931000420, 0, false);
                cm.killAllMob();
                cm.playerMessage(-1, "小偷发动了袭击！击退小偷，然后去找飞行员红狗。");
                cm.playerMessage(5, "受到了盗贼的袭击！击退盗贼，寻找飞行员红狗吧。");
                cm.spawnMobLimit(9300414, 1, -477, -14, 100);
                cm.spawnMobLimit(9300414, 1, 361, -14, 100);
                cm.spawnMobLimit(9300414, 1, 189, -14, 100);
                cm.spawnMobLimit(9300414, 1, 42, -14, 100);
                cm.npc_ChangeController(2159202, "oid=248566", 156, -230, 25, 106, 206, 0, false, 0, false)
            } else {
                if (cm.isQuestActive(23023) || cm.isQuestActive(23024) || cm.isQuestActive(23025) || cm.isQuestActive(23162)) {
                    cm.playerMessage(-1, "席勒出现了！接近他，并跟他谈谈吧。");
                    cm.playerMessage(5, "席勒出现了！接近他，并跟他谈谈吧。");
                    cm.warp(931000100, 0, false)
                } else {
                    cm.warp(310000010, 1, false)
                }
            }
            cm.dispose()
        }
    }
};