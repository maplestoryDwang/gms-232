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
            cm.playerMessage(-1, "从外星人那儿抢到ID卡，激活电脑吧。");
            cm.getPlayer().scheduleWarpTask(180, 610040230, 1);
            cm.dispose()
        }
    }
};