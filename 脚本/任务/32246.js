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
            cm.sendNormalTalk("嗯……那么，现在该做什么呢？", 16, 0, false, true)
        } else {
            if (status === a++) {
                cm.askMenu("\r\n#b#L0#吃饭。#l\r\n#L1#去练级。#l\r\n#L2#睡觉。#l\r\n#L3#学习。#l\r\n#L4#找别的事情做。#l", 25, 0)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("好吧，找点别的事情做做！\r\n不过，去哪儿找事情做呢？我总感觉有事情可做，可真正想做的时候又不知道该做什么了。", 16, 0, false, true)
                } else {
                    if (status === a++) {
                        cm.askAcceptDecline("先去#b六岔路口#k看看吧？因为那里是金银岛的中心地。先去那里看看，然后再决定要去哪里吧。\r\n\r\n#r(接受后，立即移动到地图。)#k", 16, 0)
                    } else {
                        if (status === a++) {
                            cm.forceStartQuest(32246, "");
                            cm.dispose();
                            cm.warp(910400200, 0, false)
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/32246.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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