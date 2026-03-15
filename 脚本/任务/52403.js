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
            cm.forceStartQuest(52403, "");
            cm.dispose()
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/52403.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.emotion(1, 10000);
            cm.sendNormalTalk("时间过还满久了。", 16, 0, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("可是父亲不会回来。秀禾出去之后就没有消息了。", 16, 0, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("总之我宏武团的一员。为了父亲要更认真努力！", 16, 0, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("可是我有点困。休息一下再继续修炼。", 16, 0, true, true)
                    } else {
                        if (status === a++) {
                            cm.dispose();
                            cm.warp(743020101, 0, false)
                        }
                    }
                }
            }
        }
    }
};