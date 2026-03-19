function enter() {
    cm.openScriptNpc()
}
var status = -1;
var selectionLog = [];

function start() {
    action(1, 0, 0)
}

function action(e, c, b) {
    (e == 1) ? status++ : status--;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status === a++) {
            cm.askYesNo("要回原来的地方吗？", 4, 9130102)
        } else {
            if (status === a++) {
                var d = parseInt(cm.getInfoQuest(783000000));
                if (isNaN(d) || d < 1) {
                    d = 950000100
                }
                cm.warp(d, 0);
                cm.dispose()
            }
        }
    }
};