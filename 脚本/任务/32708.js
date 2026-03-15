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
            cm.sendNormalTalk_Bottom("呃，很高兴见到你。我是魔法师埃尔文。如果你是冒险岛世界的居民，应该听过我的名字吧？", 37, 1530020, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("什么？第一次听说？你怎么能说出这么失礼的话！别看我的样子不起眼，在结界和空间魔法的操纵上，我可是不输给任何人的。可以说是大魔法师汉斯的大弟子了吧？", 37, 1530020, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("不过人有失手马有失蹄嘛。就在几天前，我犯了一个很大的错。那时我正在练习召唤魔法，结果不小心把次元之间的缝隙打破了一个洞。后来就是……哐！！的一声，从天上掉下来个巨大衣柜！", 37, 1530020, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("要是这件事被汉斯知道的话……唉，想象一下就觉得毛骨悚然。我这么说可不是为了炫耀，就算没有这次的事，我也因为经常闯祸而被汉斯不待见呢。", 37, 1530020, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("所以我打算就当什么事也没发生一样，悄悄地把空间缝隙给堵上。", 37, 1530020, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#b（……只要堵上就行了吗？这么简单？）#k", 57, 0, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("那还怎样？只要不被发现就万事大吉了。\r\n可是……现在的问题是，和衣柜一起掉下来的这家伙并不想回到他原来的世界啊！！", 37, 1530020, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.askYesNo_Bottom("竟然说自己非常喜欢这个‘幻想世界’？什么是幻想世界嘛？这家伙说的话我真是一句都听不懂！我就拜托你了，麻烦你好好劝劝这家伙让他乖乖返回原来的世界吧，好吗？", 37, 1530020)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("拜托你去劝劝那个固执的家伙吧。\r\n\r\n#b（试着说服异界学生返回原来的世界吧。）#k", 37, 1530020, false, true)
                                        } else {
                                            if (status === a++) {
                                                cm.forceStartQuest(32708, "");
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
            cm.askMenu_Bottom("回到原来的十街区？不要。我喜欢这里。\r\n#b\r\n#L3#你的父母一定很担心你的。#l", 37, 1530000)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("你的父母一定很担心你的。", 56, 0, false, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("我父母才不管我呢。他们带着我弟弟去了海外，根本就对这里发生的事置之不理！我跟他们说自己在学校里被孤立，可是却听不到他们说一句担心我的话，就只知道把我转到别的学校去。昨天晚上我还因为不想去新学校上学，而躲在衣柜里偷偷哭泣呢！", 37, 1530000, true, true)
                } else {
                    if (status === a++) {
                        cm.askMenu_Bottom("不管你说什么我都喜欢这里！\r\n#b\r\n#L1#在这里你只会被当做一个异邦人。#l", 37, 1530000)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("在这里会被人当成异邦人的哦……？", 56, 0, false, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("我因为在学校被孤立，光是转学就转了十多次了。被当成异邦人，对我来说早就习以为常了。", 37, 1530000, true, true)
                            } else {
                                if (status === a++) {
                                    cm.askMenu_Bottom("我是不会回到学校去的。\r\n#b\r\n#L2#这里的食物并不适合你的口味。#l", 37, 1530000)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("这里的食物应该不符合你的胃口吧？", 56, 0, false, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("我已经吃过了。你是说花蘑菇汤还有火独眼兽牛杂汤之类的吗？幸好这些我都能吃。", 37, 1530000, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("#b（看来不论我说什么你都听不进去啊……你真的就这么喜欢这个世界吗？）#k", 56, 0, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk_Bottom("听说这个世界不但有魔法，还有龙呢！我一直所憧憬的就是这样一个世界。我现在都还没来得及好好看看呢，说什么也不能回去啊，不是吗？", 37, 1530000, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk_Bottom("但是你原来生活的地方没有黑魔法师那样的坏蛋，不是吗？那里应该更和平，更好玩啊？", 37, 1530020, true, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk_Bottom("这个嘛，站在你们这里人的立场也可以那么说，不过……", 37, 1530000, true, true)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.sendNormalTalk_Bottom("还有，就算你的父母再怎么不关心你，你不去上课的话，学校也一定会联系他们的，不是吗？", 37, 1530020, true, true)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.sendNormalTalk_Bottom("……#b（异界学生陷入了沉默。）#k\r\n不过我想暂时留在这里，就算是几天也好。有什么办法可以在这里生活吗？", 37, 1530000, true, true)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.sendNormalTalk_Bottom("呃，这该如何是好呢。当然，他是被我召唤来的，所以我也有责任……\r\n等等，那样的话我想到一个办法了。不知道你有没有读过《乞丐与王子》的童话呢？", 37, 1530020, true, true)
                                                                    } else {
                                                                        if (status === a++) {
                                                                            cm.sendNormalTalk_Bottom("……？", 37, 1530000, true, true)
                                                                        } else {
                                                                            if (status === a++) {
                                                                                cm.sendNormalTalk_Bottom("……？", 56, 0, true, true)
                                                                            } else {
                                                                                if (status === a++) {
                                                                                    cm.sendNormalTalk_Bottom("很简单。就是暂时把你们两个人的生活调换一下。\r\n怎么样，是不是听起来很有趣？这真是个两全其美的办法啊。要不然哪有机会体验其他世界的生活呢？#h0#，你穿上校服，暂时充当一下异界学生吧。", 37, 1530020, true, true)
                                                                                } else {
                                                                                    if (status === a++) {
                                                                                        cm.sendNormalTalk_Bottom("……让我充当异界学生？", 56, 0, true, true)
                                                                                    } else {
                                                                                        if (status === a++) {
                                                                                            cm.sendNormalTalk_Bottom("是啊。初次见面就让你帮这样的忙真是不好意思，可是为了扭转那家伙的固执也只能如此了。你只要暂时蒙骗一下那个世界的人就可以了。剩下的事情我一定会想办法处理的。", 37, 1530020, true, true)
                                                                                        } else {
                                                                                            if (status === a++) {
                                                                                                cm.sendNormalTalk_Bottom("真的吗？你只要能坚持几天的话……之后我也会老老实实地回到原来世界的。拜托了，#h0#！", 37, 1530000, true, true)
                                                                                            } else {
                                                                                                if (status === a++) {
                                                                                                    cm.askYesNo_Bottom("就是呢！怎么样，#h0#？你愿意接受新的冒险吗？", 37, 1530020)
                                                                                                } else {
                                                                                                    if (status === a++) {
                                                                                                        cm.sendNormalTalk_Bottom("OK，很爽快嘛！你真是太合我心意了。\r\n\r\n#b（和埃尔文对话，就可以开始正式的故事了。）#k", 37, 1530020, false, true)
                                                                                                    } else {
                                                                                                        if (status === a++) {
                                                                                                            cm.forceCompleteQuest(32708);
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
                                }
                            }
                        }
                    }
                }
            }
        }
    }
};