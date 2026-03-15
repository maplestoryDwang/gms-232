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
            cm.sendNormalTalk("米利安是为了保护公主而冒充的假公主。那就是说，真正的公主在别处？", 16, 0, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("不过，公主确实是和其他王室成员一起逃去避难了。而且现在情况又非常混乱，公主现在肯定在一个众目睽睽的地方。也就是说，#b公主肯定就在这附近！#k", 16, 0, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("可对于公主，我一无所知啊。既然叫“公主”，我只能肯定她是个女的……。", 16, 0, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("除了已经说了自己不是公主的米利安之外，和克里蒂亚斯的其他女性们对话。", 16, 0, true, true)
                    } else {
                        if (status === a++) {
                            cm.forceStartQuest(32509, "");
                            cm.sendNormalTalk("和侍女长#b帕尔妮#k和防具商人#b妮塔#k，大学前的#b比阿特丽斯和比安卡#k对话吧。", 16, 0, true, false)
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

function stage0(d, c, b) {
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
        if (status == a++) {
            cm.sendNormalTalk("(向帕尔玛询问真公主的行踪。)", 2, 2232008, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("啊？真正的公主。我不知道你是从哪里听到这种话的。", 0, 2232008, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("(向装蒜的帕尔玛询问她是否就是公主。)", 2, 2232008, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("这种话可不能随随便便乱讲的。我区区一个女仆长怎么能和公主比呢，真是不像话。", 0, 2232008, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("…………不过，从你刚刚的话语中，我才切切实实感受到了克里蒂亚斯所面临的灾难。#h0#，你来到的是一个连公主和我们都被完全遗忘的世界。", 0, 2232008, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("克里蒂亚斯为什么会变成这样呢……总之，关于公主，我能讲的只有这些了。", 0, 2232008, true, true)
                            } else {
                                if (status === a++) {
                                    cm.updateInfoQuest(32509, "NpcSpeech=22320081");
                                    cm.OnStartNavigation(241000110, 1, "2232006", 0);
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

function stage1(d, c, b) {
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
        if (status == a++) {
            cm.sendNormalTalk("(向比阿特丽斯询问了是否知道有关公主消失的事情。)", 2, 2232006, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("你说公主啊，我听说如今她正和其他王室成员一起在村庄旅馆里避难。", 0, 2232006, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("(询问比阿特丽斯是否就是公主本人。)", 2, 2232006, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("我吗？你的想法很有趣啊，不过我可以很肯定地回答你，我不是。海加顿陛下的独生女公主，怎么可能是我这样的大妈呢。", 0, 2232006, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("我不知道公主消失的原因，也不知道#h0#你为何要寻找公主。总之，我好像没什么能帮上你。我能说的就只有这些了。", 0, 2232006, true, true)
                        } else {
                            if (status === a++) {
                                cm.updateInfoQuest(32509, "NpcSpeech=22320081/22320062");
                                cm.dispose()
                            }
                        }
                    }
                }
            }
        }
    }
}

function stage2(d, c, b) {
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
        if (status == a++) {
            cm.sendNormalTalk("(向比安卡询问了是否知道有关公主消失的事情。)", 2, 2232005, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("公主？啊啊，好像有这么回事，公主她。哎，慢着，你说她消失了？那你的意思是她现在不在？", 0, 2232005, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("(询问比安卡是否就是公主本人。)", 2, 2232005, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("什么？我？怎么可能。一想到公主一出生就要面对那种无趣的人生，我就已经起鸡皮疙瘩了。呃呃，我才不要！", 0, 2232005, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("虽然我不知道自己为何会有这种想法，但我只是魔法学校的一名普通学生。和我一起上学的陈也许会知道点什么。", 0, 2232005, true, true)
                        } else {
                            if (status === a++) {
                                cm.updateInfoQuest(32509, "NpcSpeech=22320081/22320062/22320053");
                                cm.OnStartNavigation(241000100, 1, "2230101", 0);
                                cm.dispose()
                            }
                        }
                    }
                }
            }
        }
    }
}

function stage3(d, c, b) {
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
        if (status == a++) {
            cm.sendNormalTalk("(向妮塔询问是否知道有关公主消失的事情。)", 2, 2230101, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("什么？公主吗？我听说她在旅馆里。可为了看店，我很难抽出时间，我还从来没见过她的容貌呢。", 0, 2230101, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("(询问妮塔是否就是公主本人。)", 2, 2230101, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("哎？我吗？怎、怎、怎、怎么可能！我只是武器商店的妮塔罢了。我父亲也不是国王，而是东南部哨所的道斯托夫！", 0, 2230101, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("哎哟，你把我吓了一跳~这种玩笑虽然有趣，可你不能随便乱开啊。", 0, 2230101, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("不过，公主到底是一位怎样的人物呢？她应该非常美丽吧~", 0, 2230101, true, true)
                            } else {
                                if (status === a++) {
                                    cm.updateInfoQuest(32509, "NpcSpeech=22320081/22320062/22320053/22301014");
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