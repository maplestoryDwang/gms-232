var status = -1;

function start() {
    action(1, 0, 0)
}

function start(d, c, b) {
    status++;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            cm.forceStartQuest(32648, "");
            cm.dispose()
        }
    }
}

function end(d, c, b) {
    status++;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            cm.sendNormalTalk("有什么东西在发光。光是看着，就觉得眼睛得到了净化，是非常纯净的光块。", 0, 2510022, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("这光……是白魔法师的痕迹吗？\r\n连留给自己的最后一束光都要带走吗？。", 16, 0, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("光之结晶好像马上就会消失一样，微弱地发着光。我仿佛看到了曾经纯净的白魔法师最后的模样。", 0, 2510022, true, true)
                } else {
                    if (status === a++) {
                        cm.forceCompleteQuest(32648);
                        cm.dispose()
                    }
                }
            }
        }
    }
};