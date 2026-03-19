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
            if (cm.haveItem(3018345) || cm.haveItem(3018346) || cm.haveItem(3018347) || cm.haveItem(3018348)) {
                cm.warp(993110100, 2, false)
            } else {
                cm.sendNormalTalk_Bottom("\r\n这里是#b<新复古溜冰场>#k！\r\n请到新复古币商店购买#r<轮滑椅子>#k之后再来吧！", 36, 9062174, false, false, 3)
            }
            cm.dispose()
        }
    }
};