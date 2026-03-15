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
            cm.sendNormalTalk_Bottom("终于…我的芯片完全修复了。\r\n虽然都是碎片拼凑起来的，\r\n但这段时间独眼爷爷为我付出了很多努力…我真的很感谢它。", 36, 2155104, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face1#不过，随着芯片逐渐被修复，我变得越来越焦急了。\r\n我感觉剩下的时间真的不多了，但我不知道为什么…\r\n我的记忆还没有完全恢复。", 36, 2155121, true, true)
            } else {
                if (status === a++) {
                    cm.askYesNo_Bottom("#face0#结果还是要亲自去查明一些事。\r\n#b这次无论发生什么事，我都要坚持到最后。#k\r\n小软柿，你能和我一起去吗？这说不定是最后一次了。\r\n\r\n#g- 如果点击“是”，即可自动移动。", 37, 2155121)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("真的很感谢你。\r\n那，我们走吧？", 37, 2155104, false, true)
                    } else {
                        if (status === a++) {
                            cm.dispose();
                            cm.warp(310070488, 0, false)
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/39209.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk_Bottom("嗯…它受到攻击了吗？\r\n你们在外面偶然相遇，\r\n然后它在逃跑时跌倒，摔碎了芯片？", 37, 2155125, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("…嗯。", 57, 0, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("……", 37, 2155125, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face1#嗯…我必须回去才行啊？\r\n噢？好眼熟的机器人？\r\n啊…我的头…", 37, 2155121, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("……我知道了。", 37, 2155125, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("嗯？", 57, 0, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("小软柿，我相信你。", 37, 2155125, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("…其实。", 57, 0, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("不，我不是相信你没有说谎。\r\n我相信你这么做，都是为了这个孩子。\r\n如果你那么说…那事情应该是那样的。", 37, 2155125, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("…", 57, 0, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk_Bottom("话说，你让我远离这里？", 37, 2155125, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk_Bottom("这是你说的，还是那家伙说的？", 37, 2155125, true, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk_Bottom("嗯……", 57, 0, true, true)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.sendNormalTalk_Bottom("那家伙肯定会继续留在这里吧。\r\n他说有什么事情要做。\r\n或许，是和黑色天堂有关的是事情吧。", 37, 2155125, true, true)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.sendNormalTalk_Bottom("我不离开。\r\n我想其他机器人肯定也是这么想的。", 37, 2155125, true, true)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.sendNormalTalk_Bottom("…不过。", 57, 0, true, true)
                                                                    } else {
                                                                        if (status === a++) {
                                                                            cm.sendNormalTalk_Bottom("#fs22#怎么会有父母抛下子女，独自离开呢？", 37, 2155125, true, true)
                                                                        } else {
                                                                            if (status === a++) {
                                                                                cm.sendNormalTalk_Bottom("……你已经知道了吗？", 57, 0, true, true)
                                                                            } else {
                                                                                if (status === a++) {
                                                                                    cm.sendNormalTalk_Bottom("…我没有证据。\r\n我只是按照感觉做事。\r\n这应该是我们这样的机器人的特征吧？哈哈哈。", 37, 2155125, true, true)
                                                                                } else {
                                                                                    if (status === a++) {
                                                                                        cm.sendNormalTalk_Bottom("你要知道，我们不会离开的。\r\n最后，你能收下这个吗？", 37, 2155125, true, true)
                                                                                    } else {
                                                                                        if (status === a++) {
                                                                                            cm.sendNormalTalk_Bottom("这是什么？", 57, 0, true, true)
                                                                                        } else {
                                                                                            if (status === a++) {
                                                                                                cm.sendNormalTalk_Bottom("这是那个傻瓜放在我仓库里的。\r\n居然想用这种东西来弥补我给它的帮助！真是个坏蛋。\r\n这些东西我不需要，你拿走吧。", 37, 2155125, true, true)
                                                                                            } else {
                                                                                                if (status === a++) {
                                                                                                    cm.sendNormalTalk_Bottom("请不要拒绝。\r\n你就把这当做我给你的报答吧。\r\n以后也要请你多多照顾那家伙，小软柿。", 37, 2155125, true, true)
                                                                                                } else {
                                                                                                    if (status === a++) {
                                                                                                        cm.getTopMsgFont("获得了10个补给型能量核心(A级). ", 3, 20, 20, 0, 0);
                                                                                                        cm.updateInfoQuest(39200, "gExpCheck=1;0q=1;5m=0;1q=1;6m=0;2q=1;3q=1;4q=1;5q=1;6q=1;7q=1;8q=1;9q=1;dqCount=1;story=3");
                                                                                                        cm.gainExp(60623436);
                                                                                                        cm.updateInfoQuest(39209, "gExpCheck=1;enter=1");
                                                                                                        cm.forceCompleteQuest(39209);
                                                                                                        cm.finishAchievement(1146);
                                                                                                        cm.gainItem(4001842, 10);
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
                                }
                            }
                        }
                    }
                }
            }
        }
    }
};