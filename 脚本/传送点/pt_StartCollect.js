function enter() {
    cm.onTeleport(0, 3, cm.getPlayer().getId(), 506, -1320);
    cm.getWeatherEffectNotice("按NPC/采集快捷键可以攀爬绳索！去采集太阳花吧！", 297, 7000, 1);
    cm.fieldEffect_ScreenMsg("Map/Effect.img/gloryGolem/start");
    cm.eventSKill(19, 19, 1, 1, 0, 80001705, 1, 0, 0, 0, 0, 0, 0, 0)
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
            cm.sendOk("这个传送点的脚本尚未修复。\r\n脚本位于： 脚本/传送点/pt_StartCollect.js ", 0)
        } else {
            cm.dispose()
        }
    }
};