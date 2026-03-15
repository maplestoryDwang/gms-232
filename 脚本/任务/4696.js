var status = -1;

function start(c, b, a) {
    if (c == -1) {
        cm.dispose()
    } else {
        if (c == 1) {
            status++
        }
        if (status == 0) {
            cm.sendNext("好了，你即将挑战它了！谢谢……。只是让你知道，敌人可能是非常强大的。你准备好了吗？")
        } else {
            if (status == 1) {
                cm.warp(802000609, 0);
                cm.dispose()
            }
        }
    }
}

function end(c, b, a) {};