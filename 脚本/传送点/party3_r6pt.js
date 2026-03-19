function enter() {
    try {
        var a = cm.getEventManager("组队任务_女神塔");
        if (a != null && a.getProperty("stage6_" + (cm.getPortal().getName().substring(2, 5)) + "").equals("1")) {
            eim.getPlayers().forEach(function (c) {
                c.getAPI().fieldEffect_SetObjectState(0, "an" + cm.getPortal().getName().substring(3, 5))
            });
            cm.instantMapWarp(parseInt(pi.getPortal().getName().substring(3, 4)) + 5);
            cm.Effect_Mulung();
            cm.getTopMsgFont("正确的组合!", 3, 20, 6, 0)
        } else {
            pi.instantMapWarp(22);
            cm.getTopMsgFont("错误的组合!", 3, 20, 6, 0)
        }
    } catch (b) {
        cm.getPlayer().dropMessage(5, "Error: " + b)
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
            cm.playerMessage(-1, "未修复的传送点脚本！");
            cm.dispose()
        }
    }
};