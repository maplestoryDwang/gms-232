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
            cm.forceStartQuest(32662, "");
            cm.dispose()
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/32662.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk("欢迎你。我是管理这里的#b#p2500002##k。你不会因为我是猴子就吓到了吧？", 0, 2500002, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("你问这里是什么地方吗？这里是 #b次元图书馆#k。\r\n\r\n这里是汇聚世上所有知识和记录的地方。虽然很多人都不知道这个地方，但即便没有专人来书写记录，冒险岛的故事也会自动汇集到这里来，形成书籍。", 0, 2500002, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("呵呵呵，你觉得我在说谎吗？甚至连你也可以成为#b实际存在过的人物#k，进到故事里去呢。要不要亲自去确认一下啊？", 0, 2500002, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("我这里刚好有#b#p2500000##k叼来的书。讲述的都是冒险岛世界实际发生过的事。", 0, 2500002, true, true)
                    } else {
                        if (status === a++) {
                            cm.askAcceptDecline("让我看看……五个全部完成好像太多了。只要你能#b完成三个#k，我就#b送你一份相当不错的礼物#k……好了，你想挑战吗？\r\n\r\n - 吊坠额外栏#e#b（21天期限制）#k#n\r\n\r\n - #i1122263#   #b#t1122263##k", 0, 2500002)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("包含着不同故事的书，可以按任意顺序阅读。你去和#b#p2500000##k谈谈吧。", 0, 2500002, false, false)
                            } else {
                                if (status === a++) {
                                    cm.forceCompleteQuest(32662);
                                    cm.forceStartQuest(32663, "");
                                    cm.forceStartQuest(32664, "");
                                    cm.forceStartQuest(32665, "");
                                    cm.forceStartQuest(32698, "");
                                    cm.forceStartQuest(32990, "");
                                    cm.forceStartQuest(32666, "");
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