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
            cm.sendNormalTalk_Bottom("鵺，你好。你愿不愿意成为我的同伴？", 57, 0, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#……，你是什么玩意儿。竟妄想跟我成为同伴？", 37, 9111004, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("因为我觉得大家一起和睦相处很开心啊……", 57, 0, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face0#哼，你是不是以为我很闲有空陪你玩耍……要是你帮我做件事，我就考虑下。", 37, 9111004, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("什么事？", 57, 0, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#face0#你去把那只红毛妖鬼给我抓来，我有账要跟他算。", 37, 9111004, true, true)
                            } else {
                                if (status === a++) {
                                    cm.forceStartQuest(58800, "");
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/58800.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk_Bottom("#face0#喂，你有事吗？", 37, 9111002, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("请你跟我去见鵺好吗。他说只要我把你带去，就答应做我的同伴。", 57, 0, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face0#鵺这么说的？我想想。", 37, 9111002, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face0#虽然不知道他为什么要见我，但还是跟你走一趟吧。", 37, 9111002, true, true)
                    } else {
                        if (status === a++) {
                            cm.dispose();
                            cm.warp(800021112, 0, false)
                        }
                    }
                }
            }
        }
    }
};