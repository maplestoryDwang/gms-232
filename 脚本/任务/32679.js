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
            cm.sendNormalTalk_Bottom("是掉队的士兵。伤口很深，已经不行了。", 56, 0, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("天啊……愿他的灵魂平安返回故乡。", 36, 2550002, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("回去吧。没人能在这里活下去。\r\n我们可不是来奏哀乐的。", 56, 0, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("那个……其实。", 36, 2550002, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("怎么了？", 56, 0, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("内城里还有#b2名生存者#k。我刚刚用探测魔法感觉到了。", 36, 2550002, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("唔，那里面……还有人活着？", 56, 0, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("虽然打道回府才是正确的选择，但是……", 36, 2550002, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("去看一眼，立刻回来吧。", 56, 0, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.askYesNo_Bottom("通过#b塔楼#k前往内城上层即可。", 36, 2550002)
                                            } else {
                                                if (status === a++) {
                                                    cm.forceStartQuest(32679, "");
                                                    cm.OnStartNavigation(306010200, 0, "east01", 0);
                                                    cm.sendNormalTalk_Bottom("拦着你也没用啊。我也一起……", 36, 2550002, false, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk_Bottom("算了，你的魔力都快见底了。只会给我添麻烦。", 56, 0, true, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk_Bottom("……那好吧。我就在这里等着。\r\n一感到危险，就给我发信号啊。", 36, 2550002, true, true)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.sendNormalTalk_Bottom("好。", 56, 0, true, false);
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