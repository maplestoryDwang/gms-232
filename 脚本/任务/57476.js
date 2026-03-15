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
            cm.sendNormalTalk("我听说，织田军的阴阳师首领#b#p9130090##k正在此地进行着某种仪式的准备工作。", 2, 9130087, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("没错。这个阴险的男人似乎又在搞着什么小动作……他不会是在准备进行新的魔王降临仪式吧……但是这一次，仪式的活祭品#b#p9130021##k已经不在他们手里了啊……", 0, 9130087, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("魔王降临的仪式、活祭品……如果说，主导了这项仪式的人正是#b#p9130090##k，那他和松山家的破灭一定也脱不了干系。", 2, 9130087, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("何止是脱不了干系，虽说进攻松山家、抓走了#b#p9130021##k的人是#b#p9131000##k，但是给他下达指示，让他抓走姬儿的人正是#b#p9130090##k啊。", 0, 9130087, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("什么！！！也就是说，不仅#b#p9131000##k是我不共戴天的仇敌，还有#b#p9130090##k也是一样的啊。我绝不会放任他活着离开这里！", 2, 9130087, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("我能够理解剑斗你对他的愤恨。但是不要忘记，你是一名武士，你必须要学会纵观大局才行。如果你一心只想着复仇，而因此忽略了其他事物，那么你只会一事无成。", 0, 9130087, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("家康大人所言极是。我确实是太不冷静了。", 2, 9130087, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk("不过话说回来，这次要做的事情也和之前差不太多。首先是调查清楚#b#p9130090##k在背地里究竟在搞什么鬼。如果是什么危害世界的事情，就要打倒他，阻止他阴谋得逞。这个任务可以交给你来负责吗？", 0, 9130087, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk("当然可以。#就请把阻止#b#p9130090##k的任务交给我来办吧。", 2, 9130087, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk("#b#p9130090##k应该就在这里面。好了，剩下的就交给你了。", 0, 9130087, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.forceStartQuest(57476, "");
                                                    cm.forceCompleteQuest(57476);
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/57476.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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