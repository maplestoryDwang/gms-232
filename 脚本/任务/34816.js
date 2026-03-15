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
            cm.sendNormalTalk_Bottom("#face0#为了制作造型物,你能帮我收集一些#i4036171# #b#t4036171##k来吗？至少需要#b10个#k。", 37, 3001351, false, true, 1)
        } else {
            if (status === a++) {
                cm.askAcceptDecline_Bottom("#face0#决定立即前往#r#o2400406##k所在地吗？\r\n#b(接受时将自动移动。)", 37, 3001300, 1)
            } else {
                if (status === a++) {
                    cm.forceStartQuest(34816, "");
                    cm.dispose();
                    cm.warp(402000503, 0, false)
                }
            }
        }
    }
}

function end(d, c, b) {
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
            cm.Hidden_background("crystal", 1, 0, 0, 0);
            cm.Hidden_background("obj", 1, 0, 0, 0);
            cm.curNodeEventEnd(true);
            cm.setInGameDirectionMode(true, false, false);
            cm.setStandAloneMode(true);
            cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
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
                        cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 0, 300, -70)
                    } else {
                        if (status === a++) {
                            cm.inGameDirectionEvent_AskAnswerTime(300)
                        } else {
                            if (status === a++) {
                                cm.onTeleport(0, 3, cm.getPlayer().getId(), 394, -5);
                                cm.inGameDirectionEvent_ForcedFlip(-1);
                                cm.inGameDirectionEvent_AskAnswerTime(500)
                            } else {
                                if (status === a++) {
                                    cm.inGameDirectionEvent_ForcedFlip10(1, 50);
                                    cm.inGameDirectionEvent_AskAnswerTime(500)
                                } else {
                                    if (status === a++) {
                                        cm.inGameDirectionEvent_OneTimeAction(6, 0);
                                        cm.inGameDirectionEvent_AskAnswerTime(800)
                                    } else {
                                        if (status === a++) {
                                            cm.inGameDirectionEvent_OneTimeAction(6, 0);
                                            cm.inGameDirectionEvent_AskAnswerTime(800)
                                        } else {
                                            if (status === a++) {
                                                cm.inGameDirectionEvent_OneTimeAction(6, 0);
                                                cm.inGameDirectionEvent_AskAnswerTime(800)
                                            } else {
                                                if (status === a++) {
                                                    cm.inGameDirectionEvent_OneTimeAction(6, 0);
                                                    cm.updateInfoQuest(34816, "fin=1");
                                                    cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk_Bottom("#face2#太好了！完成了！", 37, 3001351, false, true, 1)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk_Bottom("#face0#我献给古代神的第一个作品……", 37, 3001351, true, true, 1)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.sendNormalTalk_Bottom("#face0#不知为什么,感觉今年的天神祭很让人期待……？", 37, 3001351, true, true, 1)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.dispose();
                                                                    cm.warp(940202030, 0, true);
                                                                    cm.getPlayer().levelUp();
                                                                    cm.setStandAloneMode(false);
                                                                    cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                                                    cm.setInGameDirectionMode(false, true, false)
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
            }
        }
    }
};