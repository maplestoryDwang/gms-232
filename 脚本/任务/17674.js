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
            cm.sendNormalTalk_Bottom("嗯，都整理好了。不是别的事，我有件事想委托你可以吗？", 32, 9390203, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("委托我吗？是和莱文一起做的事情吗？", 56, 9390203, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("不是，与莱文无关只是拜托你的事情。因为貌似只有你能完成。你要听吗？", 32, 9390203, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("是，虽然不知道是什么事情，但是只要是我能力所及的事情我就听您的。", 56, 9390203, true, true)
                    } else {
                        if (status === a++) {
                            cm.askYesNo_Bottom("果然够豪放，呵呵。你能把我给你的书信转交给你们的希纳斯女皇吗？", 32, 9390203)
                        } else {
                            if (status === a++) {
                                cm.forceStartQuest(17674, "");
                                cm.sendNormalTalk_Bottom("啊？给希纳斯女皇大人吗？什么……。啊……难道是！！", 56, 9390203, false, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("是的。是我作为凯梅尔兹的首领代表凯梅尔兹给希纳斯女皇传递的和平提议书信。怎么样？可以吗？", 32, 9390203, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("啊……那当然啦。当然啦！不管几次都可以！", 56, 9390203, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("那么就拜托你了。去冒险岛世界的船已经准备好了。去码头，莱文在那里等你呢。", 32, 9390203, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("谢谢。首领大人。我这就赶快去向女皇大人转达这好消息，以后再来拜见您。", 56, 9390203, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk_Bottom("一路顺风。", 32, 9390203, true, true)
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/17674.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk("啊，那是莱文啊。嗯？克莱尔。好像正在对话呢……", 2, 9390256, false, true)
        } else {
            if (status === a++) {
                cm.forceCompleteQuest(17674);
                cm.dispose()
            }
        }
    }
};