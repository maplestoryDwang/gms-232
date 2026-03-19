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
            if (!cm.isQuestFinished(64760)) {
                cm.askAcceptDecline_Bottom("#h0#？！不是那里，是这儿！你必须回到远征队本部~~！\r\n你是不是有急事，#b所以想回到之前的地方啊？", 36, 9401023)
            } else {
                cm.askAcceptDecline_Bottom("你想回到之前的地方吗？", 36, 9401023)
            }
        } else {
            if (status === a++) {
                cm.dispose();
                cm.warp(cm.getNumberFromQuestInfo(64759, "rMap"), 0)
            }
        }
    }
};