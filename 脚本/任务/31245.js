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
            cm.sendNormalTalk("那地方的情况怎么样？\r\n\r\n#b(我把在这里的所见所闻告诉了汉斯。)#k", 4, 1032001, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("唔，绯红的情况确实挺糟糕。你说那地方一切的法制都被无视，魔族之间相互抓捕，用来献祭？那还真是个弱肉强食的世界啊。", 4, 1032001, true, true)
            } else {
                if (status === a++) {
                    cm.askYesNo("关于绯红的信息肯定不只有这些。你去帮助那些不幸的魔族居民，再观察一下那里的情况吧？", 4, 1032001)
                } else {
                    if (status === a++) {
                        cm.forceStartQuest(31245, "");
                        cm.sendNormalTalk("那事情就拜托你了。\r\n\r\n#b(为了找出帮助魔族人的办法，去和#p2134012#对话吧。)#k", 4, 1032001, false, true)
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
    }(d == 1) ? status++ : status--;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            var e = cm.getQuest();
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/31245.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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