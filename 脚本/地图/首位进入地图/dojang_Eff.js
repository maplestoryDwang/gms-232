var status = -1;
var selectionLog = [];

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
            if (cm.getMapId() == 925070100) {
                cm.getMap().startSimpleMapEffect("限制时间是15分钟，要尽早打倒怪物，到下一层去！", 5120024)
            } else {
                eim.restartEventTimer(eim.getTimeLeft(), false)
            }
            var a = (cm.getMapId() % 10000) / 100;
            cm.fieldEffect_PlayFieldSound("Sound/Field.img/Dojang/start");
            cm.fieldEffect_ScreenMsg("Map/Effect.img/dojang/start/stage");
            cm.fieldEffect_ScreenMsg("Map/Effect.img/dojang/start/number/" + a);
            cm.dispose()
        } else {
            cm.dispose()
        }
    }
}

function start() {
    status = -1;
    action(1, 0, 0)
};