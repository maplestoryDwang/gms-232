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
            cm.askYesNo("#h0#，修行进展顺利吗？有什么需要我的地方吗？", 0, 2151009)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("#p2151009#，我刚好想和你说话呢。", 16, 2151009, false, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("(啊！#h0#想和我说话！？)嗯？有什么事吗？？", 0, 2151009, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("我想再和你一起，进行上次的修炼。", 16, 2151009, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("上次的修炼？嗯……你好像又遇到了障碍。但是以你现在的水平，那种修炼好像不会有什么帮助……", 0, 2151009, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("好吧，知道了。", 16, 2151009, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("等等……等等。你就这么走了吗……我把之前想到的很好的修炼方法告诉你。#h0#，现在你最大的力量源泉是复仇之心。你想和自己内心的愤怒战斗吗？", 0, 2151009, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk("内心的……愤怒？？", 16, 2151009, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk("是的。因为你把愤怒作为自己力量的源泉，只要能控制住自己的愤怒，就可以让那份力量变得更强。", 0, 2151009, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk("好像是个不错的想法。但是我怎么才能和自己的愤怒战斗呢？", 16, 2151009, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk("虽然我剩下的力量已经不多了，但是我应该可以把#h0#你送到自己内心的世界中。当然，#h0#并不是真的去了那里。从某种角度来看，更像是在冥想。", 0, 2151009, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk("但是仪式的世界并不是没有危险。在那里受到的伤害，必须由你的身体来承受。", 0, 2151009, true, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.askYesNo("#h0#，准备好了吗？(接受时立即移动。如果想重新开始，请放弃任务，然后重新接受任务。)", 0, 2151009)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.forceStartQuest(23221, "");
                                                                cm.dispose();
                                                                cm.warp(924020020, 0, false)
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
    }
    status++;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            var e = cm.getQuest();
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/23221.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk("#h0#，你回来啦！！状态怎么样？", 0, 2151009, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("没想到我的愤怒竟然这么强。要控制住愤怒真的很不容易。", 2, 2151009, true, true)
            } else {
                if (status === a++) {
                    cm.askYesNo("但是你成功了。我知道你一定会成功的。祝贺的话以后再说，为了不忘记现在的状态，需要我帮你刻印吗？", 0, 2151009)
                } else {
                    if (status === a++) {
                        cm.updateInfoQuest(1073, "3101=10;3120=35;3121=201;3122=201");
                        cm.forceCompleteQuest(23221);
                        cm.changeJob(3122);
                        cm.sendNormalTalk("#h0#，现在你终于可以控制住内心的愤怒了。从现在开始就要靠你自己努力修炼了。我也想尽快变回过去的样子。", 1, 2151009, false, false)
                    } else {
                        if (status === a++) {
                            cm.gainItem(1142556, 1);
                            cm.forceStartQuest(32003, "");
                            cm.forceCompleteQuest(32003);
                            cm.dispose()
                        }
                    }
                }
            }
        }
    }
};