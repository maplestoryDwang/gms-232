var status = -1;
var selectionLog = [];

function start(d, c, b) {
    (d == 1) ? status++ : status--;
    var a = -1;
    cm.updateInfoQuest(37150, "00=h0;01=h1;02=h0;03=h0;04=h2;07=h1;08=h0");
    cm.forceStartQuest();
    if (!cm.isQuestActive(37169)) {
        cm.removeAll(4036503);
        cm.removeAll(4220196)
    }
    if (!cm.isQuestActive(37173)) {
        cm.removeAll(4036505);
        cm.removeAll(4220197)
    }
    if (!cm.isQuestActive(37174)) {
        cm.removeAll(4036504)
    }
    if (!cm.isQuestActive(37176)) {
        cm.removeAll(4036506);
        cm.removeAll(4036507);
        cm.removeAll(4220198);
        cm.removeAll(2630243)
    }
    cm.dispose()
}

function end(d, c, b) {
    (d == 1) ? status++ : status--;
    var a = -1;
    cm.dispose()
};