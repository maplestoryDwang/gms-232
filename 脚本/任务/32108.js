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
        cm.sendNext("……（校长伊瓦纳陷入了短暂的沉思。)")
    } else {
        if (status == 1) {
            cm.sendNextPrev("我现在还不能完全相信他。不过至少我可以给他松绑了……就当做是对一个热情的学生最起码的照顾吧。")
        } else {
            if (status == 2) {
                cm.removeAll(4033827);
                cm.forceCompleteQuest();
                cm.gainExp(3600);
                cm.dispose()
            }
        }
    }
};