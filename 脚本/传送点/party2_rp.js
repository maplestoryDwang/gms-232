function enter() {
    try {
        var a = cm.getEventManager("组队任务_玩具城101层");
        if (a != null && a.getProperty("stage6_" + (cm.getPortal().getName().substring(2, 4)) + "").equals("1")) {
            eim.getPlayers().forEach(function (c) {
                c.getAPI().fieldEffect_SetObjectState(0, "an" + cm.getPortal().getName().substring(2, 4))
            });
            cm.instantMapWarp(parseInt(cm.getPortal().getName().substring(2, 3)) + 2);
            cm.Effect_Mulung();
            cm.getTopMsgFont("正确的组合!", 3, 20, 20, 0)
        } else {
            cm.instantMapWarp(13);
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
            cm.sendOk("这个传送点的脚本尚未修复。\r\n脚本位于： 脚本/传送点/party2_rp.js ", 0)
        } else {
            cm.dispose()
        }
    }
};