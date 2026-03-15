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
            cm.sendNormalTalk_Bottom("#face0#哦？我还是第一次见到穿成这样子的人呢。你看起来似乎并不是从“岛”那边过来的……难道是来自“大陆”的吗？", 37, 9110002, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("（“岛”？“大陆”？是这个世界的地名吗？）", 57, 0, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("那、那个……我是从比较偏远的乡村过来的。我想请问一下，最近一段时间，你有没有在城镇周围发现什么不可思议的事情，或是有没有见到一些陌生的……也就是衣着和我差不多的人呢？", 57, 0, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face0#让我想想……我应该是第一次见到你这种穿着的人呢。不过原来你正在找人啊。但你说的这个人并没有来到古代神社呢。", 37, 9110002, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face0#至于你说，最近有没有发现什么不可思议的事情……前几天，古代神社西北方的天空突然一片昏暗，又是打雷闪电，又是狂风呼啸的。之后，好不容易平静了一小段时间，但马上又出现了相似的现象。这应该就是人们所说的异常气象吧。我们一定要加倍保护环境才行，即使从现在开始也为时不晚呢。", 37, 9110002, true, true)
                        } else {
                            if (status === a++) {
                                cm.askYesNo_Bottom("（真是谢天谢地，看来织田军还没有先一步和这些人接触。不过，这些人似乎还没有意识到我们误闯到这个世界的异常状况……我应该也没有必要刻意提起了吧。还是看看能不能再多收集一点情报吧？）", 57, 9110002)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("抱歉，打扰了… 这附近是否有需要帮助的人？在下对剑道多少有些自信，如有需要在下帮助的，在下义不容辞。", 57, 0, false, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("#face0#既然这样，那就去圣地吧？你也看到了，这里不过是一座神社……不如直接去圣地拜见希纳斯女皇陛下。", 37, 9110002, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("我刚才也说了，我来自偏远山村……不太了解圣地和您刚才提到的“大陆”，您能详细讲解一下吗？", 57, 0, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("#face0#圣地是一座漂浮的岛屿。从蘑菇神社这里骑乘鹈鹕，到金银岛的六岔路口下来，然后乘船就能抵达。", 37, 9110002, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk_Bottom("#face0#“大陆”应该是指这个世界……也就是“冒险岛世界”中，占地面积最大的神秘岛大陆吧。那地方距离遥远，从金银岛乘船要走好一阵子才能到，我还没有去过呢。", 37, 9110002, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk_Bottom("#face0#此外，像矿山城市埃德尔斯坦这样的名字我也只是听说过，并不了解具体情况。抱歉没能帮上什么忙。", 37, 9110002, true, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk_Bottom("(“这边”的世界似乎被称为冒险岛世界。此外还有神秘岛大陆和金银岛……我最好记住这些地方。)", 57, 0, true, true)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.askYesNo_Bottom("感谢您的详细指引。那么，就按指引，我将前往金银岛寻找赫丽娜。", 57, 9110002)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.forceCompleteQuest(57122);
                                                                    cm.gainExp(3201);
                                                                    cm.gainItem(4033277, 1);
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/57122.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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