function enter() {
    cm.openScriptNpc()
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
    var a = cm.getNumberFromQuestInfo(16192, "Score");
    if (status <= b++) {
        cm.dispose()
    } else {
        if (status === b++) {
            cm.sendNormalTalk_Bottom("你骑着银色野猪跑了#r#e" + a + "M#k#n啊！\r\n有没有感觉到集中力和爆发力在蹭蹭上升呢？\r\n记住不能放松勇士修行YO！", 37, 9062175, false, true, 3)
        } else {
            if (status === b++) {
                cm.setNumberForQuestInfo(500740, "check", Math.max(a, cm.getNumberFromQuestInfo(500740, "check")));
                cm.dispose();
                cm.warp(993110000, 26, false)
            }
        }
    }
};