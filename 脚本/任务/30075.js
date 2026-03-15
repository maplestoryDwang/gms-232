var status = -1;

function start(d, c, b) {
    (d == 1) ? status++ : status--;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status === a++) {
            cm.askYesNo("我可以送你到城堡后门入口。\r\n要立即移动吗？\r\n\r\n#b（接受时，将移至城堡后门入口。）")
        } else {
            if (status === a++) {
                cm.warp(106030302, 3);
                cm.dispose()
            } else {
                cm.dispose()
            }
        }
    }
}

function end(c, b, a) {
    status++;
    cm.dispose()
};