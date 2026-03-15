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
            cm.forceStartQuest(20761, "");
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/20761.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk("你来啦。我找你来，是有事想跟你说。", 0, 1101002, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("发生什么事了吗？", 2, 1101002, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("哈哈，没有。只是时候到了。", 0, 1101002, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("......??", 2, 1101002, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("你知道冒险骑士团员必须拥有的最重要的品德是什么吗？那就是#b高贵精神#k。#h0#，你已经打好了基础，所以我想把它告诉你。", 0, 1101002, true, true)
                        } else {
                            if (status === a++) {
                                cm.forceCompleteQuest(20761);
                                cm.teachSkill(10000202, 1, 6);
                                cm.sendNormalTalk("怎么样？有点帮助吗？", 0, 1101002, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("还没全部结束。以后我会再找你的，请到时候再来找我。", 0, 1101002, true, false);
                                    cm.dispose()
                                }
                            }
                        }
                    }
                }
            }
        }
    }
};