function enter() {
    cm.openScriptNpc()
}
var status = -1;
var selectionLog = [];

function start() {
    action(1, 0, 0)
}

function action(c, b, a) {
    if (c == 1) {
        status++
    } else {
        if (status == 0) {
            cm.dispose()
        }
        status--
    }
    if (status == 0) {
        cm.askYesNo("你想结束挑战， 然后退出吗？ ", 0, 2184001)
    } else {
        if (status == 1) {
            cm.warp(262000000, 0, false);
            cm.dispose()
        }
    }
};