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
            cm.sendNormalTalk("好了，赶紧动起来吧。没时间了。就现在这一刻说不定普赛依又在袭击某条商船了。", 0, 9390244, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("喂，莱文。", 2, 9390244, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("欢迎你。第一次来到我们船上吧？虽然是用商船改造的船，但是样子还是有些变了吧。不过说到底还是艘商船而已。", 0, 9390244, true, true)
                } else {
                    if (status === a++) {
                        cm.askYesNo("可是你有什么事吗？有什么要办的事情吗？", 0, 9390244)
                    } else {
                        if (status === a++) {
                            cm.forceStartQuest(17642, "");
                            cm.sendNormalTalk("我还没来得及跟你说，这位是要搭乘这船的人。所以尽管迟了但是还是应该跟你说一声才是", 2, 9390244, false, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("你在说什么呀？谁要乘船？", 0, 9390244, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("啊……其实我也不知道她名字呢。可是你应该认识她的。她的实力好像也还行。", 2, 9390244, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk("你说什么？你现在让一个连名字都不知道的人随便搭乘我们船吗？实力不是重要的。重要的是航海不是开玩笑的。", 0, 9390244, true, true)
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/17642.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk_Bottom("啊……对不起。我太轻率了。我应该先和你商量一下的。", 56, 9390244, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("那样才对。虽然我们是朋友，但是我现在的身份是这艘船的船长啊。任何小事都应该先向我报告……", 32, 9390244, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("哎呀，这船怎么造的这么没品味啊？是为了控制在便宜的价格范围内吗。", 36, 9390204, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("！！！！！！！！！！！！！！！！！！", 32, 9390244, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("听你一说我觉得莱文你说得对。虽然是朋友关系也该公私分明。我好好跟她说让她下船，你就别操心了。", 56, 9390244, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("喂。我有话跟你说。", 56, 9390244, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("嗯？什么事？你应该不会是要我做这低贱的船务吧？", 36, 9390204, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("不，那倒不是的。其实是想对你说抱歉……", 56, 9390244, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("虽然是抱歉的话，但是今后也许会发生一些危险的事情。关于这点希望你能理解。", 32, 9390244, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("我以为你要说什么呢。那个我早就想到了。我要是被抓了一定不会麻烦你来救我的，你就别担心我了，担心担心那边吧。如果没别的事我就失陪了。", 36, 9390204, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk_Bottom("莱文怎么说的？你让她下船也行。和我也没什么深交，不过是比你多见过一次罢了。", 56, 9390244, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk_Bottom("喔呵呵。船已经离港，想下船都难喽。让女孩一个人回去也不安全。反正不管怎样你知道那么回事就行了。", 32, 9390244, true, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk_Bottom("(不管怎么说，好像了解了又貌似完全不了解的家伙。变来变去的。)", 56, 9390244, true, true)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.forceCompleteQuest(17642);
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
};