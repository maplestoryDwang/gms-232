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
            cm.sendNormalTalk_Bottom("我正在帮莎娜安婆婆制作盔甲呢。", 37, 9400601, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("不过也就修理而已… 收集了全部盔甲碎片。", 37, 9400586, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#b盔甲？", 57, 0, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("但是没人送。", 37, 9400586, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("啊！你也知道，我打算送给那个麻烦的家伙。", 37, 9400586, true, true)
                        } else {
                            if (status === a++) {
                                cm.askMenu_Bottom("话说，能给我一下不用的盔甲吗？因为我这里少一条胳膊…#b\r\n#L0#没有。#l\r\n#L1#查看背包。#l", 37, 9400586)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("那也没办法…", 37, 9400586, false, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("做的差不多了。怎么样？", 37, 9400586, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("对你来说这个恐怕没什么用，但对那家伙就是必不可少的。", 37, 9400586, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("他和我有很多共同点。", 37, 9400586, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk_Bottom("我希望他能穿上这件盔甲之后，能走出屋子… 但是我不敢确定。", 37, 9400586, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk_Bottom("不过有一点可以肯定… 至少我也在努力地去做一些我力所能及的事情… ", 37, 9400586, true, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk_Bottom("看这个！有两个犄角，是不是很酷？", 37, 9400586, true, true)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.sendNormalTalk_Bottom("#b是的。", 57, 0, true, true)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.sendNormalTalk_Bottom("那当然，一想到艾伊纳尔能带着这个头盔出门… 想想都很酷…", 37, 9400601, true, true)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.sendNormalTalk_Bottom("如果真能那样就好了… ", 37, 9400586, true, true)
                                                                    } else {
                                                                        if (status === a++) {
                                                                            cm.sendNormalTalk_Bottom("你也别太担心了。不过这个嘈杂声音是怎么回事？", 37, 9400601, true, true)
                                                                        } else {
                                                                            if (status === a++) {
                                                                                cm.sendNormalTalk_Bottom("好像有骚乱。", 37, 9400586, true, true)
                                                                            } else {
                                                                                if (status === a++) {
                                                                                    cm.sendNormalTalk_Bottom("#b我们最好去看一下。", 57, 0, true, true)
                                                                                } else {
                                                                                    if (status === a++) {
                                                                                        cm.sendNormalTalk_Bottom("快去看一下。", 37, 9400586, true, true)
                                                                                    } else {
                                                                                        if (status === a++) {
                                                                                            cm.monadEndingScene(135 * Math.pow(cm.getLevel(), 3), 50 * Math.pow(cm.getLevel(), 2), [2439159, 0, 0, 0, 0, 0]);
                                                                                            cm.sendNormalTalk_Bottom("啊！差点忘记了，这个是送给你的。虽然和你身上的根本没法相比，但这是我这老太婆的心意。", 37, 9400586, true, true);
                                                                                            cm.effect_Voice("Field.img/masteryBook/EnchantSuccess", 100)
                                                                                        } else {
                                                                                            if (status === a++) {
                                                                                                cm.forceCompleteQuest(64116);
                                                                                                cm.gainItem(2439159, 1);
                                                                                                cm.gainExp(135 * Math.pow(cm.getLevel(), 3));
                                                                                                cm.gainMeso(50 * Math.pow(cm.getLevel(), 2));
                                                                                                cm.dispose();
                                                                                                cm.warp(867202305, 0);
                                                                                                cm.monadEndingScene(-1, -1, null)
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