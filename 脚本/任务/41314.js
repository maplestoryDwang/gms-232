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
            cm.sendNormalTalk("阿尔法……把#r#t4033864##k交给克林真的没有关系吗？这样的话，玩具城的时间可就要被解除了。", 5, 2400006, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("那和我们有什么关系？当初要帮助克林的不正是贝塔你么。", 5, 2400005, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("但是……", 5, 2400006, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("但是什么？你来选择吧。要么把钥匙交给克林，要么就丢掉。我都无所谓。", 5, 2400005, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("我们去说服克林吧。", 5, 2400006, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("什么？", 5, 2400005, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("我很想守护充满童心的玩具城的人们，也很想去安慰想和家人幸福生活的克林。", 5, 2400006, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk("……好吧，那么我选择放弃。你来说服克林，我一句话都不会说的。", 5, 2400005, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.updateInfoQuest(41314, "");
                                            cm.forceStartQuest(41314, "");
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
    }(d == 1) ? status++ : status--;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            var e = cm.getQuest();
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/41314.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk("消灭帕普拉图斯了吗？时间之塔的钥匙呢？", 0, 2470007, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("时间之塔的钥匙我们拿到了。但是，克林你真的想要启动玩具城的时间吗？", 4, 2400006, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("我也知道我想做的是很大一件事，不过对我来说家人才是第一位。", 0, 2470007, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("不过，成为大人是一件很困难的事情。当然，我不是大人我也不太清楚……", 4, 2400006, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("我再怎么累也都无所谓，但我不是因为讨厌上学讨厌做功课才想要成为大人的。你快把钥匙给我吧，我一定要成为大人。", 0, 2470007, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("……", 4, 2400006, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("……啊喔，你这个笨蛋。你不是要说服他么，怎么反被他说服了？克林，你有没有想过？时间被启动之后你也许会成为大人，但是你的父母也会同样上年纪，同样会变成老人。你觉得父母变成爷爷奶奶也没关系吗？", 4, 2400005, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk("……！", 0, 2470007, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk("能够长大就说明人总有一天都会死的。如果启动了时间，总有一天你的父母也会死的，真的没有关系吗？", 4, 2400005, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk("那肯定不行！如果父母过世的话我……", 0, 2470007, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk("好了，我们的谈话就到此结束，这件事就当没发生过。你认真地学习，才是为父母着想的唯一方法。", 4, 2400005, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.forceCompleteQuest(41314);
                                                        cm.gainExp(12000000);
                                                        cm.sendNormalTalk("阿尔法，你真了不起……", 4, 2400006, true, true);
                                                        cm.gainItem(4310085, 20)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk("是因为你太笨了？", 4, 2400005, true, false)
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
    }
};