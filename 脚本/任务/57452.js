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
            cm.warp(807000000, 0);
            cm.sendNormalTalk_Bottom("#face0#我名为本多忠胜。此番是第一次与联合军的各位相见。", 37, 9130075, true, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#忠胜，辛苦你了。", 37, 9130026, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face0#这位是……？", 37, 9130021, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("这位是家康大人的臣子——本多忠胜。\r\n在我们撤退期间，他独自一人阻止了敌人的追击。", 57, 0, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face0#哦哦，竟能独自与追击队抗衡，还毫发无损。真是太厉害了。", 37, 9130009, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#face0#啊哈哈，我之前只听说过你是位猛将，没想到还真是名副其实啊。", 37, 9130000, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("#face0#嗯，能有这样的猛将加入联合军，真是如有神助啊。", 37, 9130006, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("（姬儿真是太厉害了。能在大家意见截然不同的情况下，如此自然地接受他们加入，还没有任何人能够为此而提出异议。）", 57, 0, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("（总之，就目前来讲，我们的战斗力确实比敌人差了一大截。而且这个差距差得不是一星半点……如果这两人的话都是真心实意的，那我们就获得了彻底扭转局势的机会。就算他们是心怀鬼胎而来，就目前的状况而言，我们也不会受到什么损失。能够彻底看穿这一点，并迅速展开行动……姬儿真是太厉害了。）", 57, 0, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("召集联合军全体成员集合？到底是有什么事啊……总之，快点返回枫叶山丘看看情况吧。", 57, 0, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.forceStartQuest(57452, "");
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/57452.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk_Bottom("#face0#嗯，大家都到齐了啊。我们是时候开始了吧？", 37, 9130000, false, true)
        } else {
            if (status === a++) {
                cm.forceCompleteQuest(57452);
                cm.gainExp(9726077);
                cm.dispose()
            }
        }
    }
};