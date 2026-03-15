var status = -1;

function start(c, b, a) {
    if (c == -1) {
        cm.dispose()
    } else {
        if (c == 1) {
            status++
        }
        if (status == 0) {
            cm.sendNext("在这里很危险！如果你打算挑战它，你需要更多的组队员，你想做什么么？想进去吗？？")
        } else {
            if (status == 1) {
                cm.warp(802000109, 0);
                cm.dispose()
            }
        }
    }
}

function end(c, b, a) {};