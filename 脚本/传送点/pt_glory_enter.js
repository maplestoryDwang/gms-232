var maps = [100020200, 102020300, 101030000, 400010400, 103030100, 105030400, 200020000, 211040100, 230010300, 260010400, 261010101, 221023100, 401020400, 240020100, 220010000, 250010400, 224000120, 240040520, 251010100];

function enter() {
    if (cm.getMapId() == maps[cm.getNumberFromQuestInfo(500799, "index")]) {
        cm.openScriptNpc()
    }
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
            cm.askYesNo("据说消灭时空裂缝内部所有怪物，时空裂缝就会自行消亡。要进入时空裂缝内部吗？", 2, 0)
        } else {
            if (status === a++) {
                cm.playerMessage(5, "进入时空裂缝内部。");
                cm.dispose();
                cm.openNpc("荣耀活动_时空裂缝")
            }
        }
    }
};