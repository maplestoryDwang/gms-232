function enter() {
    var b = cm.getNumberFromQuestInfo(100272, "lv");
    var a = b >= 15 ? 400 : b >= 11 ? 300 : b >= 8 ? 200 : b >= 4 ? 100 : 0;
    cm.fieldEffect_PlayFieldSound("Sound/Skill.img/131001108/Use", 100);
    cm.特效_角色强制跳跃(500, -1900 - a, 1, 1);
    cm.effect_OnUserEff("Effect/BasicEff.img/platformerJump")
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
            cm.sendOk("这个传送点的脚本尚未修复。\r\n脚本位于： 脚本/传送点/sky_fan_16th.js ", 0)
        } else {
            cm.dispose()
        }
    }
};