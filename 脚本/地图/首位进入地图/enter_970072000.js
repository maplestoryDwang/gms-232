var status = -1;
var selectionLog = [];

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
            cm.getMap().onSyncDynamicFoothold(["urus_hand", "urus_hand_flip", "urusfall", "urusfallflip"], [0, 0, 0, 0], [0, 0, 0, 0], [1500, 1500, -1100, -1100], [-4000, -4000, -4000, -4000]);
            cm.effect_PlayMusic("Bgm44.img/TheKingOfDestruction");
            cm.getWeatherEffectNotice("我要打倒乌鲁斯, 夺得马修勒的黄金！", 194, 10000, 1);
            cm.dispose();
            cm.enableActions()
        }
    }
}

function start() {
    status = -1;
    action(1, 0, 0)
};