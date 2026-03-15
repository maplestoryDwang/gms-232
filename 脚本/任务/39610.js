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
            cm.sendNormalTalk_Bottom("#face0#他们几个挺特别的吧。但有一点希望你明白，\r\n我们所做的事，全都是为了拯救王国。", 36, 3001952, false, true, 1)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face5#我知道，这些手段很摆不上台面。\r\n但是，我不想等全部失去了之后，再来后悔。", 36, 3001952, true, true, 1)
            } else {
                if (status === a++) {
                    cm.askAcceptDecline_Bottom("#face5#为了让王国恢复往日的面貌，让我干什么都肯。\r\n如果你认同我的想法，愿意跟我走吗？\r\n\r\n #r ※ 自动转至任务地图。#k", 36, 3001952, 1)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face3##fc0xFFbfbfbf#(不知为什么，他这种无论如何\r\n都要守护某物的心情……有点似曾相识。)", 36, 3001951 - cm.getPlayer().getGender(), false, true, 1)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face0#我也一起去。", 36, 3001951 - cm.getPlayer().getGender(), true, true, 1)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#face0#我很高兴听你这么说。", 36, 3001952, true, true, 1)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("#face2#布乌……", 36, 3001960, true, true, 1)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("#face0#布乌，你说你也要去吗？\r\n这让我感到很踏实哦！", 36, 3001952, true, true, 1)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("#face0#那么，我们就到布鲁和拉迪说的地下仓库去吧。\r\n去调查下伯爵要找的是什么画。", 36, 3001952, true, true, 1)
                                        } else {
                                            if (status === a++) {
                                                cm.dispose();
                                                cm.warp(993162015, 0, false)
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/39610.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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