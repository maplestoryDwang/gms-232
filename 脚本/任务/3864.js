var status = -1;

function start(c, b, a) {
    cm.forceStartQuest();
    cm.dispose()
}

function end(d, c, b) {
    if (status == 0 && d == 0) {
        cm.dispose();
        return
    }(d == 1) ? status++ : status--;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            cm.sendNormalTalk("#b(脑海中又一次听见了声音。)\r\n“这个祭品能守护你的灵魂。但是记住，只要你一踏入黄金祭坛，祭品就会被破坏。不要去黄金祭坛，沿原路出来，祭品会再次回到你的手中。”\r\n(随着笨重石门的开启，走进了#m252030000#。)", 1, 9000098, false, true)
        } else {
            if (status === a++) {
                cm.forceCompleteQuest(3864);
                cm.forceStartQuest(7261, "1");
                cm.gainItem(4001684, -1);
                cm.dispose();
                cm.warp(252030000, 5)
            }
        }
    }
};