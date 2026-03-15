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
            cm.curNodeEventEnd(true);
            cm.setInGameDirectionMode(true, true, true);
            cm.inGameDirectionEvent_AskAnswerTime(500)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("……#p2400005#。没有找出不洁者的其他办法了吗？", 41, 2400006, false, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("这个么。#p2400000#似乎也不知道别的办法了…… 时间神殿那里好像也没有答案。", 41, 2400005, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("所以之前我也说啦。与其寻找不洁者，倒不如找到不管有没有不洁者我们都能觉醒成超越者的方法。", 41, 2400005, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("#face10#但是…… 也没人知道那种方法啊。", 41, 2400006, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("如果我们变得更强大的话，说不定就有办法了。我们先再想想吧。", 41, 2400005, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("#face10#到什么时候？", 41, 2400006, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk("到想到为止……？", 41, 2400005, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk("#face10#……跟我出去一下好吗？去时间神殿，丢失的时间……", 41, 2400006, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk("嗯？为什么去那？", 41, 2400005, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk("我有话想说。", 41, 2400006, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.updateInfoQuest(40704, "");
                                                        cm.forceStartQuest(40704, "");
                                                        cm.inGameDirectionEvent_AskAnswerTime(500)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.dispose();
                                                            cm.getPlayer().setGender(0);
                                                            cm.onZeroInfo(199);
                                                            cm.warp(328090300, 0, false);
                                                            cm.setInGameDirectionMode(false, true, false)
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/40704.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.inGameDirectionEvent_AskAnswerTime(500)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("#face12#……现在…… 你要杀掉我吗？", 41, 2400006, false, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("#face12#……不是让你别说这些奇怪的话了嘛？我只是觉得你失去了理智，想让你清醒。", 41, 2400005, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("#face12#但是…… 我是不洁者……", 41, 2400006, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("……正如你所说，我在忘却的记忆中确实看到了些东西。威尔说你是不洁者。但如果那是骗术怎么办？", 41, 2400005, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("#face7#……骗术？", 41, 2400006, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("#face11#他打算让我这个真正的不洁者杀死你，让我们永远无法成为超越者的…… 那种骗术。", 41, 2400005, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk("#face11#为了将我们分开，除掉我们中的其中一个，威尔绝对有可能使用这种骗术。他是个很狡猾的家伙。", 41, 2400005, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk("#face3#忽略那种可能，说让我杀掉你或者怎么样的…… 你那么说的话，我很为难。你明白了吗？", 41, 2400005, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk("#face7#…………", 41, 2400006, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk("#face2#你也觉得我的话似乎有道理吧？那现在你应该怎么做？", 41, 2400005, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk("……什么？", 41, 2400006, true, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk("如果就像我假设的那样，我是不洁者的话…… 你会把我杀了？", 41, 2400005, true, true)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.sendNormalTalk("#face1#那不可能啊……！", 41, 2400006, true, true)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.fieldEffect_PlayBGM("Bgm33.img/BeBornZero", 0, 0);
                                                                    cm.sendNormalTalk("#face3#你也那么说的话…… 为什么之前对我说那样的话，那么？", 41, 2400005, true, true)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.sendNormalTalk("原本一个的神之子被分成两个，这也许只是个意外。但是我们在一起的日子并不是意外，而是靠我们的意志。", 41, 2400005, true, true)
                                                                    } else {
                                                                        if (status === a++) {
                                                                            cm.sendNormalTalk("到了现在讨论要不要杀掉谁…… 那是不可能的啊。至少我那么认为。……你不这么想吗？", 41, 2400005, true, true)
                                                                        } else {
                                                                            if (status === a++) {
                                                                                cm.sendNormalTalk("……我也那么想。", 41, 2400006, true, true)
                                                                            } else {
                                                                                if (status === a++) {
                                                                                    cm.sendNormalTalk("#face4#我们俩争斗也无济于事。因为你就是我。我就是你…… 谁杀死谁都等于是自杀。", 41, 2400005, true, true)
                                                                                } else {
                                                                                    if (status === a++) {
                                                                                        cm.sendNormalTalk("#face4#我们怎么能认错敌人呢？我们的敌人是威尔。所以…… 我们消灭威尔吧。", 41, 2400005, true, true)
                                                                                    } else {
                                                                                        if (status === a++) {
                                                                                            cm.sendNormalTalk("嗯…… 好的。就那么做吧。我们消灭威尔，前往冒险岛世界吧。", 41, 2400006, true, true)
                                                                                        } else {
                                                                                            if (status === a++) {
                                                                                                cm.sendNormalTalk("#face5#并且，就像女神所期望的那样…… 为了冒险岛世界战斗吧……", 41, 2400006, true, true)
                                                                                            } else {
                                                                                                if (status === a++) {
                                                                                                    cm.sendNormalTalk("……我们先休息一下。和你打斗真的是很累呢。", 41, 2400005, true, true)
                                                                                                } else {
                                                                                                    if (status === a++) {
                                                                                                        cm.sendNormalTalk("#face4#那个么…… 因为我比#p2400005#你更强啊。", 41, 2400006, true, true)
                                                                                                    } else {
                                                                                                        if (status === a++) {
                                                                                                            cm.sendNormalTalk("#face0#什么啊？！刚刚明明是我赢了啊。", 41, 2400005, true, true)
                                                                                                        } else {
                                                                                                            if (status === a++) {
                                                                                                                cm.sendNormalTalk("#face4#那是我让你的。原来你不知道啊，#p2400005#？", 41, 2400006, true, true)
                                                                                                            } else {
                                                                                                                if (status === a++) {
                                                                                                                    cm.sendNormalTalk("#face7#你…… 只是在开玩笑吧？", 41, 2400005, true, true)
                                                                                                                } else {
                                                                                                                    if (status === a++) {
                                                                                                                        cm.sendNormalTalk("#face4#……是吗？", 41, 2400006, true, true)
                                                                                                                    } else {
                                                                                                                        if (status === a++) {
                                                                                                                            cm.forceCompleteQuest(40704);
                                                                                                                            cm.forceCompleteQuest(40973);
                                                                                                                            cm.gainExp(187000000);
                                                                                                                            cm.dispose();
                                                                                                                            cm.warp(320000000, 0, false);
                                                                                                                            cm.setInGameDirectionMode(false, true, false)
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