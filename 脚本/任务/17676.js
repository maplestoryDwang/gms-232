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
            cm.sendNormalTalk_Bottom("克莱尔何时离开呢。", 56, 9390240, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("这会儿马上父亲准备好就要离开了。", 32, 9390240, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("看来班·特来敏大人要一起去了？", 56, 9390240, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("是的。他好像担心说不定又中途在哪消失了似的。", 32, 9390240, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("原来如此。那也别放弃自己的梦想。成为大魔法师的梦想。", 56, 9390240, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("谢谢你。有空的时候我自己会继续筹集资本……不是，是学习。", 32, 9390240, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("(这姑娘，如此的话又该离家出走了。)", 56, 9390240, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("你没什么话要我转告莱文吗？现在离开的话想见面可就难了。", 56, 9390240, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("嗯？应该是那样吧。我也没什么要说的呢。", 32, 9390240, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("…………？？？你会想他都没关系吗？", 56, 9390240, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk_Bottom("啊？为什么？啊，当然也不会完全不想他啦。", 32, 9390240, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk_Bottom("原，原来如此。(莱，莱文你这家伙……呵呵)", 56, 9390240, true, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.askYesNo_Bottom("啊，那么能请你把这个转交给他吗？", 32, 9390240)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.forceStartQuest(17676, "");
                                                                cm.sendNormalTalk_Bottom("知道了。我会转交给他的。", 56, 9390240, false, true)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.sendNormalTalk_Bottom("我尝试着做的。那就拜托你了。", 32, 9390240, true, true)
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/17676.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk_Bottom("哟，你来啦。书信转交给她了吗？", 32, 9390256, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("嗯。我亲手转交的。你放心。", 56, 9390256, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("好吧，有什么反应呢？高兴吗？", 32, 9390256, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("哦……嗯…那……当然啦……(莱文你真是的……) 啊，还有让我把这个交给你。", 56, 9390256, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("这是什么？", 32, 9390256, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("那我就不知道喽。你拆开来看看啊。", 56, 9390256, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("哪呢……。啊，这是……？这是什么呢？", 32, 9390256, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("好像是什么符似的。", 56, 9390256, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("噢，看来是保佑平安的符咒！我要随身携带！", 32, 9390256, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("好了，真是万幸。(就没必要告诉他是试验品而已了吧。希望那可千万别是诅咒，而得是祝福的符文。)", 56, 9390256, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.forceCompleteQuest(17676);
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