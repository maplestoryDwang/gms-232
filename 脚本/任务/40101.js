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
            cm.forceStartQuest(40101, "");
            cm.updateInfoQuest(40101, "");
            cm.dispose()
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/40101.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.curNodeEventEnd(true);
            cm.setInGameDirectionMode(true, true, true);
            cm.sendNormalTalk("噢~我听说有人要献给我东西，是你们吗？啧啧……脸倒是长得挺不错的，估计是穷得叮当响的兄妹啊。你们能有什么东西可以献给我。", 33, 2420001, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("#face0# #b(什么？我的衣服怎么？！好歹也是影子骑士团的制服，质量可是上等的！如果看起来贫穷的话，女王本不该收礼，不是吗？这到底是什么女王？！)", 41, 2400005, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("#face4#我等为了让女王更加貌美如花，特地带来了非常珍贵的东西。不知王妃有没有听过大宇果实？……可以让王妃的皮肤更加美丽滋润。", 41, 2400005, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("哈哈哈哈！卑贱的人，还挺有眼光的！竟然会赏识我的美丽！大宇果实？看来是个卑贱的东西，但是也多少能有点用，我就慈悲地收下了。", 33, 2420001, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("#face5#王妃收下了此等微薄之礼！实乃我的荣幸！真心地表示感谢！", 41, 2400005, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("哈哈哈哈哈哈！本该如此，那么就退下吧。如果喜欢的话，可以到我的接见室参观一下我的宝物。", 33, 2420001, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("#face5#啊啊……还可以亲眼目睹王妃的宝物！实在是感激不尽！", 41, 2400005, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.inGameDirectionEvent_MoveAction(1);
                                        cm.inGameDirectionEvent_AskAnswerTime(2000)
                                    } else {
                                        if (status === a++) {
                                            cm.inGameDirectionEvent_MoveAction(0);
                                            cm.inGameDirectionEvent_AskAnswerTime(500)
                                        } else {
                                            if (status === a++) {
                                                cm.fieldEffect_PlayBGM("Bgm33.img/SmileZero", 0, 0);
                                                cm.sendNormalTalk("#b(……这王妃是漂亮的吗？……我还真没看出来……)", 41, 2400006, false, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk("#face7# #b(什么呀？！是开玩笑的吧。别说那种脸长得漂亮！呕……都快要吐出来了。)", 41, 2400005, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk("#b(但是#p2400005#不是那么说的嘛……？)", 41, 2400006, true, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk("#face8# #b(有必要的话也可以适当地说谎啊。呕~阿谀奉承也该有个限度吧，我都快翻江倒海了……！)", 41, 2400005, true, true)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.sendNormalTalk("拜见过王妃了吗，两位……", 33, 2420000, true, true)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.sendNormalTalk("#face8# #b(呕……想要吐得都说不出话来……绝对不能让他们怀疑，该怎么办？)", 41, 2400005, true, true)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.sendNormalTalk("#face4#是的，非常感谢。那么我们就告辞了。", 41, 2400006, true, true)
                                                                    } else {
                                                                        if (status === a++) {
                                                                            cm.fieldEffect_PlayBGM("Bgm33.img/ShadowTemple", 0, 0);
                                                                            cm.sendNormalTalk("告……辞吗？就这么走了？", 33, 2420000, true, true)
                                                                        } else {
                                                                            if (status === a++) {
                                                                                cm.sendNormalTalk("#face4#啊？是的，我们已经办完事情了。", 41, 2400006, true, true)
                                                                            } else {
                                                                                if (status === a++) {
                                                                                    cm.sendNormalTalk("……是嘛，办完事情了……那么我就没理由拦住你们。那么请走好。", 33, 2420000, true, true)
                                                                                } else {
                                                                                    if (status === a++) {
                                                                                        cm.sendNormalTalk("#face4#谢谢你，#p2420000#。", 41, 2400006, true, true)
                                                                                    } else {
                                                                                        if (status === a++) {
                                                                                            cm.sendNormalTalk("……我的名字不是#p2420000#。", 33, 2420000, true, true)
                                                                                        } else {
                                                                                            if (status === a++) {
                                                                                                cm.inGameDirectionEvent_MoveAction(1);
                                                                                                cm.inGameDirectionEvent_AskAnswerTime(2000)
                                                                                            } else {
                                                                                                if (status === a++) {
                                                                                                    cm.inGameDirectionEvent_MoveAction(0);
                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(500)
                                                                                                } else {
                                                                                                    if (status === a++) {
                                                                                                        cm.sendNormalTalk("#b(……为什么宰相突然向我们搭话？难道是知道我们要拿走宝石了吗？我们觉得我们没有可以惹人怀疑的地方啊……真搞不懂。)", 41, 2400005, false, true)
                                                                                                    } else {
                                                                                                        if (status === a++) {
                                                                                                            cm.sendNormalTalk("#b(难道……找我们有什么事情……)", 41, 2400006, true, true)
                                                                                                        } else {
                                                                                                            if (status === a++) {
                                                                                                                cm.sendNormalTalk("#b(你也觉得吧？但是素未谋面的宰相，怎么可能会找我们有事情呢……而且还说自己的名字不是#p2420000#……他到底想说什么？)", 41, 2400005, true, true)
                                                                                                            } else {
                                                                                                                if (status === a++) {
                                                                                                                    cm.sendNormalTalk("#b(…………)", 41, 2400006, true, true)
                                                                                                                } else {
                                                                                                                    if (status === a++) {
                                                                                                                        cm.sendNormalTalk("#face4# #b(不过，你的演技挺不错吗？这突然向你搭话，也不会惊慌失措。太厉害了。)", 41, 2400005, true, true)
                                                                                                                    } else {
                                                                                                                        if (status === a++) {
                                                                                                                            cm.sendNormalTalk("#b(是嘛？……我只是看着阿尔法学的。)", 41, 2400006, true, true)
                                                                                                                        } else {
                                                                                                                            if (status === a++) {
                                                                                                                                cm.sendNormalTalk("#b(但是蓝色眼泪我们该怎么拿走？放在了接见室的中央，如果偷走了的话，以王妃的性格肯定引起大骚乱的……戒备也很森严。)", 41, 2400005, true, true)
                                                                                                                            } else {
                                                                                                                                if (status === a++) {
                                                                                                                                    cm.sendNormalTalk("#b(不能引起骚乱吧？)", 41, 2400006, true, true)
                                                                                                                                } else {
                                                                                                                                    if (status === a++) {
                                                                                                                                        cm.sendNormalTalk("#b(如果可以的话，我现在就拿走了……但不能那么做，我们还是多搜集点情报吧。)", 41, 2400005, true, true)
                                                                                                                                    } else {
                                                                                                                                        if (status === a++) {
                                                                                                                                            cm.forceCompleteQuest(40101);
                                                                                                                                            cm.forceCompleteQuest(40910);
                                                                                                                                            cm.setInGameDirectionMode(false, true, false);
                                                                                                                                            cm.gainExp(1599000);
                                                                                                                                            cm.gainItem(4033811, -1);
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
                                }
                            }
                        }
                    }
                }
            }
        }
    }
};