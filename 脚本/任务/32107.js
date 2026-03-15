var status = -1;

function start(c, b, a) {
    if (c == 1) {
        status++
    } else {
        status--
    }
    cm.forceStartQuest();
    cm.dispose()
}

function end(c, b, a) {
    if (c == 0 && b == 0) {
        status--
    } else {
        if (c == -1) {
            cm.dispose();
            return
        } else {
            status++
        }
    }
    if (status == 0) {
        cm.sendNext("（校长伊瓦纳很仔细地看了那本书。)")
    } else {
        if (status == 1) {
            cm.sendNextPrev("这本书很专业，没有一定的专业知识是没办法看懂了。但是只凭这本书，还是无法证明那个少年的清白。就算我可以读懂这本书，也是无法证明什么的。\r\n（回去找魔法师库迪。)")
        } else {
            if (status == 2) {
                cm.forceCompleteQuest();
                cm.removeAll(4033826);
                cm.gainExp(4800);
                cm.dispose()
            }
        }
    }
};