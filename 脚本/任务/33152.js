var status = -1;

function start(d, c, b) {
    status++;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status === a++) {
            cm.askMenu_Bottom("队长，抓紧时间！我们快从这里逃出去！\r\n#b#L0# 就是现在！快跳！#l  \r\n#b#L1# 等等！时机还没到！#l", 37, 1540504)
        } else {
            if (status === a++) {
                if (b == 0) {
                    cm.dispose();
                    cm.warp(350011500, 0);
                    cm.getPlayer().scheduleWarpTask(60, cm.getMap(350011600))
                } else {
                    if (b == 1) {
                        cm.dispose();
                        cm.playerMessage(-1, "再准备一下吧！")
                    }
                }
            }
        }
    }
}

function end(d, c, b) {
    status++;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status === a++) {} else {
            cm.dispose()
        }
    }
};