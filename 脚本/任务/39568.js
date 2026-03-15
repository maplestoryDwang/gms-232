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
            cm.curNodeEventEnd(true);
            cm.setInGameDirectionMode(true, false, false);
            cm.setStandAloneMode(true);
            cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 2);
            cm.inGameDirectionEvent_AskAnswerTime(500)
        } else {
            if (status === a++) {
                cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 2147483647, 2147483647, 2147483647)
            } else {
                if (status === a++) {
                    cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0)
                } else {
                    if (status === a++) {
                        cm.inGameDirectionEvent_AskAnswerTime(300)
                    } else {
                        if (status === a++) {
                            cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                            cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0)
                        } else {
                            if (status === a++) {
                                cm.warp(993160139, 0, false);
                                cm.setStandAloneMode(false);
                                cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/39568.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.askAcceptDecline_Bottom("#face0#师父给的卷轴就在手中，难道是信？\r\n虽然不知道里面是什么，还是打开看看吧。", 36, 3001674 + cm.getPlayer().getGender(), 1)
        } else {
            if (status === a++) {
                cm.forceCompleteQuest(39568);
                cm.finishAchievement(265);
                cm.teachSkill(160001005, 0, -1);
                cm.teachSkill(160001005, 1, 1);
                cm.getTopMsgFont("获得了<专注>技能。", 3, 20, 20, 0, 0);
                cm.sendNormalTalk_Bottom("#face7#这不是……法术嘛？额，而且下面还写了字，\r\n“期待有一天能听到你的旅途见闻。”", 36, 3001674 + cm.getPlayer().getGender(), false, true, 1);
                cm.forceStartQuest(39509, "");
                cm.forceCompleteQuest(39509)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face2#与师父重逢的那一天……我会成为让师父，\r\n不，是连太乙真人都叹为观止的道士的，您就瞧好了吧。", 36, 3001674 + cm.getPlayer().getGender(), true, true, 1)
                } else {
                    if (status === a++) {
                        cm.dispose()
                    }
                }
            }
        }
    }
};