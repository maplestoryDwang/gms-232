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
            var e = cm.getQuest();
            cm.askYesNo("这个任务的开始脚本还没有修复哦。它的脚本位于： #b 脚本/任务/64080.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk_Bottom("#face0#你回来了？", 37, 9400580, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#b你一个人生了火？", 57, 0, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face2#嘿嘿，之前#h0#不是告诉了我怎么做嘛。", 37, 9400580, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#b啊，在煮汤的时候？……一个人生火还挺难的呢……", 57, 0, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#b啊，你的手都受伤了啊！", 57, 0, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#face0#没关系，#h0#应该也累了……我们快休息下吧。", 37, 9400580, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("#b……谢谢你，你做得很好。", 57, 0, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.curNodeEventEnd(true);
                                        cm.setInGameDirectionMode(true, false, true);
                                        cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=25"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                        cm.inGameDirectionEvent_AskAnswerTime(1000)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("#face3#啊……难道那是……", 37, 9400580, false, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("#face3#小石啊，闭上眼……", 37, 9400580, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.forceCompleteQuest(64080);
                                                    cm.forceStartQuest(64081, "");
                                                    cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                                    cm.gainItem(4036378, -10)
                                                } else {
                                                    if (status === a++) {
                                                        cm.warp(867201601, 1);
                                                        cm.setInGameDirectionMode(false, true, false);
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
};