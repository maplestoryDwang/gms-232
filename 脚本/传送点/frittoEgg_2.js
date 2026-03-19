function enter() {
    var d = cm.getPortal().getId();
    var b = cm.getPortal().getName();
    var a = cm.getNumberFromQuestInfo(15142, "Stage");
    if (cm.rand(0, 1) == 0) {
        var c = cm.getPlayer().getPosition();
        cm.fieldEffect_ScreenMsg("monsterPark/clear");
        cm.addNumberForQuestInfo(15142, "Stage", 1);
        cm.onTeleport(0, 0, d - 10, 0, 0)
    } else {
        cm.openScriptNpc()
    }
}
var status = -1;
var selectionLog = [];

function start() {
    action(1, 0, 0)
}

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
            cm.fieldEffect_ScreenMsg("killing/fail");
            var a = cm.getNumberFromQuestInfo(15142, "Stage");
            cm.sendNormalTalk("该死该死……居然在第" + a + "阶段就失败了，下次好好干！", 5, 9001060, false, true)
        } else {
            if (status === b++) {
                cm.dispose();
                cm.warp(993000601, 0, false)
            }
        }
    }
};