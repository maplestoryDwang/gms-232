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
            cm.sendNormalTalk_Bottom("不出所料，这次也是织田军捣的鬼。赫丽娜的担忧成了事实，他们与冒险岛的邪恶势力黑色之翼正式联手了。", 57, 0, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("但是，我还是觉得有些无法释然。织田军究竟想要做什么呢？难道说，正如同我们在冒险岛寻求地位高的人一样，织田军也在寻找新的力量吗？", 57, 0, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("不对，之所以我们会寻找新生力量，也是为了与织田军进行抗衡。但是，站在织田军的立场来看，我实在想象不出与黑色之翼的联手能为他们带去怎样的好处。至今为止，织田军都是以自身压倒性的力量让对手屈服，从不会主动利用其它势力。", 57, 0, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("而且，织田军还利用阴阳术让魔物们暴动……这件事又会为他们带去怎样的好处呢？这样的做法只会让冒险岛陷入混乱而已啊。", 57, 0, true, true)
                    } else {
                        if (status === a++) {
                            cm.askAcceptDecline_Bottom("唔……这样推测个没完实在不是我的风格。除了会让头越来越疼而已，实在想不出什么像样的结果来。看来我还是直接返回枫叶山丘，去将现在的情况报告给大家吧。", 57, 0)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("话说回来，不知道赶赴玩具城的幸盛现在情况如何了啊。我还是先去天空之城探探情况吧。说不定能在那里见到幸盛呢。", 57, 0, false, true)
                            } else {
                                if (status === a++) {
                                    cm.forceStartQuest(57137, "");
                                    cm.OnStartNavigation(200000000, 1, "9130079", 0);
                                    cm.dispose();
                                    cm.warp(200000000, 23, false)
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/57137.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk_Bottom("#face0#是剑斗啊。你在天空之城的任务已经顺利完成了吗？", 37, 9130024, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("（我把在天空之城发生的事情详细说给了幸盛听。）", 57, 0, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face0#你这边也出现了这样的事情啊。其实，我在玩具城也遇到了完全相同的事件。织田军和黑色之翼的联盟……对我们联合军和冒险岛来说，都是一个坏消息啊。", 37, 9130024, true, true)
                } else {
                    if (status === a++) {
                        cm.askYesNo_Bottom("#face0#接下来，我会返回枫叶山丘，将在天空之城和玩具城这两个区域发生的事件报告给大家知道。报告的任务交给我一个人来做就足够了。剑斗你还是继续留在冒险岛，负责收集织田军和黑色之翼的情报吧。", 37, 9130024)
                    } else {
                        if (status === a++) {
                            cm.forceCompleteQuest(57137);
                            cm.gainExp(5530);
                            cm.dispose()
                        }
                    }
                }
            }
        }
    }
};