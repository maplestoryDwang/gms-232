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
            cm.fieldEffect_KinesisEXP(Math.pow(cm.getLevel(), 3) / 4);
            cm.updateInfoQuest(61368, "10=1;1=1;2=1;3=1;4=1;5=1;6=1;7=1;8=1;9=1");
            cm.gainExp(Math.pow(cm.getLevel(), 3) / 4);
            cm.effect_Voice("Field.img/masteryBook/EnchantSuccess", 100);
            cm.dispose();
            cm.warp(610061460, 0, true)
        }
    }
};