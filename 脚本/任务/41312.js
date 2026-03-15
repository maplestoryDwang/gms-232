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
            cm.sendNormalTalk("各位先生们女士们，瞧一瞧看一看了！闵先生的幻想魔术表演即将开始了。首先是面包消失的魔术~ 瞧，这个面包在3秒钟之后就会消失了。一、二、三！咔咔咔", 0, 2470010, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("唔~这算什么！吃面包的魔术嘛！", 4, 2470003, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("嘿嘿，那么下一个魔术是，卡牌魔术。抽出一张牌……对，就是这张。看清楚了吗？我把这张牌和其他牌混在一起。接下来，我就要把刚才看到的那张牌给抽出来。那张牌……就是这个！", 0, 2470010, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("我们都看到了，所有的牌都是一样的！", 4, 2470008, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("接，接下来的魔术！", 0, 2470010, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("什么呀，一点意思都没有。走了。", 4, 2470006, true, true)
                            } else {
                                if (status === a++) {
                                    cm.askAcceptDecline("等等，请等一下！咳，每次都是这样。也罢，我自己都觉得我一点实力都没有。但是，总有一天我会走遍全世界，让每个人都看到我真正的魔术。你，有没有兴趣向我投资？作为回报，我会让你永远免费观看我的魔术表演！", 0, 2470010)
                                } else {
                                    if (status === a++) {
                                        cm.updateInfoQuest(41312, "");
                                        cm.forceStartQuest(41312, "");
                                        cm.sendNormalTalk("我正在构思一个新的魔术，就是从空空的帽子里窜出来东西。不过，要做这个魔术得需要一些物品，你能帮我找来吗？帽子最好是黄小丑的#r#t4009097##k，东西呢最好是#r#t4009092##k。你觉得怎么样？从帽子里窜出来一只手，是不是觉得很好玩？", 0, 2470010, false, true)
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/41312.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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