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
            cm.sendNormalTalk_Bottom("#h0#。", 36, 9401030, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#b你在干什么呢，拉尔夫？", 56, 0, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("就是……在思考。", 36, 9401030, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("……我在想这次旅程结束之后，要不要安定下来…… ", 36, 9401030, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#b安定？", 56, 0, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("……（点头）", 36, 9401030, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("……我厌倦了。", 36, 9401030, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("在寒冷黑暗的深渊之中……你和莫妮卡出现之前，我本想着就这样结束我的生命也无所谓。", 36, 9401030, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("但是和你们并肩作战，让我想起了之前那些和兄弟共处的时光，那种激动人心、充满希望的时光。", 36, 9401030, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("为了代替先离我而去的兄弟，实现他们的梦想，我孤身一人游荡在冒险岛世界中之时，我的人生就消失了。", 36, 9401030, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk_Bottom("但是……但是……与你们相遇之后，我感受到了许久未曾出现的开心，便想要找回我的人生。", 36, 9401030, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk_Bottom("为此我可能需要暂时休息一下。", 36, 9401030, true, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk_Bottom("#b你怎么现在才告诉我这些…… ", 56, 0, true, true)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.sendNormalTalk_Bottom("这又不是什么有趣的故事嘛。", 36, 9401030, true, true)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.sendNormalTalk_Bottom("#b拉尔夫…… ", 56, 0, true, true)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.sendNormalTalk_Bottom("你为什么难过？我现在非常开心，因为我……变得想要活下去了。", 36, 9401030, true, true)
                                                                    } else {
                                                                        if (status === a++) {
                                                                            cm.sendNormalTalk_Bottom("我要去感谢一下莫妮卡了。", 36, 9401030, true, true)
                                                                        } else {
                                                                            if (status === a++) {
                                                                                cm.sendNormalTalk_Bottom("#b你要去哪里？", 56, 0, true, true)
                                                                            } else {
                                                                                if (status === a++) {
                                                                                    cm.sendNormalTalk_Bottom("还在考虑，听说冒险家们很喜欢一个叫做凯兰西亚的村庄。", 36, 9401030, true, true)
                                                                                } else {
                                                                                    if (status === a++) {
                                                                                        cm.sendNormalTalk_Bottom("#b我们还能再见吗？", 56, 0, true, true)
                                                                                    } else {
                                                                                        if (status === a++) {
                                                                                            cm.sendNormalTalk_Bottom("当然，我只是需要暂时休息一下。", 36, 9401030, true, true)
                                                                                        } else {
                                                                                            if (status === a++) {
                                                                                                cm.forceCompleteQuest(64794);
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/64794.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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