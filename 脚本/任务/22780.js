var status = -1;
var selectionLog = [];

function start(e, d, c) {
    if (cm.getPlayer().getGender() == 0) {
        var a = 1531000
    } else {
        var a = 1531052
    }
    if (status == 0 && e == 0) {
        cm.dispose();
        return
    }(e == 1) ? status++ : status--;
    selectionLog[status] = c;
    var b = -1;
    if (status <= b++) {
        cm.dispose()
    } else {
        if (status == b++) {
            cm.sendNormalTalk_Bottom("总之，先看看这个吧。", 37, 1531001, false, true)
        } else {
            if (status === b++) {
                cm.sendNormalTalk_Bottom("这是你消失那天出现的#b陷坑#k，\r\n自从它出现之后，便一直在扩张，后来扩张自己停止了。", 37, 1531001, true, true)
            } else {
                if (status === b++) {
                    cm.sendNormalTalk_Bottom("问题不是其本身，而是在它的内部。", 37, 1531001, true, true)
                } else {
                    if (status === b++) {
                        cm.sendNormalTalk_Bottom("现在所发生的是用现存的所有#b物理定律都难以说明的现象#k，\r\n因为无法靠近，调查难以进行，那地方就类似于黑洞一般。", 37, 1531001, true, true)
                    } else {
                        if (status === b++) {
                            cm.sendNormalTalk_Bottom("嗯……你继续。", 37, a, true, true)
                        } else {
                            if (status === b++) {
                                cm.sendNormalTalk_Bottom("因为在那附近而消失的人也相当多，\r\n因为无法接近，就难以知晓生死。\r\n现在虽然被处理为#b失踪者#k，但我们认为他们所有人都死了。", 37, 1531001, true, true)
                            } else {
                                if (status === b++) {
                                    cm.sendNormalTalk_Bottom("但是，从你所说明的内容来看，\r\n在这里面失踪的人有一部分#b似乎是掉落到了那边的世界。", 37, 1531001, true, true)
                                } else {
                                    if (status === b++) {
                                        cm.sendNormalTalk_Bottom("#face4#什么状况，杰，挺厉害的嘛。\r\n看来我去那边世界的功夫，你并没有在玩啊？", 37, a, true, true)
                                    } else {
                                        if (status === b++) {
                                            cm.sendNormalTalk_Bottom("#face2#这点小事嘛。", 37, 1531001, true, true)
                                        } else {
                                            if (status === b++) {
                                                cm.sendNormalTalk_Bottom("你是说人们掉落在了冒险岛世界某处，还活着吧？", 37, a, true, true)
                                            } else {
                                                if (status === b++) {
                                                    cm.sendNormalTalk_Bottom("#face2#嗯，估计是。", 37, 1531001, true, true)
                                                } else {
                                                    if (status === b++) {
                                                        cm.sendNormalTalk_Bottom("#face4#这么说来，我们要做的事情就很简单了。\r\n得去救人啊。", 37, a, true, true)
                                                    } else {
                                                        if (status === b++) {
                                                            cm.sendNormalTalk_Bottom("#face2#什么……？你刚回来就要走吗？", 37, 1531002, true, true)
                                                        } else {
                                                            if (status === b++) {
                                                                cm.askYesNo_Bottom("#face0#如果这是真的，亚乌应该能知道点什么。\r\n我们去问问亚乌吧。", 36, 1531003)
                                                            } else {
                                                                if (status === b++) {
                                                                    cm.sendNormalTalk_Bottom("#face0#从下一层出现的门再次回去就可以了。", 37, 1531003, false, true)
                                                                } else {
                                                                    if (status === b++) {
                                                                        cm.forceStartQuest(22780, "");
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/22780.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk_Bottom("#b失踪的人#k啊……", 37, 1531004, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#你难道想到什么了吗？", 37, 1531003, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("最好是去最近魔力流动有所扭曲的地方看看。", 37, 1531004, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("稍等一下，\r\n我得比较一下各地呈上来的报告书。", 37, 1531004, true, true)
                    } else {
                        if (status === a++) {
                            cm.forceCompleteQuest(22780);
                            cm.gainExp(1200);
                            cm.dispose()
                        }
                    }
                }
            }
        }
    }
};