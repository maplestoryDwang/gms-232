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
            cm.sendNormalTalk("我在报纸上找到了报道。\r\n有相当数量的怪物攻击了#b五洞村#k……", 2, 0, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("你看吧！！我说什么来着！我就说是有这么回事的！", 4, 9062246, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("但是，这件事……\r\n已经有#b10多年了#k，而且……", 2, 0, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("咦！而且什么？可不可以干脆一点！\r\n村庄究竟怎么了！？", 4, 9062246, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("#b只有一个人#k因怪物的攻击而身亡了……", 2, 0, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("就是#b你#k……", 2, 0, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("我，我……？", 4, 9062246, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk("........", 2, 0, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk("也就是说，\r\n牺牲的人就#b只有我一个#k？", 4, 9062246, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk("对……其他人都逃过了一劫……", 2, 0, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk("#fs17#哈哈哈哈！", 4, 9062246, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk("?", 2, 0, true, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk("太好了！那真是太好了！\r\n我吧！从以前开始就没有好好守护过什么！", 4, 9062246, true, true)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.sendNormalTalk("我连朵花都养不好，基本上养一回死一次！ ", 4, 9062246, true, true)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.dispose();
                                                                    cm.warp(993175412, 0, false)
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
    }
    status++;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            var e = cm.getQuest();
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/100440.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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