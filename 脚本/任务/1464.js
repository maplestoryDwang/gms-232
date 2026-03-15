var status = -1;
var selectionLog = [];

function start(d, c, b) {
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
        if (status === a++) {
            cm.sendNormalTalk("如果说冒险岛世界是井然有序的，那绯红就是混乱、充满未知的。我们从很久前开始就充当着这个世界的影子。", 4, 1540944, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("其实，我并不想帮助冒险岛世界。不过，如果冒险岛世界消失，我们的世界也会受到威胁。就算是为我们自己考虑，我们也要尽全力阻止黑魔法师。", 4, 1540944, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("那你愿意帮忙喽？", 16, 0, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("嗯？我好像没那么说吧？", 4, 1540944, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("……", 16, 0, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("……", 4, 1540944, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("……", 16, 0, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.askMenu("我知道了。你不要露出这种表情。我帮你不就行了嘛。不过，在此之前，我想进行简单的测试！\r\n\r\n#L0#测试？", 4, 1540944)
                                    } else {
                                        if (status === a++) {
                                            cm.askMenu("嗯，是非常简单的运气测试。我会把你赶走，你只要重新回来就行了。不过，入口将会被转移到其他地方，而不是原来的地方。\r\n\r\n#L0#等等，怎么能这样……", 4, 1540944)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk("我不会等你太久的，让我看看你的运气吧。\r\n\r\n#b(5分钟内，在世界树上端找到传送口吧！)#k", 4, 1540944, false, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.startQuestClock(1, 1464, 300000);
                                                    cm.forceStartQuest(1464, "");
                                                    cm.updateInfoQuest(1464, "find=0;r=" + cm.rand(0, 2));
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

function end(e, c, b) {
    if (status == 0 && e == 0) {
        cm.dispose();
        return
    }
    status++;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status === a++) {
            cm.sendNormalTalk("啊，你真的回来啦？", 4, 1540944, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("……", 16, 0, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("我开玩笑的。你想要的是这东西吧？其实，我从一开始就打算给你了，快拿走吧。\r\n\r\n#b#i2435736:# #t2435736:# 1个", 4, 1540944, true, true)
                } else {
                    if (status === a++) {
                        cm.forceCompleteQuest(1464);
                        cm.endQuestClock(1, 1464);
                        cm.gainItem(2435736, 1);
                        if (cm.haveItem(2435734) && cm.haveItem(2435735) && cm.haveItem(2435736)) {
                            cm.sendNormalTalk("见到了女神，集齐了3个神秘石。旁观者好像说他会重新联络我的…等等看他的消息吧。", 16, 0, true, false)
                        } else {
                            var d = "通过了女神的考验，获得了神秘石。现在去找其他女神吧。\r\n";
                            if (!cm.haveItem(2435734)) {
                                d += "\r\n#b#p1540942##k : 射手村的#b#m100000201##k"
                            }
                            if (!cm.haveItem(2435735)) {
                                d += "\r\n#b#p1540943##k : 万神殿的#b#m400000001##k"
                            }
                            if (!cm.haveItem(2435736)) {
                                d += "\r\n#b#p1540943##k : 堕落世界树的#b#m105300000##k"
                            }
                            cm.sendNormalTalk(d, 16, 0, true, false)
                        }
                        cm.dispose()
                    }
                }
            }
        }
    }
};