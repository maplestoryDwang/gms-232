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
            cm.forceStartQuest(58771, "");
            cm.forceStartQuest(58708, "");
            cm.curNodeEventEnd(true);
            cm.eventSKill(0);
            cm.setInGameDirectionMode(true, false, true);
            cm.sendNormalTalk_Bottom("#face2#……我收到了大太法师的启示。", 37, 9110002, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face2#「最后的五行在天狗手上。马上去消灭天狗，回收五行……」", 37, 9110002, true, true)
            } else {
                if (status === a++) {
                    cm.inGameDirectionEvent_AskAnswerTime(1500)
                } else {
                    if (status === a++) {
                        cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh"], [0, 0, 0, 1, 0, 0, 0, 0]);
                        cm.sendNormalTalk_Bottom("#face2#这次的语气和大太法师平时有些不一样……这让我有点担心……\r\n可是既然他这么说……。", 37, 9110002, false, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("……这事就交给我吧。我跟天狗也算认识，正好我有事想问他。\r\n这次的启示内容虽有点过激，但总之我先和天狗谈谈吧。\r\n肯定有其他方法的。", 57, 0, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#face2#……好吧，我相信你会做出明智的处理。\r\n这事就拜托你了……。你多保重，早点回来。", 37, 9110002, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("你别太多虑……。\r\n好，我去去就回。", 57, 0, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("#face0##h0#…。", 37, 9110002, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("#face1#……真的非常感谢。", 37, 9110002, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.eventSKill(0);
                                                cm.setInGameDirectionMode(false, true, false);
                                                cm.sendNormalTalk_Bottom("天狗好像不在这里。\r\n看样子我得去月下竹林。", 57, 0, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.dispose();
                                                    cm.warp(800010200, 0, false)
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/58771.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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