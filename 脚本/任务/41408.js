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
            cm.sendNormalTalk("……卡西亚斯这家伙，没想到他还活着…… 但他居然还是那个样子。他到底为什么要那样啊？！", 5, 2400005, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("…即使那样也很万幸", 5, 2400006, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("万幸……我不知道是不是万幸。这样下去，我们肯定会有一天要和那家伙作战的！", 5, 2400005, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("军团长的提议…… 你要拒绝？", 5, 2400006, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("不是。但是不管是黑魔法师还是他的手下都不是好东西，这点很明确啊。将两个世界合并…… 肯定会有很大的负面影响。", 5, 2400005, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("再加上，那些家伙是女神的仇人。还有，阿卡伊勒就在我面前而我却要忍耐，想想就生气！", 5, 2400005, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("最重要的是我讨厌那家伙！没有原因地讨厌！", 5, 2400005, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk("…………", 5, 2400006, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk("为，为什么？为什么那么看我？我那样不行吗？", 5, 2400005, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk("不是。我也讨厌他。我们果然是一模一样。", 5, 2400006, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk("干嘛好像刚知道…… 啊，对了…… 虽然我们延长了答复他们的时间，但真不知道我们现在该怎么办。", 5, 2400005, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk("我们先了解下冒险岛世界吧？我们一直待在镜世界…… 所以对现在的冒险岛世界一无所知……", 5, 2400006, true, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk("那是当然。而且还得调查一下格兰蒂斯。估计要忙一阵子了……！", 5, 2400005, true, true)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.sendNormalTalk("做完所有我们能做的事情之后…… 然后再战斗……", 5, 2400006, true, true)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.updateInfoQuest(41408, "");
                                                                    cm.forceStartQuest(41408, "");
                                                                    cm.forceCompleteQuest(41408);
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/41408.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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