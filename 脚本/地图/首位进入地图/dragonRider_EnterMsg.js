var status = -1;
var selectionLog = [];

function start() {
    action(1, 0, 0)
}

function action(d, c, b) {
    if (status == 0 && d == 0) {
        cm.dispose();
        return
    }
    status++;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status === a++) {
            switch (cm.getMapId()) {
                case 240080100:
                    cm.showMapEffect(true, 5120026, "消灭所有的天空老鹰和天空大雕！", 15, false);
                    break;
                case 240080200:
                    cm.showMapEffect(true, 5120026, "消灭天空老鹰和天空大雕！", 15, false);
                    break;
                case 240080300:
                    cm.showMapEffect(true, 5120026, "消灭幻龙，进入天空巢穴！", 15, false);
                    break;
                case 240080400:
                    cm.showMapEffect(true, 5120026, "需在3分钟内所有队员通过障碍物，进入天空巢穴!", 15, false);
                    break;
                case 240080500:
                    cm.showMapEffect(true, 5120026, "消灭骚扰神木村的御龙魔！", 15, false);
                    break;
                default:
                    break
            }
            cm.dispose()
        }
    }
};