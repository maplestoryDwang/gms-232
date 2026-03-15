var status = -1;
var selectionLog = [];

function start(d, c, b) {
    if (status == 0 && d == 0) {
        cm.dispose();
        return
    }(d == 1) ? status++ : status--;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            cm.forceStartQuest();
            cm.dispose()
        }
    }
}

function stage0(d, c, b) {
    if (status == 0 && d == 0) {
        cm.dispose();
        return
    }(d == 1) ? status++ : status--;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            var e = cm.getQuest();
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/17652.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
        } else {
            if (status == a++) {
                cm.forceStartQuest();
                cm.dispose()
            }
        }
    }
}

function end(d, c, b) {
    if (status == 0 && d == 0) {
        cm.dispose();
        return
    }(d == 1) ? status++ : status--;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            cm.sendNormalTalk_Bottom("谁呀。", 32, 9390206, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("请问是班·特来敏吗？", 56, 9390206, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("我是，可是你是哪位？", 32, 9390206, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("我是跑腿来给你送吉尔伯特首领的书信的。", 56, 9390206, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("吉尔伯特？是什么书信？快给我看看。", 32, 9390206, true, true)
                        } else {
                            if (status === a++) {
                                cm.forceCompleteQuest(17652);
                                cm.dispose()
                            }
                        }
                    }
                }
            }
        }
    }
};