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
            var e = cm.getQuest();
            cm.askYesNo("这个任务的开始脚本还没有修复哦。它的脚本位于： #b 脚本/任务/17619.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
        } else {
            if (status == a++) {
                cm.forceStartQuest();
                cm.dispose()
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/17619.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk("幽灵…… 我的交易品…… 幽灵…… 我的交易品…… ", 0, 9390217, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("啊，原来你在这里啊。", 2, 9390217, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("幽灵…… 我的交易品…… 幽灵……", 0, 9390217, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk(" …… 他的魂好像丢了一半……", 2, 9390217, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("喂。我把丢失的贸易品重新找回来了。", 2, 9390217, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("幽…… 什么！？找回来了！？在哪呢…… 哦！！是真的呢！！这是怎么回事？你在哪找到的？", 0, 9390217, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("那个，就是…… 我抓到了幽灵。", 2, 9390217, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk("是真的吗？我之前还没发现，你真是了不起的冒险家啊！！", 0, 9390217, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk("(你之前是怎么看我的……)", 2, 9390217, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk("十分感谢！！你是我的救命恩人。你有什么愿望就告诉我吧！只要我能做到，我一定会帮你的！", 0, 9390217, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk("是真的吗？", 2, 9390217, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk("当然啦！这是海上男子汉的约定。也是以信任为本的达尼尔拉商团的商人的约定！", 0, 9390217, true, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.forceCompleteQuest(17619);
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
};