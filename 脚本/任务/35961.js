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
            cm.sendNormalTalk("（凯斯帕紧紧闭上了嘴巴。怎么办？）", 2, 1013405, false, true)
        } else {
            if (status === a++) {
                cm.askMenu("我绝不会说！打……打死我也不说。\r\n#b\r\n#L0# 1。	打个爆栗。#l\r\n#L1# 2。	用糖果和巧克力引诱他。#l\r\n#L2# 3。	用怪物的故事吓唬他。#l", 4, 1013442)
            } else {
                if (status === a++) {
                    if (b == 2) {
                        cm.sendNormalTalk("（没有糖果之类的东西吗？）", 2, 1013405, false, false);
                        cm.dispose()
                    } else {
                        cm.sendNormalTalk("（这样比较好。）", 2, 1013405, false, true)
                    }
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("那，那种事情我可不怕！\r\n我们黑魔法师3兄弟发誓不会惧怕任何威胁！", 4, 1013442, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("（嗯……好像不管用。等等，这个孩子刚才在找什么呢？要帮帮他，获取他的好感吗？）", 2, 1013405, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("嗯？你……你愿意帮我？\r\n真的吗？？要是那样……那就太感谢了……。", 4, 1013442, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("#b“那个东西”#k明明就在附近，但那些怪物太碍事，没办法去找。所以……。", 4, 1013442, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.askYesNo("请帮我教训一下周围的#b危，危险的香炉兔#k！！", 4, 1013442)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk("你真的愿意帮我？谢，谢谢。嘿嘿……", 4, 1013442, false, true)
                                        } else {
                                            if (status === a++) {
                                                cm.forceStartQuest(35961, "");
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
            cm.sendNormalTalk("（发现了一个奇怪的瓦罐。）", 4, 1013429, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("找到啦！一定就是这个！！魔道书果然是真的！！", 4, 1013442, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("这个瓦罐是什么？", 2, 1013405, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("在普通人眼里，也许只是个普通的瓦罐，但这其实是拥有强大力量的遗物。也，也许……。", 4, 1013442, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("（这好像是被丢在一边的垃圾吧……。）", 2, 1013405, true, true)
                        } else {
                            if (status === a++) {
                                cm.dispose();
                                cm.gainExp(1427698);
                                cm.forceCompleteQuest(35961)
                            }
                        }
                    }
                }
            }
        }
    }
};