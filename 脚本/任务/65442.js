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
            cm.warp(871000089, 0, false);
            cm.dispose()
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/65442.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk_Bottom("#face3#呼呼，你看他那背影。那个像熊一样的大块头端着小小咖啡的样子你不觉得很萌吗？", 37, 9401160, false, true)
        } else {
            if (status === a++) {
                cm.askMenu_Bottom("#b(....)\r\n#L0#回答是的。#l\r\n#L1#回答完全不是。#l", 57, 0)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face1#没错吧？", 37, 9401160, false, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face1#要来杯咖啡吗？", 37, 9401160, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#b不用了。", 57, 0, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#face1#真是万幸。那个可爱的小熊喝咖啡和果汁就像喝水一样，让我有点难堪呢。", 37, 9401160, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("#b你不累吗？", 57, 0, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("#face1#一点也不~我也有工资可拿，这种程度算是很轻松了。看到那些可爱的朋友们，我反而感到更开心呢。", 37, 9401160, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("#face2#其实，我压根没抱希望能马上找到工作，谁知道竟然找到了这么好的工作。我真是好运。奶奶也很喜欢新家，早知道是这样，我就不苦恼那么久了。", 37, 9401160, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("#b那就好，不过你不想念废弃都市吗？", 57, 0, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk_Bottom("#face1#当然想念了。毕竟我从生下来就一直住在那里，我的朋友也在那里。我原想在那里的生活才是对的，但现在我在这里这么舒心……莫名觉得自己能比想象中更快适应这里。", 37, 9401160, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk_Bottom("#b大家都是好人，你和他们很快就能亲近起来了。", 57, 0, true, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk_Bottom("#face2#嗯，但愿如此吧。", 37, 9401160, true, true)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.sendNormalTalk_Bottom("#face1#啊！艾丹有女朋友吗？", 37, 9401160, true, true)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.sendNormalTalk_Bottom("#b没有。", 57, 0, true, true)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.sendNormalTalk_Bottom("#face4#嗯哼~他和坐在那边的那个朋友之间好像有股微妙的气流在流动，好像是互相喜欢呢。", 37, 9401160, true, true)
                                                                    } else {
                                                                        if (status === a++) {
                                                                            cm.sendNormalTalk_Bottom("#face4#我不想招惹名草有主的人，但莫名觉得会很有趣。呼呼。", 37, 9401160, true, true)
                                                                        } else {
                                                                            if (status === a++) {
                                                                                cm.sendNormalTalk_Bottom("#b互相喜欢？哎呀，好像是艾丹单相思而已。", 57, 0, true, true)
                                                                            } else {
                                                                                if (status === a++) {
                                                                                    cm.sendNormalTalk_Bottom("#face2#是吗？那以后慢慢看吧。呼呼", 37, 9401160, true, true)
                                                                                } else {
                                                                                    if (status === a++) {
                                                                                        cm.sendNormalTalk_Bottom("#face1#客人来了，我要工作了。如果你有什么需要，就随时告诉我。", 37, 9401160, true, true)
                                                                                    } else {
                                                                                        if (status === a++) {
                                                                                            cm.forceCompleteQuest(65442);
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
};