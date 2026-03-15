var status = -1;
var selectionLog = [];

function start(mode, type, selection) {
    if (cm.getNowTimeString(3).equals(cm.getStringFromQuestInfo(64777, "lastday"))) {
        cm.sendNormalTalk_Bottom("#b（梅里耶很忙的样子，明天再来找他吧。）", 56, 0, false, true);
        cm.dispose()
    } else {
        var reactor = "action" + cm.getNumberFromQuestInfo(64777, "talk");
        eval(reactor)(mode, type, selection)
    }
}

function action0(d, c, b) {
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
            cm.sendNormalTalk_Bottom("#b你好，梅里耶，今天天气真好呢。", 56, 0, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("唔～又见面了。今天天气……嗯，天气真好。", 36, 9401033, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("在海上，即使是老船夫，也很难承受如此阳光强烈的天气。灼热的太阳，还有无边无际的大海，人们很有可能被反射在平静的水面上的阳光所灼伤。我们船上做饭的爷爷就是因为海浪反射的光线而失明。", 36, 9401033, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#b啊…… ", 56, 0, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("当然，比起台风天这算是不错了，至少不是最坏的情况，呵呵呵。", 36, 9401033, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#b看来你经常出海。", 56, 0, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("没错，我生命中一半的时间在陆地上度过，一半的时间是在海上度过。", 36, 9401033, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("今天这样的天气，在室内聊天简直太可惜了，不是吗？呵呵，应该出去欣赏一下深渊风景之类的。", 36, 9401033, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.addNumberForQuestInfo(64777, "talk", 1);
                                            cm.setStringForQuestInfo(64777, "lastday", cm.getNowTimeString(3));
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

function action1(d, c, b) {
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
            cm.sendNormalTalk_Bottom("#b梅里耶，你过得好吗？", 56, 0, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("又是你，我还想着别再用这副模样见到你了。", 36, 9401033, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#b什么？", 56, 0, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("为什么我做不到？而你却可以做到？", 36, 9401033, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("我真的不懂，明明就实力而言，我无人能敌。", 36, 9401033, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("你知道吗？成为冒险家之后，无数的赞美与感谢成为了我的日常。", 36, 9401033, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("哈……我今天不想再说话了。", 36, 9401033, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.addNumberForQuestInfo(64777, "talk", 1);
                                        cm.setStringForQuestInfo(64777, "lastday", cm.getNowTimeString(3));
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

function action2(d, c, b) {
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
            cm.sendNormalTalk_Bottom("嘿，如果你有时间就来这里坐一会儿吧。", 36, 9401033, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#b梅里耶。", 56, 0, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("呵呵，我就是今天有些伤感。", 36, 9401033, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#b你怎么了？", 56, 0, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("这种时候，我就是会想起那些往事。", 36, 9401033, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("我小时候，父母在海边运营旅馆。旅馆这种地方，没有人会停留太久。", 36, 9401033, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("无数冒险家拖着疲惫的身体来到这里，休息片刻后第二天又怀着更大的梦想离开，我就是在那样的地方看着那些身影长大的。", 36, 9401033, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("我曾经真的很讨厌那种心情，只有我停滞不前的心情，只有我不会变化的心情。", 36, 9401033, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("#b原来是这样。", 56, 0, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("噗呼，你不用也这么伤感，这不是什么煽情的故事，只是我不喜欢的故事罢了。", 36, 9401033, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk_Bottom("不过哦，来到深渊之后，我又再次感觉到了那种心情。", 36, 9401033, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk_Bottom("所以我只是有点，就一点点伤感。", 36, 9401033, true, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk_Bottom("不过我还有明天，只要明天会与今天有所不同就可以了，不是吗？", 36, 9401033, true, true)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.addNumberForQuestInfo(64777, "talk", 1);
                                                                cm.setStringForQuestInfo(64777, "lastday", cm.getNowTimeString(3));
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/64781.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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