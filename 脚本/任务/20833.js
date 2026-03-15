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
            cm.sendNormalTalk("(嘀哩哩哩……嘀嘀……)", 1, 1102113, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("嗯？哪里突然出现了一只小鸟？", 3, 1102113, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("(嘀哩哩，嘀嘀，嘀哩哩哩……)", 1, 1102113, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("我难道有听懂鸟语的能力吗？！我好像听到它在说跟我走……反正在这里等着也挺无聊的，在奇赞回来之前，先跟过去看看吧？", 3, 1102113, true, true)
                    } else {
                        if (status === a++) {
                            cm.forceStartQuest(20833, "");
                            cm.dispose();
                            cm.warp(130030104, 0, false)
                        }
                    }
                }
            }
        }
    }
}

function stage0(d, c, b) {
    if (status == 0 && d == 0) {
        cm.dispose();
        return
    }
    status++;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            var e = cm.getQuest();
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/20833.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            var e = cm.getQuest();
            cm.askYesNo("这个任务的结束脚本还没有修复哦。它的脚本位于： #b /脚本/任务/#e" + e + "#n.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻完成这个任务吗？")
        } else {
            if (status == a++) {
                cm.forceCompleteQuest();
                cm.dispose()
            }
        }
    }
};