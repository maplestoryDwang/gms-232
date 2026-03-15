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
            cm.sendNormalTalk_Bottom("#face3#那，让我瞧瞧……虎影解决师要负责的委托就是……\r\n帮助其他解决师，嘻嘻！", 36, 3001652, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face7#就让我当个区区助手？没有其他委托了吗？\r\n就是那种听起来更酷炫更厉害的委托，比方说打怪什么的。", 36, 3001674 + cm.getPlayer().getGender(), true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face2#那是因为……你是才登记的新人嘛，\r\n当然要从小委托开始接起咯？", 36, 3001652, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face2#切……", 36, 3001674 + cm.getPlayer().getGender(), true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face4#随着所解决事件的数量增多，我也会给你分配更为重要的委托，\r\n大可不必操之过急。", 36, 3001652, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#face0#就是要我证明自己的实力吧，\r\n不过你可要记住，你很快就会认可我虎影的。", 36, 3001674 + cm.getPlayer().getGender(), true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("#face7#只要能赚钱，还用得着说吗？", 36, 3001652, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.askAcceptDecline_Bottom("#face4#那就请你立刻去见一见委托人吧，\r\n就是站在那边的#b#p3001605##k，蓝皮肤的那位。", 36, 3001652)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("#face7#那我就期待这一天尽快到来，让我能够尽快给你安排你想要的委托，\r\n祝你好运咯，嘻嘻嘻！", 36, 3001652, false, true)
                                        } else {
                                            if (status === a++) {
                                                cm.forceStartQuest(39517, "");
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/39517.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
                                cm.dispose();
                                cm.warp(993160137, 0, false)
                            }
                        }
                    }
                }
            }
        }
    }
};