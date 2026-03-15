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
            cm.sendNormalTalk_Bottom("#face0#现在那帮家伙都撤了。", 36, 3001674 + cm.getPlayer().getGender(), false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#老人家……老人家！？", 36, 3001674 + cm.getPlayer().getGender(), true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face0#唔唔……唔……", 36, 3001676, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face1##fc0xFF25f1ca#好像是因为刚刚的刺激晕过去了，\r\n不过你这家伙……所谓的什么计划早就忘光光了吗！？", 36, 3001651, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face0#我说我知道，不过眼下还是这位老人家的情况更紧急吧？\r\n所以再稍微给我点时间。", 36, 3001674 + cm.getPlayer().getGender(), true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#face0##fc0xFF25f1ca#唔……知道了。", 36, 3001651, true, true)
                            } else {
                                if (status === a++) {
                                    cm.askAcceptDecline_Bottom("#face0##fc0xFFbfbfbf#（得叫醒老人家才行，去#k#r#m410000213##k#fc0xFFbfbfbf#捕捉#k#r#o2400553##k#fc0xFFbfbfbf#，\r\n拿来#b30个#k#k#b#i4036583##t4036583##k#fc0xFFbfbfbf#吧。）#k", 36, 3001674 + cm.getPlayer().getGender())
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("#face0#老人家，虽然有点累，还是在这里稍等片刻吧，\r\n我很快就会回来的，您懂的吧？", 36, 3001674 + cm.getPlayer().getGender(), false, true)
                                    } else {
                                        if (status === a++) {
                                            cm.forceStartQuest(39534, "");
                                            cm.OnStartNavigation(410000213, 0, "", 39534);
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
    }(d == 1) ? status++ : status--;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            var e = cm.getQuest();
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/39534.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.curNodeEventEnd(true);
            cm.eventSKill(0);
            cm.setInGameDirectionMode(true, false, true);
            cm.setStandAloneMode(true);
            cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
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
                            cm.setStandAloneMode(false);
                            cm.eventSKill(0);
                            cm.setInGameDirectionMode(false, true, false);
                            cm.dispose();
                            cm.warp(993160129, 0, false)
                        }
                    }
                }
            }
        }
    }
};