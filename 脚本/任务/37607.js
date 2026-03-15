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
            cm.sendNormalTalk_Bottom("#face0#勇士，你能帮我调查#rT-boy#k到底在策划什么吗？", 36, 3004652, false, true, 1)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("嗯……", 56, 0, true, true, 1)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("（那个人在知道我是谁的情况下攻击了我。但是最后却好像手下留情了。）", 56, 0, true, true, 1)
                } else {
                    if (status === a++) {
                        cm.askYesNo_Bottom("（是不是应该帮拉索尔查明那个人的身份呢？）", 56, 3004611, 1)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face0#太好了！这下我就放心了。", 36, 3004652, false, true, 1)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#face0#那么，嗯……让我想想。震动开始的地方是……", 36, 3004652, true, true, 1)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("#face0#是南边。在铁路的尽头，有、有一辆废弃的列车。", 36, 3004651, true, true, 1)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("#face0#如果有什么线索……应，应该就在那里。", 36, 3004651, true, true, 1)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("#face0#好的，我马上过去看看。\r\n南边的路我不太熟……大叔，你能借我张地图吗？", 36, 3004652, true, true, 1)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("#face0#嗯～啊，不行～\r\n你以为花言巧语，我就、就会给你吗？", 36, 3004651, true, true, 1)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk_Bottom("#face0#切，小气鬼。", 36, 3004652, true, true, 1)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk_Bottom("#face0#要是我被困在迷宫里饿死，就都是大叔的错！呸呸！！", 36, 3004652, true, true, 1)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk_Bottom("（看来只能回来之后再和贝尔谈了。）", 56, 0, true, true, 1)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.forceStartQuest(37607, "");
                                                                cm.updateInfoQuest(37600, "10=h0;11=h0;02=h0;09=h0");
                                                                cm.OnStartNavigation(450014090, 0, "east00", 37607);
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/37607.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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