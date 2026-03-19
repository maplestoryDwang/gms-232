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
            cm.sendNormalTalk_Bottom("你肯定是这个方向吗？", 37, 1540805, false, true)
        } else {
            if (status === a++) {
                cm.askYesNo_Bottom("很肯定！\r\n#b现在就立刻过去吧？#l", 37, 1540807)
            } else {
                if (status === a++) {
                    cm.updateInfoQuest(33901, "rp=4");
                    cm.dispose();
                    cm.openNpc("冒险岛英雄_Act1_潜入雪龟岛")
                }
            }
        }
    }
};