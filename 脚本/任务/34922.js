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
            cm.sendNormalTalk_Bottom("#face0#啊……重建工作有这么多好像足够了，叽勒。你也最好去休息一下……", 36, 3001510, 0, 1)
        } else {
            if (status === a++) {
                cm.askAcceptDecline_Bottom("#face0#啊，在这之前……你去把剩下的材料送到仓库去，叽勒。材料的保存非常重要，叽勒……", 36, 3001510)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face0#仓库就在那个下面。如果有时间，请再到这里来一下。叽，叽勒……我会告诉你一个只有商队成员知道的修习方法。", 36, 3001510, 0, 1);
                    cm.gainItem(4036352, 1)
                } else {
                    if (status === a++) {
                        cm.forceStartQuest(34922, "");
                        cm.OnStartNavigation(402000600, 1, "3001403", 34922);
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/34922.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.setInGameDirectionMode(true, false, false);
            cm.setStandAloneMode(true);
            cm.OverlapScreenDetail19(0, 1000, 3000, 1);
            cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 2147483647, 2147483647, 2147483647);
            cm.gainItem(4036352, -1)
        } else {
            if (status === a++) {
                cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0)
            } else {
                if (status === a++) {
                    cm.inGameDirectionEvent_AskAnswerTime(300)
                } else {
                    if (status === a++) {
                        cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                        cm.inGameDirectionEvent_PushScaleInfo(0, 0, 2000, 0, 900, 150)
                    } else {
                        if (status === a++) {
                            cm.onTeleport(0, 3, cm.getPlayer().getId(), 756, 90);
                            cm.inGameDirectionEvent_ForcedFlip(1);
                            cm.sendNormalTalk_Bottom("#face0#哈，重建工作终于完成了。维依说把东西放进仓库之后，再回去找他？", 37, 3001500 + cm.getPlayer().getGender(), 0, 1)
                        } else {
                            if (status === a++) {
                                cm.npc_ChangeController(3001511, "oid=144011724", 1000, 76, 43, 950, 1050, 0, true, 300, false);
                                cm.npc_SetSpecialAction("oid=144011724", "summon", 0, 0);
                                cm.npc_SetForceMove("oid=144011724", 1, 300, 100);
                                cm.inGameDirectionEvent_AskAnswerTime(1000)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("#face2#啊，那个孩子是之前的那个……叫马尔的孩子……", 37, 3001500 + cm.getPlayer().getGender(), 0, 1)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("#face2#他好像想到避难处外面去……太危险了。", 37, 3001500 + cm.getPlayer().getGender(), 1, 1)
                                    } else {
                                        if (status === a++) {
                                            cm.inGameDirectionEvent_PushScaleInfo(2000, 0, 2000, 2000, 1200, 150)
                                        } else {
                                            if (status === a++) {
                                                cm.inGameDirectionEvent_ForcedFlip10(2, 300);
                                                cm.inGameDirectionEvent_AskAnswerTime(2000)
                                            } else {
                                                if (status === a++) {
                                                    cm.npc_setForceFlip("oid=144011724", -1);
                                                    cm.npc_SetSpecialAction("oid=144011724", "falldown", 0, 1);
                                                    cm.inGameDirectionEvent_AskAnswerTime(3500)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk_Bottom("#face2#从这里出去太危险了。快回到避难处去。", 37, 3001500 + cm.getPlayer().getGender(), 0, 1)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk_Bottom("#face2#嘿嘿……", 37, 3001511, 1, 1)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.npc_setForceFlip("oid=144011724", 1);
                                                                cm.npc_SetForceMove("oid=144011724", 1, 150, 100);
                                                                cm.inGameDirectionEvent_AskAnswerTime(500)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.inGameDirectionEvent_ForcedFlip10(2, 300);
                                                                    cm.sendNormalTalk_Bottom("#face4#拦不住他。为了以防万一，只能跟过去看看了。", 37, 3001500 + cm.getPlayer().getGender(), 0, 1);
                                                                    cm.npc_LeaveField("oid=62533");
                                                                    cm.npc_LeaveField("oid=62535");
                                                                    cm.npc_LeaveField("oid=62537");
                                                                    cm.npc_LeaveField("oid=62538")
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.inGameDirectionEvent_PushScaleInfo(500, 0, 2000, 500, 1300, 150)
                                                                    } else {
                                                                        if (status === a++) {
                                                                            cm.inGameDirectionEvent_AskAnswerTime(1000)
                                                                        } else {
                                                                            if (status === a++) {
                                                                                cm.forceCompleteQuest(34922);
                                                                                cm.gainExp(932);
                                                                                cm.updateInfoQuest(34922, "exp=1");
                                                                                cm.updateInfoQuest(34995, "00=h1;10=h0;01=h1;11=h0;02=h1;12=h0;13=h0;04=h1;23=h0;14=h0;05=h0;24=h0;15=h0;06=h0;16=h0;07=h0;17=h0;09=h0");
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
                                                                                            cm.setStandAloneMode(false);
                                                                                            cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                                                                            cm.warp(402000613, 0, false);
                                                                                            cm.eventSKill(0);
                                                                                            cm.setInGameDirectionMode(false, true, false);
                                                                                            cm.npc_LeaveField("oid=144011724");
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
            }
        }
    }
};