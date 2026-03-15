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
            cm.sendNormalTalk("我是谁真的有那么重要吗？", 0, 9390249, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("我们可是互相救过命又互相帮助的关系嘛。以后也那样就好了。所以我希望我们能明确一下关系。", 4, 9390202, true, true)
            } else {
                if (status === a++) {
                    cm.askYesNo("好吧。既然你都这么说了，我就告诉你吧。你做好吃惊的准备了吗？", 0, 9390249)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("好吧，哎咦。", 0, 9390249, false, true)
                    } else {
                        if (status === a++) {
                            cm.forceStartQuest(17657, "");
                            cm.dispose()
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/17657.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk_Bottom("好了，准备好了吗。", 32, 9390205, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("噢噢……。", 36, 9390202, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("莱文你怎么了？已经见到你真面目了，现在就介绍一下你的来历吧。", 56, 9390205, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom(" …………我这样做了你都还认不出我吗？所以说男人啊……", 32, 9390205, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("我的名字是 #b克莱尔·特来敏#k。我是特来敏商团的独生女。", 32, 9390205, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("你说特来敏？你是说让我受冤屈的那个特来敏吗？！", 56, 9390205, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("是的。班·特来敏。那是我爸爸。", 32, 9390205, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("这又是葫芦里卖什么药来着？", 56, 9390205, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("葫芦里卖什么药，你这说法真低俗。", 32, 9390205, true, true);
                                            cm.spawnMobLimit(9390813, 1, 1261, -140, 100)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("你说什么？", 56, 9390205, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk_Bottom("等会，#h0#！先听听特来敏小姐怎么说。究竟是怎么一回事。她也许也有什么隐情呢。", 36, 9390202, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk_Bottom("好的，那就听听吧。", 56, 9390205, true, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.forceCompleteQuest(17657);
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
};