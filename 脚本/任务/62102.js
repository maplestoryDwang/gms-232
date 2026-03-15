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
            cm.sendNormalTalk_Bottom("#b我们现在回去吧！我带你走！", 57, 0, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("不用……我一个人也能回去。我身上也流着冒险家的血液呢。我可不怕这些鬼怪和僵尸。", 37, 9310538, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#b真的吗？那你为什么直到现在都不去找背囊，也不回去呢？", 57, 0, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("其实……哈……", 37, 9310538, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#b没关系，你说吧。", 57, 0, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("其实……我爱上了一个人……就是豫园的整形外科助手#p9310547#。\r\n她的双眼闪烁如明星，白里透红的脸颊，樱桃小嘴……真是……#p9310547#太美了！", 37, 9310538, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("而且，你知道她有多善良吗？当她笑着和我打招呼的时候，我感觉就像得到了整个世界~~~哈！", 37, 9310538, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("#b嗯……", 57, 0, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("#b嗯…………", 57, 0, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.askMenu_Bottom("#b#L0##p2081000#和村民们都很担心，让他回神木村去。#l \r\n#L1#爱情诚可贵，让他留在豫园。#l\r\n#L2#让他回神木村，告诉#p2081000#和村民们自己平安无事，并且爱上了一个人，然后再回来。#l", 37, 9310538)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk_Bottom("不要！你怎么能说得这么轻松？！", 37, 9310538, false, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.askMenu_Bottom("#b#L0##p2081000#和村民们都很担心，让他回神木村去。#l \r\n#L1#爱情诚可贵，让他留在豫园。#l\r\n#L2#让他回神木村，告诉#p2081000#和村民们自己平安无事，并且爱上了一个人，然后再回来。#l", 37, 9310538)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk_Bottom("但是……我不能这么做！爱情是很重要，但是神木村的人也很重要啊？！", 37, 9310538, false, true)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.askMenu_Bottom("#b#L0##p2081000#和村民们都很担心，让他回神木村去。#l \r\n#L1#爱情诚可贵，让他留在豫园。#l\r\n#L2#让他回神木村，告诉#p2081000#和村民们自己平安无事，并且爱上了一个人，然后再回来。#l", 37, 9310538)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.forceCompleteQuest(62102);
                                                                    cm.updateInfoQuest(62102, "chk=1");
                                                                    cm.addNumberForQuestInfo(62109, "yuyuanPoint", 3);
                                                                    cm.sendNormalTalk_Bottom("啊！这个主意不错。我为什么之前都没想到呢？\r\n咻……虽然要暂时和#p9310547#分开，让我有些难过，但是这个方法似乎是最好的了。", 37, 9310538, false, false)
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