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
    var b = -1;
    if (status <= b++) {
        cm.dispose()
    } else {
        if (status === b++) {
            if (cm.getPlayer().getMap().getNumMonsters() == 0) {
                var a = java.lang.Math.random() > 0.9;
                if (a) {
                    cm.warpParty(921160350);
                    eim.getPlayers().forEach(function (f) {
                        f.getAPI().getTopMsgFont("找到了正确的道路。", 3, 20, 20, 0);
                        f.getAPI().addPopupSay(9020005, 4000, "找到了正确的道路，快继续前进吧。")
                    })
                } else {
                    cm.warp(921160300 + ((Math.floor(java.lang.Math.random() * 6) | 0) * 10), 0)
                }
            } else {
                cm.getTopMsgFont("地图剩余怪物：" + cm.getMap().getNumMonsters() + "", 3, 20, 4, 0, 0)
            }
            cm.dispose()
        }
    }
};