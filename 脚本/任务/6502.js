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
            cm.sendNormalTalk("有什么事吗？嗯？你想观察我？你在说什么啊……奇奇怪怪的。你到底想干什么？你想得到什么？", 0, 1012003, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("#b(#p1012003#一脸怀疑的表情。虽然没有拒绝，但看上去有点不太高兴。这个表情……我好像学会了。)#k", 2, 1012003, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("哼……我很不高兴。\r\n\r\n#fUI/UIWindow2.img/QuestIcon/4/0# \r\n#i5160030# #t5160030#1个", 0, 1012003, true, true)
                } else {
                    if (status === a++) {
                        cm.forceCompleteQuest(6502);
                        cm.sendNormalTalk("#b(在长老斯坦那里学会了怀疑表情！)#k", 2, 1012003, false, true)
                    } else {
                        if (status === a++) {
                            cm.dispose()
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b %SCRIPT_PATH%#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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