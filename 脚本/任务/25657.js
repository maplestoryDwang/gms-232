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
            cm.sendNormalTalk("你的脸色很不好，去办的事情不太顺利吗？", 0, 1032210, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("我不知道该从哪里说起，现在脑子一片混乱。", 2, 1032210, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("你别激动，先静下心来吧。这不像夜光法师你平日的性格啊。", 0, 1032210, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("我不能控制自己的心情。找到终极秘宝时，我见到了欧罗拉的2代宗师。他跟我说了我所不知道的隐秘命运。", 2, 1032210, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("(我把与2代宗师的对话告诉了飞鱼丸。)", 2, 1032210, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("怎么会发生那样的事情……那么露西娅从原来就……？！", 0, 1032210, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("没错，算起来，是我杀了露西娅。也许不是我，老师也不会落得那样的下场。", 2, 1032210, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk("你不该这么想，这一切都是黑魔法师干的坏事！", 0, 1032210, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk("黑魔法师也是我的另一面。", 2, 1032210, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk("……夜光法师。", 0, 1032210, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk("我需要一点时间想一想。", 3, 1032210, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.forceCompleteQuest(25657);
                                                        cm.gainExp(109317);
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/25657.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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