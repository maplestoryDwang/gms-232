var status = -1;

function start(d, c, b) {
    (d == 1) ? status++ : status--;
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
    (d == 1) ? status++ : status--;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            cm.sendOk("#t4032833#啊，如果弄丢了就回来找我吧，做过一次的钥匙是很容易重新制做的。反正我留在这里就是为了给你制作钥匙，你不用过意不去。");
            cm.forceCompleteQuest();
            cm.gainItem(4000626, -100);
            if (!cm.haveItem(4032833)) {
                cm.gainItem(4032833, 1)
            }
            cm.dispose()
        }
    }
};