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
            cm.curNodeEventEnd(true);
            cm.setInGameDirectionMode(true, true, true);
            cm.sendNormalTalk("这次真的辛苦了。多亏了伍龚惟命是从，如果他还坚持的话，可能事情就变得更糟了。", 33, 2400008, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("他好像很担心韩太守。他认为是因为自己，韩太守才会被绑架的。", 41, 2400005, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("呜哇，这可真令人感动啊。为弟弟着想的哥哥，哈~真是太棒了。", 33, 2400007, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("真希望你不要只受感动，而是要多学学。", 33, 2400008, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("#face0#你什么时候把我当过哥哥吗！", 33, 2400007, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("本尼迪克是哥哥吗？", 41, 2400006, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("那当然！我还比他大2岁，但是从来没听他喊过我大哥。", 33, 2400007, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk("你得有大哥的样子，我才能叫你大哥啊。", 33, 2400008, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk("阿尔法，那么我们俩谁更大？", 41, 2400006, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk("说什么呢？我们原本是在一起的，是后来才被分开的啊，类似双胞胎的那种。虽然双胞胎也分大小。", 41, 2400005, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk("#face4#嗯……那么我来当姐姐吧。", 41, 2400006, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk("#face0#你在听我说话吗？", 41, 2400005, true, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.updateInfoQuest(41403, "");
                                                            cm.forceStartQuest(41403, "");
                                                            cm.forceCompleteQuest(41403);
                                                            cm.gainExp(2200000);
                                                            cm.setInGameDirectionMode(false, true, false);
                                                            cm.gainItem(4310085, 20);
                                                            cm.gainItem(2001530, 100);
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/41403.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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