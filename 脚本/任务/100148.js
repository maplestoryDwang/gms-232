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
            cm.sendNormalTalk("\r\n#b#h0##k！\r\n已经是#e12月#n了！是不是有点小激动？", 4, 9010010, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("\r\n到了12月，\r\n就要过#b#e圣诞节#n#k了！", 4, 9010010, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("\r\n呵呵……说到圣诞节的时候，会想起什么呢？", 4, 9010010, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("\r\n那就是……\r\n好吃的甜点！\r\n\r\n圣诞节#b#e蛋糕！#n#k\r\n精致的圣诞节#b#e饼干！#n#k\r\n圣诞节装饰#b#e巧克力！#k#n", 4, 9010010, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("\r\n我有个非常好的消息！\r\n\r\n为了迎接圣诞节，射手村的卡米拉\r\n开了一家面包房！", 4, 9010010, true, true)
                        } else {
                            if (status === a++) {
                                cm.askYesNo("怎么样，#h0#～？\r\n你对#b#e<卡米拉的圣诞节面包房>#n#k感兴趣吗？", 4, 9010010)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("\r\n#b#h0##k！\r\n你好……我叫卡米拉！", 4, 1012108, false, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk("\r\n你喜欢……\r\n#e#b甜食#n#k吗？", 4, 1012108, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk("\r\n我来介绍一下可以在我们圣诞节面包房中享用的美味甜点！", 4, 1012108, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk("\r\n#e<甜蜜绵软蛋糕装饰>#n\r\n\r\n试着亲手装饰圣诞节蛋糕吧！\r\n那样就能把亲手装饰的蛋糕当成#b椅子#k使用。", 4, 1012108, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk("\r\n#e<卡米拉的圣诞服装礼物>#n\r\n\r\n最后！\r\n我还可以每天把圣诞节服装借给你！\r\n请领取带有#b特殊能力#k的圣诞节服装吧！", 4, 1012108, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk("\r\n面包房会一直开放下去。要常来玩哦！", 4, 1012108, true, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk("\r\n好了，祝你度过一个甜蜜的圣诞节！", 4, 1012108, true, true)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.forceCompleteQuest(100148);
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/100148.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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