var status = -1;

function start() {
    action(1, 0, 0)
}

function start(d, c, b) {
    status++;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            cm.sendNormalTalk("你要干什么？在这里迷路的话可怎么办。就这样，能找到白魔法师吗？", 5, 2510003, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("在这等会儿，我去找路。", 17, 0, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("让我自己等着？……你不会是要丢下我跑掉吧？", 5, 2510003, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("你敢逃走试试，我一定会追上你，用枪打穿你的身体……我在这里休息。\r\n\r\n(去森林的最右边找路吧。)", 5, 2510003, true, true)
                    } else {
                        if (status === a++) {
                            cm.forceStartQuest(32636, "");
                            cm.dispose()
                        }
                    }
                }
            }
        }
    }
}

function end(d, c, b) {
    status++;
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