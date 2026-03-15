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
            cm.sendNormalTalk("天呐，这么说阿尔法和贝塔是对战过了？看来是两位的首次对战了！到底谁赢了呢？", 33, 2400000, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("#face5#肯定是我。", 41, 2400005, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("是我让你的。", 41, 2400006, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("#face0#我也没用全力去打！", 41, 2400005, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("#face4#要不我们重来？和阿尔法对战，我觉得很有意思。", 41, 2400006, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("唉哟，两位要好好相处哦，兄妹之间岂能兵刃相向呢。万一有人受伤了怎么办！", 33, 2400007, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("兄弟之间本来就是这样互相打骂着成长的。你看卡西亚斯和本尼迪克不也是如此吗？", 33, 2400000, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk("咦？我什么时候和卡西亚斯打过架？我们可是感情非常好的兄弟哦。", 33, 2400007, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk("对，皮埃。本尼迪克和卡西亚斯没有打过架。", 41, 2400006, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk("是吧，贝塔？皮埃没有兄弟，所有对这不太清楚。", 33, 2400007, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk("#face5#对啊，只是本尼迪克一直被卡西亚斯揍而已，这不算打架。", 41, 2400006, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk("#face1#…………", 33, 2400007, true, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.forceCompleteQuest(41407);
                                                            cm.gainExp(19000000);
                                                            cm.setInGameDirectionMode(false, true, false);
                                                            cm.gainItem(4310085, 40);
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/41407.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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