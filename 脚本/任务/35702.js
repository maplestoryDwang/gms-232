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
            cm.sendNormalTalk_Bottom("#face0#你现在才来啊，#h0#。", 37, 3003755, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#已经下令集合出动了。请乘坐和我一样的战舰吧。", 37, 3003755, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("啊哈，有梅尔朗在身边，感觉很棒啊？", 57, 0, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face0#是吗？", 37, 3003755, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("在对付威尔的时候你真的帮了我很大的忙，这次也要拜托你了，梅尔朗！", 57, 0, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#face0#这次会怎么样我可就不知道了。", 37, 3003755, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("嗯？", 57, 0, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("#face0#虽然说镜子能映出人像……", 37, 3003755, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("#fc0xFFAAAAAA#(真是搞不懂他的想法的说话方式。)", 57, 0, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("#face0#……没事。到时候一切都会真相大白，是我说了些没用的话。", 37, 3003755, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.askAcceptDecline_Bottom("#face0#那就快点去乘坐战舰吧。\r\n#r(同意后将立刻移动。)#k", 37, 3003755)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk_Bottom("……", 57, 0, false, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk_Bottom("为了重要的人们……走吧。", 57, 0, true, true)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.forceStartQuest(35702, "");
                                                                cm.dispose();
                                                                cm.warp(993063001, 0, false)
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/35702.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk_Bottom("#face0#天好黑，什么都看不到啊。", 37, 3003758, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#这可怎么办啊。", 37, 3003758, true, true)
            } else {
                if (status === a++) {
                    cm.forceCompleteQuest(35702);
                    cm.gainExp(170671356);
                    cm.dispose()
                }
            }
        }
    }
};