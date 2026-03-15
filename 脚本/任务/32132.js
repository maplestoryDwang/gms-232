var status = -1;

function start(c, b, a) {
    cm.dispose()
}

function end(c, b, a) {
    if (c == -1) {
        cm.dispose()
    } else {
        if (c == 1) {
            status++
        } else {
            status--
        }
        if (status == 0) {
            cm.sendNext("这是孩子们带着感激之情，用花编的手镯。\r\n\r\n望你好好使用。")
        } else {
            cm.forceCompleteQuest();
            cm.forceCompleteQuest(32130);
            cm.dispose()
        }
    }
};