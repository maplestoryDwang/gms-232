var status = -1;
var selectionLog = [];

function start(d, c, b) {
    if (status == 0 && d == 0) {
        cm.dispose();
        return
    }(d == 1) ? status++ : status--;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            cm.forceStartQuest();
            cm.dispose()
        }
    }
}

function end(d, c, b) {
    if (status == 0 && d == 0) {
        cm.dispose();
        return
    }(d == 1) ? status++ : status--;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            cm.sendNormalTalk("#b（脑海中的声音再次响起。）\r\n“这个祭品会守护你的灵魂。但是记住，踏入黄金祭坛的瞬间，祭品就会损坏。如果你不去黄金祭坛，重新回来的话，祭品就会重新回到你的手中。”\r\n（沉重的石门打开，走进了#m252030000#。）", 1, 9000098, false, true)
        } else {
            if (status === a++) {
                cm.forceCompleteQuest(3862);
                cm.forceStartQuest(7261, "1");
                cm.gainItem(4033176, -1);
                cm.dispose();
                cm.warp(252030000, 5)
            }
        }
    }
};