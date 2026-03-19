function enter() {
    var b = cm.getPortal().getId();
    var a = cm.getPortal().getName();
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
            cm.askYesNo_Bottom("怎么？这就要走了吗？你难道是因为害怕才要走的吗？", 36, 2079000);
            cm.spawnMobLimit(9802000, 1, 1082, 41, 100)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("既然你要走，我也不拦着，走好~", 36, 2079000, false, true)
            } else {
                if (status === a++) {
                    cm.dispose();
                    cm.warp(956100000, 0)
                }
            }
        }
    }
};