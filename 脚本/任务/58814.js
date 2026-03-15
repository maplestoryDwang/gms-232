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
            cm.sendNormalTalk_Bottom("泉奈，你现在忙不？", 57, 0, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#哦，勇士你好。我现在不忙，你有事吗。", 37, 9111007, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("也没啥事……我就想问问你愿不愿意成为我的同伴？", 57, 0, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face0#唔，我听说其他妖怪都成了你的同伴。暗也是吧？", 37, 9111007, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("哦哦……暗已经是我的同伴了。", 57, 0, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#face0#那我还是算了。", 37, 9111007, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("诶？……为什么……为什么算了……", 57, 0, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("#face0#呵呵，你去问暗吧。我有事先告辞。", 37, 9111007, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.forceStartQuest(58814, "");
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
    }
    status++;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            var e = cm.getQuest();
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/58814.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk_Bottom("暗，你跟泉奈是不是吵架了？", 57, 0, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#啥……自从那天之后，我都没跟泉奈好好说过话啊。", 37, 9111006, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face0#你为什么这么问……？", 37, 9111006, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("因为泉奈说她不愿意跟你做同伴……", 57, 0, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face0#这怎么可能……这样吧，我先去找泉奈聊聊。", 37, 9111006, true, true)
                        } else {
                            if (status === a++) {
                                cm.forceCompleteQuest(58814);
                                cm.dispose();
                                cm.warp(800021120, 0, false)
                            }
                        }
                    }
                }
            }
        }
    }
};