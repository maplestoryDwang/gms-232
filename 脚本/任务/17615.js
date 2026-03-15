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
            cm.sendNormalTalk("打扰了。", 2, 9390217, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("你是？", 0, 9390217, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("你好。我想去达尼尔拉商团，该怎么走呢？", 2, 9390217, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("你是谁？我就是达尼尔拉商团的人，我好像之前没见过你。你找我们商团，是有什么事吗？？如果你想去那工作的话，就跟我说吧。", 0, 9390217, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("我是来找#e#b吉尔伯特·达尼尔拉#k#n的。我有话要对他说。", 2, 9390217, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("你说什么？你以为我们统帅是你的朋友吗？他不是每个人想见就能见的。你还是走吧。", 0, 9390217, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("#b(该死…… 想要见到地位高的人果然不容易。怎么办呢。)#k", 2, 9390217, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.forceCompleteQuest(17615);
                                        cm.dispose()
                                    }
                                }
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
    }(d == 1) ? status++ : status--;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            var e = cm.getQuest();
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/17615.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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