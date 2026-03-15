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
            cm.sendNormalTalk("是亡灵武士。他肯定跟鵺有关联。", 16, 9112007, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("啊，好无聊。", 4, 9112007, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("请问你是武士吗？", 16, 9112007, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("嗯？是的。你有什么事？", 4, 9112007, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("你是守卫这里的吗？", 16, 9112007, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("是哒~我是辅佐#b无头鬼#k的武士。", 4, 9112007, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("我看你们跟其他亡灵好像有点差别……难道……", 16, 9112007, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk("哦嗬！你问那么多干嘛。我不会回答的。\r\n你又不是亡灵，凭什么让我白告诉你信息？\r\n#b（亡灵武士摆出一副果断拒绝的姿态。）#k", 4, 9112007, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.forceStartQuest(58742, "");
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/58742.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk("喂……", 16, 9112007, false, true)
        } else {
            if (status === a++) {
                cm.askYesNo("咳咳！咳咳！\r\n（你是不是要拿点金币来表示下诚意？）\r\n#b※ 需要支付50万金币", 4, 9112007);
                if (cm.getMeso() < 500000) {
                    cm.dispose()
                }
            } else {
                if (status === a++) {
                    cm.gainMeso(-500000);
                    cm.sendNormalTalk("嘿嘿嘿嘿，这就对了嘛~你这家伙总算开窍了。说吧，你想打听什么？", 5, 9112007, false, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("请问各位武士是从哪里来的？", 17, 9112007, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("我们来自西边的本能寺。\r\n我们是跟随全能的无头鬼来到这里的。", 5, 9112007, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("无头鬼？", 17, 9112007, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("……哼……你不是亡灵，不知道也正常。无头鬼是我们的队长。", 5, 9112007, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk("请详细说说~", 17, 9112007, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk("哦嗬！够了。\r\n我要去忙了。要是你那么好奇，就等你死了再到亡者窟来吧~\r\n到时候我会帮你的~咯咯咯", 5, 9112007, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk("…………", 17, 9112007, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.forceCompleteQuest(58742);
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
};