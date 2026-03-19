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
            if (!cm.isQuestFinished(23692)) {
                cm.playerMessage(5, "被奇怪的力量阻挡着。不破坏掉屏蔽膜的话，好像无法进去。");
                cm.dispose()
            } else {
                cm.warp(931060050, 1, false);
                cm.dispose()
            }
        }
    }
};