var status = -1;

function start(c, b, a) {
    if (c == -1) {
        cm.dispose()
    } else {
        if (c == 1) {
            status++
        }
        if (status == 0) {
            cm.sendNext("你确定你要离开这里吗？挑战贝尔加莫特是很不容易的，这些需要你和伙伴们的努力奋斗，才能打败他！如果你准备好了，我将送你到贝尔加莫特的基地，准备好了吗？")
        } else {
            if (status == 1) {
                cm.warp(802000209, 0);
                cm.dispose()
            }
        }
    }
}

function end(c, b, a) {};