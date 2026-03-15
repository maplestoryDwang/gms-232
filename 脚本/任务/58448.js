var status = -1;

function start(c, b, a) {
    if (c == 1) {
        status++
    } else {
        status--
    }
    if (status == 0) {
        cm.sendNextNoESC_New("#e<训练公告>#n\r\n训练新兵们请参加格斗术训练. 可以跟训练生亚妮·雷恩哈特一起进行训练。", 33, 1)
    } else {
        if (status == 1) {
            cm.forceStartQuest();
            cm.dispose()
        } else {
            cm.dispose()
        }
    }
};