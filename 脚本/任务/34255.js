var status = -1;

function start() {
    action(1, 0, 0)
}

function start(d, c, b) {
    status++;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            var e = cm.getQuest();
            cm.askYesNo("没有修复脚本位于： #b 脚本/任务/34255.js#k\r\n\r\n那么现在，你要立刻开始这个任务吗？")
        } else {
            if (status == a++) {
                cm.forceStartQuest();
                cm.dispose()
            }
        }
    }
}

function end(d, c, b) {
    status++;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            cm.sendNormalTalk_Bottom("#face0#哎呦，谢谢夏伊了。你点的东西马上送到。", 36, 3003413, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("谢谢。", 56, 0, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("那个……你知道那件惨案吗？", 56, 0, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face0#你是说……惨案？当然知道。那都是好几年前的事了……\r\n不是在你留学之前发生的吗？", 36, 3003413, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("听说当时有人活下来了，难道是……", 56, 0, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#face0#这、这我不知道。抱歉啊。\r\n不如你去问问其他人吧？", 36, 3003413, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("#face0#不然去问问#b瓷器店大婶#k吧？", 36, 3003413, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.forceCompleteQuest(34255);
                                        cm.OnStartNavigation(450006130, 1, "3003427", 0);
                                        cm.gainItem(4036310, -20);
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