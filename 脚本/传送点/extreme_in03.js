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
            cm.sendNormalTalk("#b极限已中止入场，#k\r\n我们会以全新的面貌再来为您服务~！\r\n\r\n#b#eComing Soon！#k#n\r\n", 4, 9071006, false, false)
        } else {
            cm.dispose()
        }
    }
};