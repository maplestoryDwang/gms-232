var status = -1;

function start(c, b, a) {
    if (c == 1) {
        status++
    } else {
        status--
    }
    if (status == 0) {
        cm.sendNextNoESC_New("#e<训练公告>#n\r\n练新兵们请参加敏捷性训练. 可以跟训练生克里斯塔·连兹一起进行训练。", 33, 1)
    } else {
        if (status == 1) {
            cm.forceStartQuest();
            cm.dispose()
        } else {
            cm.dispose()
        }
    }
};