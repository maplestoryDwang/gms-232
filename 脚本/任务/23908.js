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
            cm.sendNormalTalk("主人！我们加入的组织和#m310000000#的关系好像很可疑，不是吗？我们帮他们执行任务，黑色之翼成员的身份好像逐渐确定下来了……这真的是好事吗？", 0, 1013000, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("成为黑色之翼的成员之后，好像对黑色之翼这个组织却越来越看不懂了。#m310000000#的人们好像很讨厌黑色之翼。黑色之翼真的是好人吗？", 2, 1013000, true, true)
            } else {
                if (status === a++) {
                    cm.askAcceptDecline("我也不知道。总之我们现在能做的，好像只有去了解黑色之翼的任务。不是吗？", 0, 1013000)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("啊～越来越搞不明白了。黑色之翼到底是好组织，还是坏组织？", 0, 1013000, false, false);
                        cm.forceStartQuest(23908, "");
                        cm.forceCompleteQuest(23908);
                        cm.gainExp(1835);
                        cm.dispose()
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/23908.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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