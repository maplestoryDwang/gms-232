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
            cm.sendNormalTalk_Bottom("舔舔！喂！", 37, 3003152, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("？", 57, 0, true, true)
            } else {
                if (status === a++) {
                    cm.askAcceptDecline_Bottom("#face0#有很重要的事情需要你来一下#b啾啾村#k。舔舔！\r\n#r（同意后立即移动。）#k", 36, 3003152)
                } else {
                    if (status === a++) {
                        cm.forceStartQuest(39013, "");
                        cm.dispose();
                        cm.warp(450002000, 0, false)
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/39013.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk_Bottom("#face3#舔舔！快来！", 37, 3003152, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("骗子遇到什么事了吗？", 57, 0, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("舔舔！你还在生气吗！是我的错！\r\n这里面肯定有什么误会！舔舔、舔舔！", 37, 3003152, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("嗯……既然主厨先生那样说了……到底发生了什么事呢？", 57, 0, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("穆托的事顺利解决了，猴姐也作为正式主厨加入了厨房，\r\n本以为这下厨房里要忙作一团了……没想到……", 37, 3003152, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#face0#连周围闻到气味的怪物也开始入侵厨房了！舔舔！", 36, 3003152, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("主厨和猴姐没事吧？", 57, 0, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("#face0#舔舔！他们可能是知道没了厨师，就做不了料理，所以就把食材全偷走了，这才是最让人生气的！！舔舔！！", 37, 3003152, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("#face3#所以说，最好能给周围的怪兽一点厉害瞧瞧！舔舔？", 37, 3003152, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("嗯……", 57, 0, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk_Bottom("你就当成是#face3#厨房的辅助工作！舔舔！这毕竟也是为了穆托和村民，\r\n#b日薪#k我也会给足的！舔舔！", 37, 3003152, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk_Bottom("如果是为了穆托和此地的事情，我愿意帮忙。", 57, 0, true, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk_Bottom("#face3#舔舔！好的。\r\n每天给你#b3个#k辅助工作。\r\n我今天特别给你一个机会！你可以用这三个工作与你今天最不想做的工作来交换。舔舔舔！", 37, 3003152, true, true)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.sendNormalTalk_Bottom("当然，辅助工作也会有相应的奖励，准备好了就来找我！舔舔舔舔！", 37, 3003152, true, true)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.forceCompleteQuest(39013);
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
};