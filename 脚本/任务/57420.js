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
            cm.sendNormalTalk_Bottom("#face0#你好。这里是#b#m800000000##k。我是神寺的巫女，我名叫#b#p9110002##k。你是为了什么而来到这里的？", 37, 9110002, false, true)
        } else {
            if (status === a++) {
                cm.forceCompleteQuest(57419);
                cm.sendNormalTalk_Bottom("#face0#咦？我还是第一次见到穿成这样子的人呢。你看起来似乎并不是从“岛”那边过来的……难道是来自“大陆”的吗？", 37, 9110002, false, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("（“岛”？“大陆”？是这个世界的地名吗？）", 57, 0, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("那、那个……我是从比较偏远的乡村过来的。我想请问一下，最近一段时间，你有没有在城镇周围发现什么不可思议的事情，或是有没有见到一些陌生的……也就是衣着和我差不多的人呢？", 57, 0, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face0#让我想想……我应该是第一次见到你这种穿着的人呢。如果你正在找人，那你要找的人应该没有来到#b#m800000000##k哦。看来我帮不上你什么忙了呢。", 37, 9110002, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#face0#至于你说，有没有发现什么不可思议的事情……前几天，#b#m800000000##k西北方的天空突然一片昏暗，又是打雷闪电，又是狂风呼啸的。之后，好不容易平静了一小段时间，但马上又出现了相似的现象。这应该就是人们说的异常气候吧。看来我们必须要加倍保护环境才是呢。", 37, 9110002, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("（真是谢天谢地，看来织田军还没有先一步和这些人接触。不过，这些人似乎还没有意识到我们误闯到这个世界的异常状况……我应该也没有必要刻意提起了吧。还是看看能不能再多收集一点情报吧？）", 57, 0, true, true)
                                } else {
                                    if (status == a++) {
                                        cm.forceStartQuest();
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
            cm.sendNormalTalk_Bottom("我还有一件事想要问问你……不知道你可不可以帮忙介绍一位这附近据有一定地位的人呢？我对法术略知一二，希望能够找到一位能让我尽情发挥力量的人。", 57, 0, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#既然如此，你要不要直接去圣地看看情况呢？我们这里不过是个普通的神寺……你可以前往圣地，去拜见那里的希纳斯女皇。", 37, 9110002, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("刚才我也说过了，我是一个偏远乡村出来的人……可不可以请你说得详细一些，你所提到的圣地和“大陆”究竟是个怎样的地方呢？", 57, 0, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face0#圣地是一个漂流的小岛。#你可以在#b#m800000000##k通过导游妮妮去到冒险岛世界，然后在金银岛的#b#m104020000##k后换乘船舶，就能够到达圣地了。", 37, 9110002, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face0#而“大陆”指的就是这个世界……也就是“冒险岛”中范围最大的区域#b神秘岛#k。从金银岛乘船一段时间，就可以到达这里了。不过大陆离我们这边实在太远，连我也从来没有去过呢。", 37, 9110002, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#face0#除此之外，我还听说过名为#b#m310000000##k的矿山都市。不过，我对这个地方也不太熟悉。实在抱歉，没能帮上你什么忙。", 37, 9110002, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("（“这边”这个世界似乎名叫冒险岛。除此之外，还有神秘岛和金银岛……我最好记住这些地方。）", 57, 0, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("谢谢你帮忙介绍了这么多。我这就听从你的建议，前往圣地去拜见希纳斯女皇。", 57, 0, true, true)
                                    } else {
                                        if (status == a++) {
                                            cm.gainExp(3000);
                                            cm.forceCompleteQuest();
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
};