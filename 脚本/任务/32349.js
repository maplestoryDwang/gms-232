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
            cm.sendNormalTalk("那么，综合一下情报吧？虽然封印石有好几个，不过每个封印石中只蕴含着一个大陆的气息……。也就是说，要想把冒险岛恢复原样，就需要冒险岛的封印石，而不是其他大陆的封印石。", 0, 1520035, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("可冒险岛的封印石不是从一开始就不存在嘛。因为数百年前根本不存在冒险岛……。", 4, 1520036, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("借助封印石的力量是不可能的了。总之，只能寻找其他办法。", 4, 1520037, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("真的有其他办法吗？", 4, 1520034, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("没有也得找啊！总不能就这样不管吧。", 4, 1520036, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("……大家这么有干劲真是太好了，可大家都累了，如果没有切实可行的办法的话，今天就到这里，大家去休息吧。", 4, 1520037, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("此言极是。我今天已经筋疲力尽了。", 0, 1520035, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk("那么，大家想到好方法的话，再联系吧。", 16, 1520035, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk("嗯……，就这么办。", 4, 1520034, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk("#h0#，你也累了吧？各位，下次再见吧。", 4, 1520034, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.forceStartQuest(32349, "");
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/32349.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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