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
            cm.sendNormalTalk("请帮帮我。我是生活在东侧庭院的卡梅雷安·普比。", 0, 1064005, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("现在东侧庭院被时间术士半半催眠了，所有的东西都停止了。我靠两只眼睛向不同方向转动，才好不容易躲过了半半的催眠，但是东侧庭院中了半半的催眠，时间停止了。", 0, 1064005, true, true)
            } else {
                if (status === a++) {
                    cm.askAcceptDecline("请你一定要消灭掉时间术士半半，解开东侧庭院的催眠效果。", 0, 1064005)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("真是谢谢你。#b半半#k就在和东侧庭院相连的时间缝隙里。消灭掉半半之后，东侧庭院的催眠效果就会解开。", 1, 1064005, false, true)
                    } else {
                        if (status === a++) {
                            cm.forceStartQuest(30014, "");
                            cm.updateInfoQuest(30014, "clear=false");
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
    }(d == 1) ? status++ : status--;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            var e = cm.getQuest();
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/30014.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk("你成功地把半半消灭掉啦！谢谢你。多亏了你，庭院的催眠效果全部解开了！", 0, 1064005, false, true)
        } else {
            if (status === a++) {
                cm.forceStartQuest(30014, "");
                cm.forceCompleteQuest(30014);
                cm.gainExp(2750000);
                cm.dispose()
            }
        }
    }
};