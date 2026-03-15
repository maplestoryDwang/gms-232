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
            cm.sendNext("嘿嘿，还挺不错的嘛？我们狐狸刚开始学习打猎的时候也经常会失败。这可是秘密，朵朵在学会打猎之前失败了十次，差点就饿死了。我们背着大人们，偷偷地和他分享食物，他才好不容易活了下来。当然，我们第一次打猎就成功了！", 3002000)
        } else {
            if (status == a++) {
                cm.sendNext("好了，那还是品尝第一个猎物吧。像这样把腿摘掉……触角也摘掉……如果不摘掉的话会很苦呢。还了，这个猎物的腿和触角已经可以吃啦。放在嘴里慢慢咀嚼，会很香的~", 3002000)
            } else {
                if (status == a++) {
                    cm.askAcceptDecline("哦？你不吃？为什么？这个很好吃呢？隐月你不仅长得奇怪，口味也很奇怪呢。你不喜欢油腻的食物？这个营养丰富，对小狐狸很好呢，但吃多了就会觉得太油腻。那你能去搜集其他食物吗？", 3002000)
                } else {
                    if (status == a++) {
                        cm.forceStartQuest();
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/38006.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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