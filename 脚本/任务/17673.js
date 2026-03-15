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
            cm.sendNormalTalk("真是万幸。洗脱了嫌疑。", 0, 9390203, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("是啊，真是万幸啊。我也就算了，害莱文你也一起受冤枉我心里真是过意不去呢。", 2, 9390203, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("虽然现在才这么说毫无意义，但是其实我是一直相信你的。当然我儿子莱文就更不用说了。", 0, 9390203, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("我理解的。身为共和国的首领也是无可奈何的事。", 2, 9390203, true, true)
                    } else {
                        if (status === a++) {
                            cm.askYesNo("关于海本使节团的事情你能再详细说说吗？", 0, 9390203)
                        } else {
                            if (status === a++) {
                                cm.forceStartQuest(17673, "");
                                cm.sendNormalTalk("是，其实我们被捕前救出我们的人就是克莱尔·特来敏。", 2, 9390203, false, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("那时使用那魔法的人就是克莱尔啊。", 0, 9390203, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk("是的，我们逃到了凯梅尔兹外围的大森林里，在那里克莱尔小姐被一伙人给绑架了。", 2, 9390203, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk("那绑匪们就是海本王国的暗杀团吗？", 0, 9390203, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk("虽然一直都是推测，但是应该是那样的。因为西温称之为自己的部下。", 2, 9390203, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk("嗯……但是也说不定是哪里雇来的暗杀公会的家伙们。反正西温死了就再也无从而知了。", 0, 9390203, true, true)
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/17673.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk("虽然有嫌疑，但是没有证据证言，无法公开抗议。", 0, 9390203, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("是的，关于那一点真的是很可惜。如果有西温就好了。", 2, 9390203, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("已经是过去的事了有什么办法呢。别再想了。比起那个我有话对你说。", 0, 9390203, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("您有话对我说，是什么事呢？", 2, 9390203, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("嗯……你能过一会儿再来找我说话吗。我整理一下思绪", 0, 9390203, true, true)
                        } else {
                            if (status === a++) {
                                cm.forceCompleteQuest(17673);
                                cm.dispose()
                            }
                        }
                    }
                }
            }
        }
    }
};