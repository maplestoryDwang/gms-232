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
            cm.sendNormalTalk_Bottom("#face0#我们被包围了。", 36, 3004652, false, true, 1)
        } else {
            if (status === a++) {
                cm.askYesNo_Bottom("#face0#勇士，你能干掉这些搜索型T无人机吗？", 36, 3004652, 1)
            } else {
                if (status === a++) {
                    cm.forceStartQuest(37608, "");
                    cm.sendNormalTalk_Bottom("#face0#那就全靠你了。", 36, 3004652, false, true, 1)
                } else {
                    if (status === a++) {
                        cm.dispose()
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/37608.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk_Bottom("#face0#太……太帅了！", 36, 3004652, false, true, 1)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#刚才捕鼠的时候我就觉得，你真的非常强。", 36, 3004652, true, true, 1)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("过奖了……", 56, 0, true, true, 1)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face0#但是很奇怪……\r\n面对T-boy的时候，你怎么那么轻易就中招了呢？", 36, 3004652, true, true, 1)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("……", 56, 0, true, true, 1)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#face0#嗯……也许我们已经真的找到了前往地上世界的方法……", 36, 3004652, true, true, 1)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("嗯？", 56, 0, true, true, 1)
                                } else {
                                    if (status === a++) {
                                        cm.forceCompleteQuest(37608);
                                        cm.gainExp(17565641);
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