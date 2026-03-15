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
            cm.sendNormalTalk("真是太令人吃惊了。目前为止从未打开过的现在之门，那里面居然沉睡着被封印的黑魔法师……。而且，弄不好那个封印就会破碎。", 0, 1012100, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("现在不是发愣的时候。#h0#，快去时间神殿吧。这次我也和你一起去。", 0, 1012100, true, true)
            } else {
                if (status === a++) {
                    cm.askAcceptDecline("情况紧急，应该使用特殊的力量直接移动到时间神殿。你准备好了吗？\r\n\r\n#b#e<接受后，立即移动到时间神殿。>#n#k", 0, 1012100)
                } else {
                    if (status === a++) {
                        cm.forceStartQuest(32311, "");
                        cm.dispose();
                        cm.warp(270000000, 0, false)
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/32311.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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