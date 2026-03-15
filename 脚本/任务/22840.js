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
            cm.sendNormalTalk_Bottom("……你朋友的事情我很遗憾。", 37, 1531004, false, true)
        } else {
            if (status === b++) {
                cm.sendNormalTalk_Bottom("#face0#事出紧急，我现在真是立刻跳入陷坑的心都有了。", 37, a, true, true)
            } else {
                if (status === b++) {
                    cm.sendNormalTalk_Bottom("……你认为让人变得强大的是什么，\r\n之前我曾经问过你这个问题。", 37, 1531004, true, true)
                } else {
                    if (status === b++) {
                        cm.sendNormalTalk_Bottom("你当时说是#b努力#k。", 37, 1531004, true, true)
                    } else {
                        if (status === b++) {
                            cm.sendNormalTalk_Bottom("在学习魔法之前，我就是一头野狼。\r\n狼之所以会比其他动物强大，就是因为懂得#b等待#k。", 37, 1531004, true, true)
                        } else {
                            if (status === b++) {
                                cm.sendNormalTalk_Bottom("在野生的草原上，狩猎失败就等于死亡。\r\n就算再怎么饥饿难耐也得等着。", 37, 1531004, true, true)
                            } else {
                                if (status === b++) {
                                    cm.sendNormalTalk_Bottom("你这次要学习的就是等待，在等待的过程中壮大力量。", 37, 1531004, true, true)
                                } else {
                                    if (status === b++) {
                                        cm.sendNormalTalk_Bottom("#face4#…………", 37, a, true, true)
                                    } else {
                                        if (status === b++) {
                                            cm.sendNormalTalk_Bottom("越说越多了呢，\r\n先去#b水下世界#k冷静一下头脑怎么样？", 37, 1531004, true, true)
                                        } else {
                                            if (status === b++) {
                                                cm.askYesNo_Bottom("在冷静自己的同时，仔细观察下附近有没有#b奇怪的征兆#k，\r\n我总觉得那地方魔力的流动很奇怪。\r\n#b(如果答应就前往水下世界。)#k", 36, 1531004)
                                            } else {
                                                if (status === b++) {
                                                    cm.forceStartQuest(22840, "");
                                                    cm.dispose();
                                                    cm.warp(230020300, 0, false)
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/22840.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
        } else {
            if (status == a++) {
                cm.forceStartQuest();
                cm.dispose()
            }
        }
    }
}

function end(e, d, c) {
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
            cm.sendNormalTalk("嘶嘶-嘶嘶-听说今天百货公司打折-嘶嘶-咖啡-一-嘶嘶-嘶嘶嘶-考试成绩-嘶嘶-嘶嘶嘶--\r\n#b(城里人的闲聊声伴随着杂音传来。)#k", 5, 1531055, false, true)
        } else {
            if (status === b++) {
                cm.sendNormalTalk_Bottom("#face2#哎！那到底是什么！", 37, 1531003, true, true)
            } else {
                if (status === b++) {
                    cm.sendNormalTalk_Bottom("这……好像是我所在的世界的建筑物啊？而且只是一部分。", 37, a, true, true)
                } else {
                    if (status === b++) {
                        cm.sendNormalTalk_Bottom("这个世界的建筑物啊……那肯定是，从陷坑掉下来的。", 37, 1531004, true, true)
                    } else {
                        if (status === b++) {
                            cm.sendNormalTalk_Bottom("此事有点严重了，\r\n超能力者，希望你能负责一个重大的任务。", 37, 1531004, true, true)
                        } else {
                            if (status === b++) {
                                cm.sendNormalTalk_Bottom("#b(通过左侧的电灯泡，继续和亚乌对话。)#k", 37, a, true, true)
                            } else {
                                if (status === b++) {
                                    cm.forceCompleteQuest(22840);
                                    cm.gainExp(163530);
                                    cm.playerMessage(1, "通过左侧的电灯泡, 继续和亚乌对话");
                                    cm.dispose()
                                }
                            }
                        }
                    }
                }
            }
        }
    }
};