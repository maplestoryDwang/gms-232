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
            cm.sendNormalTalk("多檀智看起来怎么样？", 0, 2192009, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("#b(转述从多檀智那里听到的话。)", 2, 2192009, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("你说什么！？这是真的吗？？这么说就不能接着再等海盗船了。说不定在多檀智的心跳提升之前，约会就此结束了啊，怎么办呢？", 0, 2192009, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("你想想看啊……想一想，#b多洛米#k，你应该会有不错的方案的。", 0, 2192009, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("#b(回想)#k\r\n#fn宫书体#那么身为这里的员工，我就推荐一个相当合适的地方吧，在这里有一个非常惊险刺激的……动物秀。", 4, 2192018, true, true)
                        } else {
                            if (status === a++) {
                                cm.askAcceptDecline("没错！动物秀！虽然之前说好不做计划外的事情，但现在可不是说这些的时候！#e#h0##n我们#b去看动物秀吧！", 0, 2192009)
                            } else {
                                if (status === a++) {
                                    cm.forceStartQuest(31382, "");
                                    cm.sendNormalTalk("动物秀公演场可以通过动物秀入口前往。", 1, 2192009, false, false)
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
            cm.forceCompleteQuest(31382);
            cm.updateInfoQuest(31389, "ex=1");
            cm.sendNormalTalk("你到底是什么人！\r\n\r\n#b(呼噜噜)", 3, 2192019, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("额啊-不可以！！！", 1, 2192019, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("你是……丹森斯密达……？", 3, 2192019, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("真是创造了历史记录的第100对情侣啊！好上火！！任谁看#e#h0##n都具备着天生成为单身部队成员的资格，却被花言巧语所哄骗，尝到了失败的苦果，真是一对#e该下地狱的情侣#n！", 1, 2192019, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("我会记住今天的，我一定会和我的同伴们再次……", 1, 2192019, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("#b(看样子没必要再听下去了，前往梦幻动物秀<入口>吧。)", 3, 2192019, true, false)
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
};