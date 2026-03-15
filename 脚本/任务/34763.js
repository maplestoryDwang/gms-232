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
            cm.sendNormalTalk_Bottom("#face13#嗯？我从没见过这根拐杖。这是什么……？", 36, 3002110, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#什么人！", 36, 3002119, true, true)
            } else {
                if (status === a++) {
                    cm.curNodeEventEnd(true);
                    cm.setInGameDirectionMode(true, false, true);
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
                                cm.onTeleport(0, 3, cm.getPlayer().getId(), 302, 105);
                                cm.inGameDirectionEvent_ForcedFlip(1);
                                cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
                                cm.setStandAloneMode(true);
                                cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/DLep4/die", 100);
                                cm.inGameDirectionEvent_PushScaleInfo(3000, 1500, 3000, 380, 145)
                            } else {
                                if (status === a++) {
                                    cm.inGameDirectionEvent_AskAnswerTime(1000)
                                } else {
                                    if (status === a++) {
                                        cm.npc_ChangeController(3002119, "oid=37948115", 455, -30, 6, 405, 505, 1, false, 1000, false);
                                        cm.npc_SetSpecialAction("oid=37948115", "summon", 0, 0);
                                        cm.npc_ChangeController(3002118, "oid=37948116", 600, 158, 6, 550, 650, 1, false, 1000, false);
                                        cm.npc_SetSpecialAction("oid=37948116", "summon", 0, 0);
                                        cm.npc_ChangeController(3002118, "oid=37948117", 720, 158, 7, 670, 770, 1, false, 1000, false);
                                        cm.npc_SetSpecialAction("oid=37948117", "summon", 0, 0);
                                        cm.npc_ChangeController(3002118, "oid=37948118", 840, 158, 7, 790, 890, 1, false, 1000, false);
                                        cm.npc_SetSpecialAction("oid=37948118", "summon", 0, 0);
                                        cm.npc_ChangeController(3002118, "oid=37948119", -100, 158, 4, -150, -50, 0, false, 1000, false);
                                        cm.npc_SetSpecialAction("oid=37948119", "summon", 0, 0);
                                        cm.npc_ChangeController(3002118, "oid=37948120", 20, 158, 5, -30, 70, 0, false, 1000, false);
                                        cm.npc_SetSpecialAction("oid=37948120", "summon", 0, 0);
                                        cm.npc_ChangeController(3002118, "oid=37948121", 140, 158, 5, 90, 190, 0, false, 1000, false);
                                        cm.npc_SetSpecialAction("oid=37948121", "summon", 0, 0);
                                        cm.inGameDirectionEvent_AskAnswerTime(300)
                                    } else {
                                        if (status === a++) {
                                            cm.updateInfoQuest(34770, "20=h2;21=h0;22=h0;23=h0;24=h0;25=h0;19=B;29=h0");
                                            cm.inGameDirectionEvent_AskAnswerTime(1700)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("#face0#好久没有外人到这里来了。", 37, 3002119, false, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk_Bottom("#face0#但这里是神圣的领域，禁止凡人出入！", 37, 3002119, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk_Bottom("#face0#你们最好乖乖回去！", 37, 3002119, true, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk_Bottom("#face14#但是……村子有危险！我必须去见狐神！", 37, 3002110, true, true)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.sendNormalTalk_Bottom("#face0#他是不会见你这样的毛孩子的！快回去！", 37, 3002119, true, true)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.sendNormalTalk_Bottom("没办法。只能先拖延一下时间了。", 57, 0, true, true)
                                                                } else {
                                                                    if (status === a++) {
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
                                                                                    cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0)
                                                                                } else {
                                                                                    if (status === a++) {
                                                                                        cm.setStandAloneMode(false);
                                                                                        cm.setInGameDirectionMode(false, true, false);
                                                                                        cm.dispose();
                                                                                        cm.openNpc("副本_狐狸谷_冲入云霄")
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