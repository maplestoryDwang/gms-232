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
            cm.sendNormalTalk("本尼迪克……看起来很犹豫。", 41, 2400006, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("是啊，失去了兄弟，估计要犹豫一阵子了。", 41, 2400005, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("真想……去安慰他。", 41, 2400006, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("虽然知道贝塔的心情，但现在什么话都无法安慰本尼迪克。", 33, 2400000, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("#face10#……", 41, 2400006, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("但，但是我们要不要准备一些节目，让他振作一点？虽然无法治愈本尼迪克的悲伤，但也许多少能起一些作用吧？", 33, 2400001, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("#face5#对，好主意。那么我们为他唱首歌？", 41, 2400005, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk("……这个有点……", 33, 2400001, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk("送给他肉，怎么样？吃了肉就会有力气了！", 33, 2400009, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk("……真是丢死人了。你不要和别人说我曾经和你是同一个人。", 33, 2400010, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk("要不……我来当本尼迪克的妹妹吧。", 41, 2400006, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk("贝塔吗？", 33, 2400001, true, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk("#face5#嗯，我只要模仿卡西亚斯就行了吧？比如……咳，这个愚蠢的人竟然是我的哥哥，简直难以置信……这样？", 41, 2400006, true, true)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.sendNormalTalk("……我觉得让他这么待着，才是真正安慰他。", 33, 2400001, true, true)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.updateInfoQuest(41405, "");
                                                                    cm.forceStartQuest(41405, "");
                                                                    cm.forceCompleteQuest(41405);
                                                                    cm.gainExp(7000000);
                                                                    cm.setInGameDirectionMode(false, true, false);
                                                                    cm.gainItem(4310085, 30);
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/41405.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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