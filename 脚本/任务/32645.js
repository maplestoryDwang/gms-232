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
            cm.sendNormalTalk("睡着了吗……究竟要救你几次才行啊，小家伙。", 17, 0, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("#b(亚林呼吸还算正常，但严重发烧。现在只能等他好转了。)#k", 5, 2510030, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("也许……不，不要想得那么悲观。\r\n先看看情况吧。", 17, 0, true, true)
                } else {
                    if (status === a++) {
                        cm.dispose();
                        cm.warp(302090405, 0)
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
        if (status == a++) {
            cm.sendNormalTalk("终极光明只有在终极黑暗中才能发现……这是什么意思呢，白魔法师？", 17, 0, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("全身的血液都冰冷冰冷的。\r\n…当然不能乱猜测。但是确实不对劲。", 17, 0, true, true)
            } else {
                if (status === a++) {
                    cm.forceCompleteQuest(32645);
                    cm.dispose()
                }
            }
        }
    }
};