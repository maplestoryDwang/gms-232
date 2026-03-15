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
            cm.sendNormalTalk_Bottom("#face1#嗯…大家好奇怪。\r\n第一次见面就说这么过分的话。\r\n什么笨蛋啊什么的。", 36, 2155121, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("不过，它们好像也不是什么坏人，还要帮助修复芯片。\r\n虽然芯片碎片搜集起来很困难，可能要耗费些时间…", 36, 2155104, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#b据说如果你完成越多委托，我的芯片就能越快被修复？#k", 36, 2155104, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face0#我得尽快回到那里才行。\r\n啊…那里。没错，那里。我必须要回去。我要回去。\r\n我整理好记忆后，一定会喊你的，到时候一定要帮助我", 36, 2155121, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face1#我一定要回去，一定要。\r\n嗯…\r\n不过，我说我要去哪里？", 36, 2155121, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#face1##b你能和我对话，随时查看我的状态吗？\r\n#k拜托你了。", 36, 2155121, true, true)
                            } else {
                                if (status === a++) {
                                    cm.forceStartQuest(39204, "");
                                    cm.gainExp(60623436);
                                    cm.updateInfoQuest(39204, "gExpCheck=1");
                                    cm.forceCompleteQuest(39204);
                                    cm.updateInfoQuest(39200, "gExpCheck=1;0q=1;1q=1;2q=1;3q=1;story=0");
                                    cm.updateInfoQuest(39200, "gExpCheck=1;0q=1;1q=1;2q=1;3q=1;story=1");
                                    cm.updateInfoQuest(39200, "gExpCheck=1;0q=1;1q=1;2q=1;3q=1;dqCount=0;story=1");
                                    cm.updateInfoQuest(39100, "av=1");
                                    cm.sendNormalTalk("#b现在开始可以在机械坟墓执行每日任务了。", 3, 0, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk("#b完成每日任务，即可逐渐修复笨蛋的芯片。#k\r\n#k（#r如果和笨蛋对话#k，可以查看修复状态。）", 3, 0, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk("#r独眼#b曾提起过#b#r“坚持完成委托的报答”#b。\r\n#k（向他询问关于报答的事情吧。）", 5, 2155000, true, true)
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/39204.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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