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
            cm.sendNormalTalk_Bottom("#face0#我已经做好准备要向竹野子表达我的心意了。", 37, 9111004, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("真的吗？确定不用我检查一下？", 57, 0, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face0#哼，对我来说这点事情只是举手之劳。现在快去安排我跟竹野子见面吧。", 37, 9111004, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("知道了。我先去问问棘鬼。", 57, 0, true, true)
                    } else {
                        if (status === a++) {
                            cm.forceStartQuest(58802, "");
                            cm.dispose()
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/58802.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk_Bottom("#face0#鵺准备好了吗？", 37, 9111002, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("嗯。下面我们要怎么做？", 57, 0, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face0#老实说，现在最大的障碍就是木野子。", 37, 9111002, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("没错。木野子的监视实在太严密了。光是单独把竹野子叫出来她就要发脾气……", 57, 0, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face0#我有办法避开木野子的监视和竹野子说上话。", 37, 9111002, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("是什么办法……？…………", 57, 0, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("#face0#等你准备好了就跟我对话。我会告诉你办法。", 37, 9111002, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.forceCompleteQuest(58802);
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
};