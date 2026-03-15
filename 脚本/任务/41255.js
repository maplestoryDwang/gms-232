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
            cm.sendNormalTalk("你好，我是德朗博士制作的人造人A。如你所见，我是用机械制作的人。虽然身体里流着的不是鲜血，但是我和人类一样也拥有感知。", 0, 2460006, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("可以闻到花的香味，可以感觉到火的炽热，还可以吃美味的食品。不过除了人类的感情，人类的感情实在是太复杂了，无法用程序来定义。", 0, 2460006, true, true)
            } else {
                if (status === a++) {
                    cm.askMenu("所以我正在学习人类的感情。我听说人类感情中最伟大的是父母对子女的爱，是这样吗？\r\n#b#L0#这个嘛，我就不太清楚了。#l", 0, 2460006)
                } else {
                    if (status === a++) {
                        cm.askMenu("成为父母是何种心情呢？我也想和德朗博士一样，想拥有一个漂亮的女儿！\r\n#b#L0#……好像不久之前听到过类似的要求。#l", 0, 2460006)
                    } else {
                        if (status === a++) {
                            cm.askAcceptDecline("有了孩子，我就可以更接近人类的感情了。所以麻烦你给我弄个孩子吧。", 0, 2460006)
                        } else {
                            if (status === a++) {
                                cm.updateInfoQuest(41255, "");
                                cm.forceStartQuest(41255, "");
                                cm.sendNormalTalk("玛加提亚万能解决师#b后街小贩#k说，需要什么都可以帮我们弄到。#b后街小贩#k肯定可以帮我弄个孩子。", 0, 2460006, false, true)
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
            cm.sendNormalTalk("就是说，人造人A想要个孩子咯？", 0, 2460013, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("难道你是想绑架……", 2, 2460013, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("绑架？你说什么话呢？给人造人A制作小孩是很简单的事情。如果说父母是用血肉创造了自己的孩子，那么人造人又有何不可？", 0, 2460013, true, true)
                } else {
                    if (status === a++) {
                        cm.updateInfoQuest(41255, "NpcSpeech=24600131");
                        cm.sendNormalTalk("把这个交给人造人A吧。按照这里所写的，保证可以拥有孩子。", 0, 2460013, true, false);
                        cm.gainItem(4033849, 1)
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