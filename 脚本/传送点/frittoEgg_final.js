function enter() {
    var b = cm.getPortal().getId();
    var a = cm.getPortal().getName();
    cm.fieldEffect_ScreenMsg("monsterPark/clear");
    cm.fieldEffect_复合图片动画(["Map/EffectPL.img/3min/clearS/skeleton_clear", "animation_text01_01", "", ""], [0, 0, 1, 0, 0, 0, 0, 0]);
    cm.fieldEffect_PlayFieldSound("PL_3min/Clear", 100);
    cm.addNumberForQuestInfo(15142, "Stage", 1);
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
            cm.sendOkS("找到龙蛋了！");
            cm.getPlayer().scheduleWarpTask(4, 993000601, 0, false)
        } else {
            cm.dispose()
        }
    }
};