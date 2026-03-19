function enter() {
    cm.openScriptNpc()
}
var status = -1;
var selectionLog = [];

function start() {
    action(1, 0, 0)
}

function action(e, d, c) {
    if (status == 0 && e == 0) {
        cm.dispose();
        return
    }(e == 1) ? status++ : status--;
    selectionLog[status] = c;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status === a++) {
            var b = eim.getProperty("stage6");
            if (b != "done") {
                eim.getPlayers().forEach(function (f) {
                    f.getAPI().fieldEffect_ScreenMsg("quest/party/clear");
                    f.getAPI().fieldEffect_PlayFieldSound("Party1/Clear", 100);
                    f.getAPI().npc_ChangeController(2040041, "oid=293451", -139, -219, 225, -189, -89, 1, false, 0, false);
                    f.getAPI().npc_ChangeController(2040047, "oid=293452", 205, -219, 226, 155, 245, 1, false, 0, false);
                    f.getAPI().Effect_Mulung();
                    f.getAPI().onTeleport(1, cm.getPlayer().getId(), -187, -2445);
                    eim.setProperty("stage6", "done");
                    cm.dispose()
                })
            } else {
                cm.warp(922010700, 0, false);
                cm.dispose()
            }
        }
    }
};