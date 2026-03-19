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
            cm.warpParty(cm.getMapId(), 3);
            cm.showMapEffect(true, 5120053, "请快点移动到下一张地图。", 2, false);
            eim.getPlayers().forEach(function (e) {
                e.getAPI().fieldEffect_ScreenMsg("quest/party/clear");
                e.getAPI().fieldEffect_PlayFieldSound("Party1/Clear", 100)
            });
            cm.dispose()
        }
    }
};