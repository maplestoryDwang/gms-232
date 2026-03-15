var status = -1;
var selectionLog = [];

function start(d, c, b) {
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
            cm.curNodeEventEnd(true);
            cm.setInGameDirectionMode(true, false, true);
            cm.setStandAloneMode(true);
            cm.OverlapScreenDetail19(0, 1000, 3000, 1);
            cm.inGameDirectionEvent_PushScaleInfo(500, 1000, 500, 50, -70)
        } else {
            if (status === a++) {
                cm.curNodeEventEnd(true);
                cm.inGameDirectionEvent_AskAnswerTime(500)
            } else {
                if (status === a++) {
                    cm.onTeleport(0, 3, cm.getPlayer().getId(), 563, -158);
                    cm.inGameDirectionEvent_AskAnswerTime(500)
                } else {
                    if (status === a++) {
                        cm.inGameDirectionEvent_ForcedFlip(-1);
                        cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                        cm.npc_ChangeController(3001310, "oid=513062", 520, 31, 27, 470, 570, 1, true, false);
                        cm.npc_SetSpecialAction("oid=513062", "summon", 0, 0);
                        cm.npc_ChangeController(3001311, "oid=513063", 603, -31, 20, 553, 653, 1, true, false);
                        cm.npc_SetSpecialAction("oid=513063", "summon", 0, 0);
                        cm.sendNormalTalk_Bottom("#face0#好，上次的课题大家都完成了吧？", 37, 3001304, false, true)
                    } else {
                        if (status === a++) {
                            cm.inGameDirectionEvent_AskAnswerTime(1000)
                        } else {
                            if (status === a++) {
                                cm.inGameDirectionEvent_AskAnswerTime(1000)
                            } else {
                                if (status === a++) {
                                    cm.effect_NormalSpeechBalloon("!", 0, 0, 0, 1000, 3001310, cm.getPlayer().getId());
                                    cm.sendNormalTalk_Bottom("#face2#哎呀，对了！课题！", 37, 3001310, false, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("#face4#啧啧。", 37, 3001311, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("#face0#唉……没做作业的同学今天下课后全部留下。", 37, 3001304, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("#face0#嗯，这节课要直接动手制作水晶门。顺利完成今天的任务后，可容纳我们班全体同学的空间就要制作完成了！大家是不是很期待啊？", 37, 3001304, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk_Bottom("#face0#今天需要的水晶有点特别。这种危险水晶就放在教室里面。大家快去收集用于制作水晶门的水晶吧。", 37, 3001304, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk_Bottom("#face0#赶快进入右侧的隐藏传送口，消灭#o2400403#后收集#b20个#k#i4036168##t4036168#。", 37, 3001304, true, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk_Bottom("#face0#好，那快出发！", 37, 3001310, true, true)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.setPartner(1, 3001310, 80002331, 0);
                                                                cm.OnStartNavigation(402000535, 0, "", 0);
                                                                cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                                                                cm.inGameDirectionEvent_PushScaleInfo(0, 1000, 2147483647, 2147483647, 2147483647)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.inGameDirectionEvent_AskAnswerTime(300)
                                                                    } else {
                                                                        if (status === a++) {
                                                                            cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                                                            cm.npc_LeaveField("oid=513062");
                                                                            cm.npc_LeaveField("oid=513062");
                                                                            cm.npc_LeaveField("oid=513063");
                                                                            cm.npc_LeaveField("oid=513063");
                                                                            cm.setStandAloneMode(false);
                                                                            cm.setInGameDirectionMode(false, true, false);
                                                                            cm.forceStartQuest(34811, "");
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
                    }
                }
            }
        }
    }
}

function end(c, b, a) {
    if (cm.getInfoQuest(34811) == "room=1") {
        end1(c, b, a)
    } else {
        end2(c, b, a)
    }
}

function end1(d, c, b) {
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
            cm.setPartner(1, 3001310, 80002331, 0);
            cm.sendNormalTalk_Bottom("#face0#今天的课就上到这。没交作业的同学跟我来。", 37, 3001304, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face3#伊利温……你先走……我搞错了……", 37, 3001310, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face0#哈哈，明天见，莫里奥。", 37, 3001351, true, true)
                } else {
                    if (status === a++) {
                        cm.forceCompleteQuest(34811);
                        cm.updateInfoQuest(34811, "room=1;exp=1");
                        cm.updateInfoQuest(15710, "lasttime=19/12/02/12/14");
                        cm.setPartner(0, 3001310, 0, 0);
                        cm.gainItem(4036168, -20);
                        cm.dispose()
                    }
                }
            }
        }
    }
}

function end2(d, c, b) {
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
            cm.sendNormalTalk_Bottom("#face0#水晶门终于完成了！", 37, 3001304, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#接下来要确认一下，打造的这个空间是否能容纳所有人？", 37, 3001304, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face0#好，那大家一起进去吧？", 37, 3001304, true, true)
                } else {
                    if (status === a++) {
                        cm.dispose();
                        cm.warp(940202022, 0)
                    }
                }
            }
        }
    }
};