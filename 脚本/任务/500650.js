var status = -1;
var selectionLog = [];

function start(d, c, b) {
    if (status == 0 && d == 0) {
        cm.dispose();
        return
    }(d == 1) ? status++ : status--;
    var a = -1;
    selectionLog[status] = b;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status === a++) {
            cm.sendOk("去#b<操作之神>#k挑战#e神之操作#n吧！\r\n\r\n#b每通过一关，都可以获得在<操作之神>中获得的#b星星数量5倍#k的#b大冒险币#k！", 9062148)
        } else {
            if (status == a++) {
                cm.forceStartQuest();
                cm.forceCompleteQuest();
                cm.dispose()
            }
        }
    }
}

function end(d, c, b) {
    (d == 1) ? status++ : status--;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            cm.dispose()
        }
    }
};