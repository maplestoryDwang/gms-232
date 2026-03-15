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
            cm.sendNormalTalk_Bottom("(摸摸脸蛋。)", 37, 9310048, true, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("好像，好像真的变回我原来的样子了！大眼睛！坚挺的鼻子！！多亏了你啊！", 37, 9310048, true, true)
            } else {
                if (status === a++) {
                    cm.effect_Voice("Field.img/masteryBook/EnchantSuccess", 100);
                    cm.sendNormalTalk_Bottom("(好像之前的样子更好一点……)总之，真是太好了。", 57, 0, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("你刚刚说要找的是本什么#b书#k啊？这里到处都是书，所以你要找那本#b书#k，就好比大海捞针啊。需要我帮忙吧？", 37, 9310048, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("很久以前，有一位叫做#b老魔僧#k的大师在此地进行有关妖怪的研究……你是否知道此人？", 57, 0, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#b老魔僧#k……！！！我虽然没见过他本人，但听说过很多有关他的事情。没有人比他更了解妖怪了。这么看来，他就任#r这里的方丈大师#k时，妖怪还没有现在这么多。", 37, 9310048, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("他出去修行后，至今没有回来……而如今的少林寺是由#b#p9310053##k大师接管的。", 37, 9310048, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("#b不过，由于妖怪们再次出现，很多人都纷纷来到少林寺，并献上财物进行祈祷。这么看来，少林寺也因为妖怪而人气高涨了。#k", 37, 9310048, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.askYesNo_Bottom("我听说#b老魔僧#k在这藏经阁里弄了一个秘密书库。\r\n啊，对了，上次我打扫#r#m701220300#的时候，发现了一个奇特的地方，你要不去调查一下那个地方吧？#k", 37, 9310048)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("不过，这里全部被妖怪占领着。前往6层的路非常危险。如果你消灭#m701220100#的100只#o9600020#和100只#o9600023#，那就可以趁着#b妖怪的力量减弱而到达#m701220200#。#k", 37, 9310048, false, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk_Bottom("如果你消灭200只妖怪，那应该可以让它们消停会儿！", 37, 9310048, true, true)
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
            cm.sendNormalTalk_Bottom("现在妖怪们的气息好像减弱了不少，你赶快前往#r#m701220200##k吧！#r搭乘右上方的传送口，就可以移动至#r#m701220200##k。#k", 37, 9310048, false, true)
        } else {
            if (status === a++) {
                cm.gainExp(Math.pow(cm.getLevel(), 3) / 4);
                cm.fieldEffect_KinesisEXP(Math.pow(cm.getLevel(), 3) / 4);
                cm.forceCompleteQuest(62009);
                cm.effect_Voice("Field.img/masteryBook/EnchantSuccess", 100);
                cm.playerMessage(5, "趁着妖怪们的力量减弱，赶快前往下一层吧。");
                cm.dispose()
            }
        }
    }
};