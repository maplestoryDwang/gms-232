function enter() {
    var a = "b3c_05";
    if (cm.getNumberFromQuestInfo(63485, a) == 0) {
        cm.setNumberForQuestInfo(63485, a, 1);
        cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/switch_push", 100);
        cm.onSetMapTagedObjectVisible(1, "bton_s_b3c_03", 0);
        cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/door_open", 100);
        cm.getMap().onSyncDynamicFoothold(["door_s_b3c_05"], [0], [2], [5713], [-175]);
        cm.dynamicObjMove(5713, -175, 5713, -712, 5713, -175, 1, 0, -1, "door_s_b3c_05")
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
            cm.sendOk("这个传送点的脚本尚未修复。\r\n脚本位于： 脚本/传送点/door_s_b3c_05.js ", 0)
        } else {
            cm.dispose()
        }
    }
};