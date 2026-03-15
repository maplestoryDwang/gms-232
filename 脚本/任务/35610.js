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
            cm.sendNormalTalk_Bottom("#b#ho##k，现在我要去把联盟的证物交给各个舰队。\r\n在出征之前再次坚定大家的决心。", 36, 3003658, false, true)
        } else {
            if (status === a++) {
                cm.askAcceptDecline_Bottom("因此我们希望#b#ho##也能去一个地方……\r\n你能帮我这个忙吗？\r\n\r\n #r ※ 确认后将立刻前往任务地图。#k", 36, 3003658)
            } else {
                if (status === a++) {
                    cm.playerMessage(5, "获得了<联盟证物>勋章。");
                    cm.playerMessage(-1, "获得了<联盟证物>勋章。");
                    cm.forceCompleteQuest(35633);
                    cm.updateInfoQuest(35611, "d30=1;medal=1");
                    cm.sendNormalTalk_Bottom("我已经将联盟的证物给了#b#ho##k。\r\n那就请你去找诺特勒斯号的凯琳吧。", 36, 3003658, false, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("啊，还有……这个是我个人的请求……\r\n那个……请把这个交给凯琳。", 36, 3003658, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("事情结束后请你回到白色之矛就好。\r\n所有舰队准备好后，希纳斯会下达命令……", 36, 3003658, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("咻……等会就要出征了呢。\r\n#b#ho##k，远征队就拜托你了。", 36, 3003658, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("我和地区代表会留在这里，\r\n但请你记住，我们都渴望着守护世界。", 36, 3003658, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("#b#ho##k为了拯救世界……\r\n咻……还真是让人感慨万千呢……", 36, 3003658, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("每次都能看到你快速成长的样子，真是让人惊讶。\r\n我期待看到你远征后归来的样子。", 36, 3003658, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("#face1#希望我们能在恢复和平的世界相见吧。", 36, 3003658, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.dispose();
                                                    cm.warp(993060031, 0, false)
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/35610.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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