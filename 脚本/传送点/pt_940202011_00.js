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
            cm.addPopupSay(3001300, 2500, "#face0#在闪光弹的干扰下,士兵的视线暂时被挡住了。", "", 0);
            cm.addPopupSay(3001300, 2500, "#face0#前往水晶门时小心不要撞见士兵。", "", 0);
            cm.dispose()
        }
    }
};