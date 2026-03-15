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
            cm.sendNormalTalk_Bottom("该死……！", 32, 9390238, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("你为什么要装死？你的目的是什么！", 56, 9390238, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("我应该没有义务回答你的问题吧？而且，你们应该没有权利抓住我不放吧？", 32, 9390238, true, true)
                } else {
                    if (status === a++) {
                        cm.askYesNo_Bottom("(这家伙，嘴巴还挺紧！#h0#，你能让这家伙开口吗？)", 36, 9390202)
                    } else {
                        if (status === a++) {
                            cm.forceStartQuest(17667, "");
                            cm.sendNormalTalk_Bottom("喂，莱文，人质没必要有头发吧？还有这个难看的胡子。", 56, 9390238, false, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("是啊，完全没必要啊。其实衣服也没必要吧？", 36, 9390202, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("是啊，把头发和胡子全部剃掉，衣服也脱下来，那他估计就不能逃跑了，这个主意不错啊。让我看看，拔胡子应该用镊子吧……", 56, 9390238, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("其实那些像要暗杀我的人是我的手下。", 36, 9390207, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("看来你现在才想说啊。", 56, 9390238, true, true)
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/17667.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk_Bottom("我当然知道吉，吉尔伯特大人会拒绝和平条约的。", 32, 9390238, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("原来是有计划的行动啊。如果那样的话，明知道会被拒绝还来提议的理由是什么呢？", 56, 9390238, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("好的，如，如果拒绝了王国的和约后，愤怒的凯梅尔兹首领杀死了海本王国的使节这样的消息传开了……", 32, 9390238, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("周围的所有势力都会孤立凯梅尔兹共和国的。", 36, 9390202, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("就，就是那样。", 32, 9390238, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("好的，你得把这事实在首领面前再完完整整地重复一遍。", 56, 9390238, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("当，当然了。", 32, 9390238, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.forceCompleteQuest(17667);
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
};