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
            cm.sendNormalTalk("#p1012108#说什么？", 8, 1012003, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("#b(我把听到的内容转达给了#p1012108#。)#k", 2, 1012003, true, true)
            } else {
                if (status === a++) {
                    cm.askAcceptDecline("拿着人偶的小家伙？不得不叫人怀疑。一定是他让怪物们变得残暴的。", 0, 1012003)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("#m100000000#的和平已经被打破…………这种恶行绝对不能饶恕…………看来我得提醒村民们最近一定要多加小心。", 9, 1012003, false, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("#b（怪物们变得凶暴的原因找到了。现在把搜集到的情报告诉#p1002104#吧。）#k\r\n\r\n #r ※ 自动移动到任务地图。#k", 2, 1012003, true, true)
                        } else {
                            if (status === a++) {
                                cm.dispose();
                                cm.forceStartQuest(21716, "");
                                cm.warp(104000004, 0, false)
                            }
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/21716.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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