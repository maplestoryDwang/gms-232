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
            cm.dispose();
            cm.getMap().startSimpleMapEffect("没想到你们居然会闯到这种地方来……不畏惧死亡的勇士们啊，放马过来吧。", 5120077)
        }
    }
};