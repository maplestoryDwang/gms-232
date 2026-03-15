var status = -1;

function start(c, b, a) {
    status++;
    if (status == 0) {
        cm.askYesNo("看来咱们得到魔女芭芭拉的家去一趟。嗯……希望勇士你也可以一起去。\r\n\r\n#b#e(接受时，将自动移动。)#n#k", 0, 1510000)
    } else {
        if (status == 1) {
            cm.warp(141040001, 0);
            cm.forceStartQuest();
            cm.dispose()
        }
    }
}

function end(c, b, a) {
    status++;
    cm.dispose()
};